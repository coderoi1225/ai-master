# Stage 2 스펙: 개발환경 & 문서화 인프라

## 기본 정보
- Stage 번호: 2 / 9
- 포인트 색상: #10b981 (green)
- 학습 시간: 약 4~5시간
- 산출물: 3개

## 헤드라인
"만들기 전에 설계도를 먼저"

## 리드 문구
코드를 짜기 전에 프로젝트 구조와 문서를 먼저 잡습니다.
좋은 CLAUDE.md 하나가 수십 시간의 삽질을 막아줍니다.

---

## 목차 섹션 (순서대로)

### 섹션 1: 터미널 10분 속성
- 터미널이 뭔가 (Claude Code를 쓰려면 최소한 알아야 하는 것)
- 10개 명령어: pwd / ls / cd / mkdir / cat / clear / Tab자동완성 / Ctrl+C / open . / exit
- "한 작업 = 한 폴더" 원칙
- 실전 흐름: pwd → cd 프로젝트 → ls → claude 실행

### 섹션 2: Antigravity vs Claude Code
- Antigravity = 대시보드 (엔진 상태를 보며 지휘)
- Claude Code = 엔진 (일을 실제로 하는 것)
- VS Code = 코드 편집기 (세밀한 수정)
- 언제 뭘 쓰나: 표로 정리
- Antigravity 설치: antigravity.google 다운로드 → VS Code 설정 가져오기
- AGENTS.md = Antigravity의 CLAUDE.md 역할

### 섹션 3: 프로젝트 5종 문서 템플릿
각 문서 역할 + 뉴스레터 서비스 예시 포함:
1. CLAUDE.md — 에이전트 지침서 (프로젝트의 헌법)
2. PRD.md — 제품 요구사항 (무엇을 만드는가)
3. ARCHITECTURE.md — 기술 구조 (어떻게 만드는가)
4. UI_GUIDE.md — 디자인 원칙 (어떻게 보이는가)
5. ADR.md — 아키텍처 결정 기록 (왜 이걸 선택했는가)

### 섹션 4: PRD 작성법
- PRD vs 기획서 차이
- PRD 구조: 목표 / 사용자 / 핵심기능 / MVP 제외 / 성공지표
- 뉴스레터 서비스 PRD 예시 (Must Have 3개 / Won't Have 목록)
- Lean Canvas → PRD 자동 변환 (Stage 1 산출물 활용)

### 섹션 5: GitHub 기본 워크플로우
- GitHub가 왜 필요한가 (코드 백업 + Claude Code 협업)
- 기본 흐름: 폴더 → git init → 첫 커밋 → GitHub 연결
- Claude Code에게 시키는 방법: "이 프로젝트를 GitHub에 올려줘"

### 섹션 6: 코드 독해력 30분
목표: 짜는 능력 아닌 "이 부분이 이상하다" 발견하는 능력
- JavaScript 3가지: 변수(const/let) / 조건문(if/else) / 비동기(async/await)
- Python 3가지: 리스트/딕셔너리 / 함수/루프 / import 구조
- 실전: Claude Code가 만든 코드 읽어보기

---

## AI 튜터 버튼 5개
1. "뉴스레터 서비스 PRD.md 초안을 작성해줘. Lean Canvas 기반으로."
2. "터미널 10개 명령어를 실제 상황 예시로 설명해줘. 초보자용."
3. "CLAUDE.md를 100줄 이내로 잘 쓰는 법을 알려줘. 황금률과 예시 포함."
4. "Antigravity와 Claude Code를 언제 각각 사용해야 하는지 비교해줘."
5. "JavaScript async/await를 5살도 이해하는 비유로 설명해줘."

---

## 프롬프트 박스 (3개)
1. PRD 작성 프롬프트
2. CLAUDE.md 작성 프롬프트
3. GitHub 첫 설정 프롬프트

---

## 산출물 (미션 카드)
1. docs/PRD.md — 뉴스레터 서비스 제품 요구사항 문서
2. CLAUDE.md — 내 프로젝트 전용 에이전트 지침서
3. docs/ARCHITECTURE.md — 기술 구조 초안

## Stage 연결 고리
이번 Stage PRD.md + CLAUDE.md → Stage 3 컨텍스트 엔지니어링 심화 재료
이번 Stage ARCHITECTURE.md → Stage 5 Claude Code 시작 시 자동 로드
