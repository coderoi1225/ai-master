# Stage 5 스펙: Claude Code 완전 정복

## 기본 정보
- Stage 번호: 5 / 9
- 포인트 색상: #f97316 (orange)
- 학습 시간: 약 8~10시간 (가장 핵심 Stage)
- 산출물: 3개

## 헤드라인
"AI 에이전트 개발 운영체계"

## 서브 타이틀
Claude Code 완전 정복 — 명령어 암기가 아닌 운영 방식을 익힙니다

## 리드 문구
Claude Code는 터미널 도구가 아닙니다.
AI와 함께 안전하게 개발하는 운영체계입니다.
이 Stage 하나로 Claude Code를 완전히 내 것으로 만듭니다.

---

## 목차 섹션 (순서대로)

### 챕터 1: 설치 & 첫 실행
- 설치 3가지 방법 (curl 권장 / Homebrew / NPM)
- VS Code 확장 프로그램으로 설치하는 법 (터미널 없이)
- 로그인 (claude auth login)
- Python + Node.js 왜 필요한가 (엔진 비유)
- 첫 명령은 /init — 프로젝트 분석 + CLAUDE.md 자동 생성
- "한 작업 = 한 폴더 = 한 세션" 황금 원칙

### 챕터 2: 권한 모드 6가지
Shift+Tab으로 순환:
- default: 매번 확인
- acceptEdits: 파일 편집 자동 승인
- plan: 읽기만, 수정 안 함 (탐색 모드)
- auto: 위험한 것만 차단 (Max 이상)
- bypassPermissions: 모든 확인 건너뜀 (위험!)
초보자 추천 순서: Plan → Default → acceptEdits → auto
표로 정리 + 언제 무엇을 쓰나

### 챕터 3: 슬래시 명령어 완전 정복
매일 쓰는 핵심 5개:
- /help /clear /compact /context /usage

세션 관리:
- /resume /rename /rewind /branch /diff /export /btw

모델·성능:
- /model (haiku/sonnet/opus) /effort /init /plan

각 명령어 실전 예시 포함

### 챕터 4: 단축키 BEST 10
- Shift+Tab (모드 전환)
- Esc (응답 멈춤)
- Esc+Esc (시간 되돌리기)
- Ctrl+C (비상 정지)
- Tab (자동완성)
- Shift+Enter (여러 줄 입력)
- Ctrl+R (이전 명령 검색)
- Ctrl+G (외부 에디터)
- ? (단축키 도움말)
- Alt+T (Extended Thinking 토글)

### 챕터 5: 토큰 & 컨텍스트 관리 ★핵심★
- 컨텍스트 창 = 작업대 그릇 비유
- 토큰이란 (한국어는 영어보다 2~3배 더 씀)
- /clear vs /compact 정확한 차이와 사용 시점
- 70% 룰 — 70% 차면 결정
- 비용 절감 7가지 실전 전략
- 주방 싱크대 세션 안티패턴 (가장 흔한 실수)
- 설계→/clear→실행→검증 4단계 모델 흐름도

### 챕터 6: Explore → Plan → Code → Verify
Anthropic 공식 4단계 워크플로우:
1. Explore: Plan 모드에서 코드 둘러보기 (읽기만)
2. Plan: 변경 계획을 글로 정리 (사용자 검토)
3. Code: 계획대로 구현
4. Verify: 테스트 + 검증
뉴스레터 서비스 기준 실전 예시
인터뷰 패턴 (큰 작업 시작법)

### 챕터 7: Skills 자동화
- Skill이란 (슬래시 명령 vs 상황별 자동 트리거)
- .claude/skills/ 구조
- Karpathy Skills 플러그인 설치 및 사용
- 장PM 메타 스킬 4개 소개:
  - blueprint: 에이전트 설계 문서 자동 생성
  - deep-dive: 다단계 인터뷰로 스펙 생성
  - reflect: 세션 마무리 + 학습 저장
  - autoresearch: 스킬 자동 최적화 루프
- 뉴스레터 서비스용 커스텀 Skill 만들기

### 챕터 8: Hooks & 가드레일
- settings.json PreToolUse (위험 명령 자동 차단)
- Stop Hook (작업 종료 시 자동 lint + build + test)
- CLAUDE.md 70% 준수 → 절대 규칙은 Hooks로
- 뉴스레터 서비스 settings.json 완성본

### 챕터 9: Harness 프레임워크 — 멀티스텝 에이전트
- Harness 개념 (적토마 + 안장 비유 복습)
- phases/index.json 구조
- step{N}.md 작성법
- execute.py 자동 실행 (순차 + 재시도 + 자가교정)
- 에러 복구 (error → pending 재시도)
- 뉴스레터 서비스 첫 기능 구현 Harness 예시

### 챕터 10: 고급 패턴
- 병렬 세션 (git worktree) — Boris Cherny 방식
- 까다로운 검토자 패턴 (자기 작업을 엄격하게 검증)
- 엘레강트한 해법 패턴 (임시방편 → 재구현)
- 자비스(Jarvis) 라우터 에이전트 개념 (장PM 방법론)

### 챕터 11: 7일 실습 로드맵
Day 1: 설치 & 첫 만남
Day 2: 터미널 친해지기
Day 3: 첫 실전 작업 (/init + CLAUDE.md)
Day 4: Plan 모드 익히기
Day 5: 토큰 관리 체험
Day 6: 단축키 마스터
Day 7: Skills 만들기 + 워크플로우 정리

---

## AI 튜터 버튼 5개
1. "Claude Code 설치부터 첫 실행까지 단계별로 알려줘. Mac 기준."
2. "컨텍스트 70% 룰을 설명하고, /clear와 /compact를 언제 써야 하는지 뉴스레터 서비스 예시로 알려줘."
3. "Explore → Plan → Code → Verify 4단계를 뉴스레터 자동 발송 기능 구현에 적용해서 보여줘."
4. "Harness 프레임워크로 뉴스레터 발송 기능을 단계별로 나눠줘. phases/index.json 형식으로."
5. "Claude Code에서 자주 하는 실수 5가지와 해결법을 알려줘."

---

## 프롬프트 박스 (3개)
1. CLAUDE.md 기반 프로젝트 시작 프롬프트
2. Harness step.md 작성 프롬프트
3. 까다로운 검토자 역할 프롬프트

---

## 산출물 (미션 카드)
1. Claude Code로 뉴스레터 서비스 기능 1개 구현 + GitHub 커밋 완료
2. .claude/skills/ — 장PM 메타 스킬 4개 설치 완료
3. phases/ — Harness 프레임워크 첫 번째 Phase 완성

## Stage 연결 고리
이번 Stage 구현 코드 → Stage 6 Supabase 연결 + 배포
이번 Stage CLAUDE.md + Skills → Stage 6~9 전체 작업 기반
이번 Stage Harness → Stage 6 복잡한 기능 구현 시 재사용
