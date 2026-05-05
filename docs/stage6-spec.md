# Stage 6 스펙: 백엔드 인프라 완전 이해

## 기본 정보
- Stage 번호: 6 / 9
- 포인트 색상: #14b8a6 (teal)
- 학습 시간: 약 6~8시간
- 산출물: 3개

## 헤드라인
"단단한 백엔드가 서비스를 살린다"

## 리드 문구
여기가 단단해야 고도화된 서비스를 만들 수 있습니다.
이론과 각 프로그램의 역할을 제대로 이해하면 Claude Code가 만든 코드가 보입니다.

---

## 목차 섹션 (순서대로)

### 파트 A: 백엔드 개념 완전 이해
- 프론트엔드 ↔ API ↔ 백엔드 ↔ DB 전체 데이터 흐름 다이어그램
- RESTful API란 무엇인가 (실생활 비유: 식당 주문 시스템)
- JSON 데이터 구조 읽는 법 (키-값 쌍, 배열, 중첩)
- 환경변수 왜 필요한가 (.env.local, NEXT_PUBLIC_ 규칙)
- HTTP 메서드 4가지 (GET/POST/PUT/DELETE)
- 뉴스레터 서비스 전체 아키텍처 흐름도

### 파트 B: Supabase 완전 이해
역할별 완전 설명:
- DB (PostgreSQL): 테이블 설계, RLS 정책, SQL 기초
- Auth: 이메일/소셜 로그인, 세션 관리
- Storage: 파일 업로드 (이미지 등)
- Edge Functions: 서버리스 로직

Claude Code에게 시키는 법:
- "DB 스키마 짜줘" (직접 SQL 안 씀)
- "RLS 정책을 AI로 검증해줘"

자주 나오는 에러 5가지 + 해결법:
1. RLS로 데이터 안 보임
2. Vercel 환경변수 누락
3. CORS 에러
4. Auth 콜백 URL 미등록
5. Storage 권한 오류

뉴스레터 서비스 DB 스키마 예시:
- users 테이블
- subscriptions 테이블
- newsletters 테이블
- send_logs 테이블

### 파트 C: 로그인 시스템 설계
- Supabase Auth (이메일/비밀번호, Magic Link)
- 카카오 OAuth 연동 (한국 필수):
  - 카카오 개발자센터 앱 생성
  - Redirect URI 등록
  - Supabase Auth → Kakao Provider 활성화
  - signInWithOAuth({ provider: 'kakao' })
  - 흔한 에러: window.location.origin → process.env.NEXT_PUBLIC_API_URL 사용
  - 이메일 수집: 비즈니스 앱 등록 필요 (개인 개발자 등록 가능)
- 구글 OAuth 연동
- JWT 토큰 개념 (왜 세션이 유지되는가)
- 권한 레벨 설계 (일반 구독자 vs 관리자)

### 파트 D: 결제 시스템
- 토스페이먼츠 (한국 표준, 가장 간단한 연동):
  - 테스트 모드로 시작
  - 결제 플로우: 클릭 → 토스페이 → Webhook → DB 업데이트
  - 구독 결제 설정 (월 9,900원)
- Stripe (글로벌, 구독 모델):
  - 글로벌 진출 시 사용
  - Customer → Subscription → Invoice 구조
- Webhook 개념 (결제 완료 → DB 자동 업데이트)
- 결제 보안 (NEXT_PUBLIC 절대 금지)
- 환불·취소 처리 로직
- Claude Code에게 시키는 법: "토스페이먼츠 구독 결제 연동해줘"

### 파트 E: 알림 시스템
카카오톡 자동화 파일 내용 활용:

텔레그램 봇 (무료, 빠름):
- BotFather로 봇 생성 → API 키 발급
- Webhook 연결: 구독 신청 → 텔레그램 알림
- Claude Code 30분 내 구축법
- 뉴스레터 발송 완료 알림 예시

카카오 알림톡 (한국 비즈니스 표준):
- PlayMCP 카카오톡 나채방 MCP 활용 (Claude Cowork)
- 카카오 비즈니스 계정 → 알림톡 채널 설정
- 템플릿 심사 기간 (1~2주)
- 이메일 대비 오픈율 5배

이메일 (Resend):
- 무료 시작 (월 3,000건)
- Next.js API Route + Resend SDK
- 뉴스레터 HTML 이메일 발송

언제 어떤 채널:
- 긴급 알림: 텔레그램 (무료·빠름)
- 거래 알림: 카카오 알림톡 (신뢰도)
- 뉴스레터 발송: 이메일 (Resend)

### 파트 F: 배포 & Happy Path
- Vercel 배포 5단계 (GitHub 연결 → 환경변수 → 도메인)
- .env.local vs Vercel 환경변수 1:1 대응 체크리스트
- Happy Path 구현: 구독 신청 → 결제 → 확인 이메일 → 카카오 알림
- 배포 직후 체크리스트 (10가지)
- PostHog + Sentry 모니터링 설정

---

## AI 튜터 버튼 5개
1. "뉴스레터 서비스의 Supabase DB 스키마를 짜줘. users, subscriptions, newsletters 테이블 포함."
2. "카카오 OAuth를 Supabase와 Next.js에 연동하는 방법을 단계별로 알려줘. 흔한 에러 포함."
3. "토스페이먼츠로 월 구독 결제를 구현하는 방법을 알려줘. Webhook 처리 포함."
4. "텔레그램 봇을 만들어서 구독 신청 시 알림 받는 방법을 알려줘. Claude Code로 30분 안에."
5. "Vercel 배포 후 '로컬에서는 되는데 Vercel에서 안 되는' 이유 TOP 5를 알려줘."

---

## 프롬프트 박스 (3개)
1. Supabase 스키마 + RLS 설계 프롬프트
2. 카카오 OAuth 연동 프롬프트
3. Webhook 구현 프롬프트

---

## 산출물 (미션 카드)
1. 카카오 로그인 + 구독 결제 작동하는 라이브 URL
2. 텔레그램 봇 알림 작동 (구독 신청 시 즉시 알림)
3. PostHog 대시보드 구독자 추적 설정 완료

## Stage 연결 고리
이번 Stage 라이브 URL → Stage 7 n8n 자동화 연결 포인트
이번 Stage DB 스키마 → Stage 7 자동화 데이터 소스
이번 Stage PostHog → Stage 9 AARRR 분석 데이터 축적 시작
