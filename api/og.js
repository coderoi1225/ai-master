// OG 이미지 동적 생성 (Edge function — SVG 응답)
// 사용: /api/og?stage=5&title=Claude+Code+완전+정복&subtitle=AI+에이전트+개발+운영체계
//
// 카톡·텔레그램·디스코드 등 주요 한국 채널은 SVG OG 정상 인식.
// Facebook/LinkedIn 등 일부 플랫폼은 PNG 권장 — 그 경우 별도 PNG fallback 필요.

export const config = { runtime: 'edge' };

const COLORS = {
  '0': '#d4a017', // home
  '1': '#3b82f6',
  '2': '#10b981',
  '3': '#8b5cf6',
  '4': '#ec4899',
  '5': '#f97316',
  '6': '#14b8a6',
  '7': '#f59e0b',
  '8': '#06b6d4',
  '9': '#d4a017',
  bonus: '#d4a017',
  trouble: '#ef4444',
};

function escapeXml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function wrapText(text, maxChars) {
  const words = String(text).split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if ((line + ' ' + w).trim().length > maxChars) {
      if (line) lines.push(line);
      line = w;
    } else {
      line = (line + ' ' + w).trim();
    }
  }
  if (line) lines.push(line);
  return lines.slice(0, 2);
}

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const stageRaw = searchParams.get('stage') || '0';
  const titleRaw = searchParams.get('title') || 'AI 오케스트레이션 9 Stage 커리큘럼';
  const subtitleRaw = searchParams.get('subtitle') || '';

  const stage = String(stageRaw);
  const accent = COLORS[stage] || '#d4a017';

  const isHome = stage === '0';
  const isBonus = stage === 'bonus';
  const isTrouble = stage === 'trouble';

  let badge;
  if (isHome) badge = '★ VIBE MASTER · 9 STAGE';
  else if (isBonus) badge = '★ BONUS · 8 MODULES';
  else if (isTrouble) badge = '★ TROUBLESHOOTING · 50선';
  else badge = `★ STAGE ${stage} / 9`;

  const titleLines = wrapText(titleRaw, 22);
  const subtitle = subtitleRaw.slice(0, 60);

  const titleY1 = titleLines.length === 1 ? 320 : 270;
  const titleY2 = 370;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#080b10"/>
      <stop offset="1" stop-color="#141922"/>
    </linearGradient>
    <linearGradient id="topbar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${accent}"/>
      <stop offset="0.5" stop-color="#8b5cf6"/>
      <stop offset="1" stop-color="#d4a017"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.5">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.15"/>
      <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#topbar)"/>

  <text x="60" y="115" font-family="JetBrains Mono, ui-monospace, monospace" font-size="22" font-weight="700" fill="${accent}" letter-spacing="3">${escapeXml(badge)}</text>

  <text x="60" y="${titleY1}" font-family="Noto Sans KR, system-ui, sans-serif" font-size="76" font-weight="900" fill="#e2e8f0" letter-spacing="-2">${escapeXml(titleLines[0] || '')}</text>
  ${titleLines[1] ? `<text x="60" y="${titleY2}" font-family="Noto Sans KR, system-ui, sans-serif" font-size="76" font-weight="900" fill="${accent}" letter-spacing="-2">${escapeXml(titleLines[1])}</text>` : ''}

  ${subtitle ? `<text x="60" y="450" font-family="Noto Sans KR, system-ui, sans-serif" font-size="28" font-weight="500" fill="#94a3b8">${escapeXml(subtitle)}</text>` : ''}

  <text x="60" y="535" font-family="Gowun Batang, serif" font-size="26" font-style="italic" fill="#64748b">"기술은 AI가, 영혼은 사람이"</text>

  <text x="60" y="585" font-family="Noto Sans KR, system-ui, sans-serif" font-size="20" font-weight="900" fill="#e2e8f0" letter-spacing="-1">VIBE<tspan fill="${accent}">.</tspan>MASTER</text>

  <circle cx="1130" cy="100" r="18" fill="${accent}" opacity="0.85"/>
  <circle cx="1130" cy="100" r="32" fill="none" stroke="${accent}" stroke-width="2" opacity="0.3"/>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800, immutable',
    },
  });
}
