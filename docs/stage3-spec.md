# Stage 3 스펙: 프롬프트 → 컨텍스트 엔지니어링

## 기본 정보
- Stage 번호: 3 / 9
- 포인트 색상: #8b5cf6 (purple)
- 학습 시간: 약 3~4시간
- 산출물: 3개

## 헤드라인
"AI에게 무엇을 줄지 설계하는 법"

## 리드 문구
프롬프트를 잘 쓰는 것과 컨텍스트를 잘 설계하는 것은 다릅니다.
프롬프트는 한 번 쓰고 끝. 컨텍스트 엔지니어링은 시스템을 만드는 것입니다.

---

## 목차 섹션 (순서대로)

### 섹션 1: Karpathy 4원칙
Andrej Karpathy의 AI 협업 원칙 (2026 현업 표준):
1. Think Before Coding — 코드 치기 전 계획부터
2. Simplicity First — 가장 단순한 해법 먼저
3. Surgical Changes — 최소한만 수정
4. Goal-Driven — 목표에서 역산해서 작업
각 원칙마다 뉴스레터 서비스 적용 예시 포함

### 섹션 2: CLAUDE.md 완전 마스터
- 황금률: 100줄 이내 (Boris Cherny 방식)
- 진짜 실수했던 것만 적기
- CRITICAL 키워드 사용법
- 큰 문서는 참조로 처리하는 법
- 지속적으로 발전시키기 (살아있는 문서)
- 뉴스레터 서비스 CLAUDE.md 실전 예시 (100줄)

### 섹션 3: SKILL.md 작성법
- Skill이란 무엇인가 (슬래시 명령 vs 자동 트리거)
- .claude/skills/ 폴더 구조
- Karpathy Skills 플러그인 소개 및 설치
- 뉴스레터 서비스용 커스텀 Skill 3개 예시:
  1. newsletter-draft: 뉴스 요약 → 뉴스레터 초안 생성
  2. seo-check: 콘텐츠 SEO 점수 체크
  3. send-preview: 발송 전 미리보기 검토

### 섹션 4: settings.json Hooks
- Hooks란 무엇인가 (자동 실행 가드레일)
- PreToolUse: 위험 명령어 자동 차단 (rm -rf, git push --force 등)
- Stop Hook: 작업 종료 시 자동 lint + build + test
- 뉴스레터 서비스 settings.json 완성 예시

### 섹션 5: 컨텍스트 로트(Context Rot) 방지
- 컨텍스트 로트란 (오염된 대화가 AI를 혼란하게 만드는 것)
- 70% 룰: 컨텍스트 70% 차면 /clear 또는 /compact
- 한 작업 = 한 세션 원칙
- 주방 싱크대 세션 안티패턴

### 섹션 6: 장PM 에이전트 설계서 방법론
- blueprint → deep-dive → 구현 → autoresearch → reflect 워크플로우
- 에이전트 설계서 작성 프롬프트 템플릿
- 뉴스레터 자동화 에이전트 설계서 예시

---

## AI 튜터 버튼 5개
1. "Karpathy 4원칙을 뉴스레터 자동화 서비스에 적용해서 설명해줘."
2. "내 뉴스레터 서비스용 CLAUDE.md를 100줄 이내로 작성해줘. CRITICAL 규칙 포함."
3. "뉴스레터 자동화에 필요한 SKILL.md 3개를 작성해줘. 트리거 조건 포함."
4. "settings.json Hooks를 작성해줘. 위험 명령 차단 + 작업 완료 시 자동 검증."
5. "컨텍스트 로트가 무엇인지 설명하고 방지하는 3가지 방법을 알려줘."

---

## 프롬프트 박스 (3개)
1. CLAUDE.md 작성 프롬프트
2. SKILL.md 생성 프롬프트
3. 에이전트 설계서 작성 프롬프트 (장PM 방법론)

---

## 산출물 (미션 카드)
1. CLAUDE.md — 뉴스레터 서비스 전용 에이전트 지침서 완성본
2. .claude/skills/ — SKILL.md 3개 완성
3. settings.json — Hooks 가드레일 설정 완성

## Stage 연결 고리
이번 Stage CLAUDE.md → Stage 5 Claude Code 시작 시 자동 로드
이번 Stage SKILL.md 3개 → Stage 5 실습에서 직접 사용
이번 Stage settings.json → Stage 5~6 전체 작업 보호막
