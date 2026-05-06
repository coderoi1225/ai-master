export const config = { runtime: 'edge' };

const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';
const ANTHROPIC_VERSION = '2023-06-01';

// ════════════════════════════════════════════════════════════
// Rate Limiting — 메모리 기반 sliding window
// IP당 1분에 N회 제한
//
// ⚠️ 주의: Edge 인스턴스 단위 (분산 정확하지 않음)
// 정확한 처리 필요시 → Vercel KV 또는 Upstash Redis 사용
// 현재는 1차 방어선 (어뷰징 80% 차단)
// ════════════════════════════════════════════════════════════

const RATE_LIMIT = 10;        // requests
const RATE_WINDOW_MS = 60_000; // per minute
const RATE_BURST = 3;          // 동시 burst 허용
const rateMap = new Map();     // IP -> [timestamps]

function checkRateLimit(ip) {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT) {
    const retryAfter = Math.max(
      1,
      Math.ceil((timestamps[0] + RATE_WINDOW_MS - now) / 1000)
    );
    return { allowed: false, retryAfter, remaining: 0 };
  }

  timestamps.push(now);
  rateMap.set(ip, timestamps);

  // 메모리 누수 방지 — 1000개 넘으면 오래된 IP 정리
  if (rateMap.size > 1000) {
    for (const [k, v] of rateMap.entries()) {
      if (
        v.length === 0 ||
        now - v[v.length - 1] > 5 * RATE_WINDOW_MS
      ) {
        rateMap.delete(k);
      }
    }
  }

  return {
    allowed: true,
    remaining: RATE_LIMIT - timestamps.length,
    reset: Math.ceil((now + RATE_WINDOW_MS) / 1000),
  };
}

function getClientIp(request) {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'anon'
  );
}

export default async function handler(request) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(request) });
  }

  if (request.method !== 'POST') {
    return json({ error: 'Method Not Allowed' }, 405, request);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return json({ error: 'ANTHROPIC_API_KEY not configured' }, 500, request);
  }

  // ─── Rate Limit 검사 ───────────────────────────────
  const ip = getClientIp(request);
  const rl = checkRateLimit(ip);

  if (!rl.allowed) {
    return new Response(
      JSON.stringify({
        error: 'Rate limit exceeded',
        message: `1분에 ${RATE_LIMIT}회 한도를 초과했습니다. ${rl.retryAfter}초 후 다시 시도해주세요.`,
        retry_after: rl.retryAfter,
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(rl.retryAfter),
          'X-RateLimit-Limit': String(RATE_LIMIT),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(
            Math.ceil((Date.now() + rl.retryAfter * 1000) / 1000)
          ),
          ...corsHeaders(request),
        },
      }
    );
  }

  // ─── Anthropic 호출 ───────────────────────────────
  const body = await request.text();

  const upstream = await fetch(ANTHROPIC_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': ANTHROPIC_VERSION,
    },
    body,
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type':
        upstream.headers.get('Content-Type') ?? 'application/json',
      'X-RateLimit-Limit': String(RATE_LIMIT),
      'X-RateLimit-Remaining': String(rl.remaining),
      'X-RateLimit-Reset': String(rl.reset),
      ...corsHeaders(request),
    },
  });
}

function corsHeaders(request) {
  const origin = request.headers.get('origin') ?? '';
  const allowList = (process.env.ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  const allow =
    allowList.length === 0 || allowList.includes(origin) ? origin : '';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

function json(payload, status, request) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(request) },
  });
}
