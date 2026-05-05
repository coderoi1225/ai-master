# VIBE MASTER 커리큘럼 제작 지침

## 프로젝트 목적
비개발자 1인 창업가가 AI 오케스트레이션 전문가가 되는
9 Stage HTML 학습 커리큘럼을 제작한다.

예시 프로젝트 (전 Stage 관통):
AI 뉴스레터 자동화 서비스
- 매일 아침 AI가 특정 주제 뉴스 수집 → 요약 → 구독자에게 카카오/이메일 자동 발송
- 월 9,900원 구독 모델
- Next.js + Supabase + n8n + Claude API

관통 메시지: "기술은 AI가, 영혼은 사람이"

---

## CRITICAL — 반드시 지킬 것

- output/stage1.html을 반드시 먼저 읽고 디자인·구조·CSS를 100% 동일하게 유지
- :root CSS 변수 그대로 재사용 (새 변수 추가는 가능, 기존 변수 수정 금지)
- 컴포넌트 클래스명 동일하게 재사용
- AI 튜터 fetch 코드 구조 동일하게 유지 (claude-sonnet-4-20250514 모델)
- 한국어로 작성
- 개인정보 절대 포함 금지 (특정 회사명, 실명 등)
- 각 Stage는 완전히 독립 실행 가능한 단일 HTML 파일

---

## 디자인 원칙

- 다크 테마 고정 (--bg:#080b10)
- Stage별 포인트 색상 다르게:
  - Stage 1: --accent:#3b82f6 (blue) ← 완성
  - Stage 2: --accent:#10b981 (green)
  - Stage 3: --accent:#8b5cf6 (purple)
  - Stage 4: --accent:#ec4899 (pink)
  - Stage 5: --accent:#f97316 (orange)
  - Stage 6: --accent:#14b8a6 (teal)
  - Stage 7: --accent:#f59e0b (yellow)
  - Stage 8: --accent:#06b6d4 (cyan)
  - Stage 9: --accent:#d4a017 (gold)
- TOC 사이드바 반드시 포함 (IntersectionObserver로 active 추적)
- 상단 progress dots (9개, 해당 Stage active)
- 산출물 미션 카드 반드시 포함 (체크박스 포함)
- AI 튜터 섹션 반드시 포함 (버튼 5개 + 직접 입력)
- 프롬프트 박스 복사 버튼 포함
- 반응형 (모바일 대응)

---

## 구조 원칙

### One Project 원칙
모든 예시는 AI 뉴스레터 자동화 서비스 기준으로 작성.
각 Stage에서 이 서비스가 한 단계씩 발전하는 것을 보여줄 것.

### Stage 연결 고리 (반드시 명시)
각 Stage 산출물이 다음 Stage의 재료가 된다는 것을 명확히 표시.

Stage 1 Lean Canvas → Stage 2 PRD.md 도입부
Stage 2 PRD.md + CLAUDE.md → Stage 3 컨텍스트 엔지니어링 재료
Stage 3 CLAUDE.md + SKILL.md → Stage 5 Claude Code 자동 로드
Stage 4 디자인 자산 → Stage 5 랜딩페이지 구현 재료
Stage 5 코드 완성 → Stage 6 배포 URL
Stage 6 배포 URL → Stage 7 n8n 자동화 연결
Stage 7 자동화 → Stage 8 RAG 고도화
Stage 8 RAG → Stage 9 성장 분석 + 판매

### 산출물 카드 형식
```
각 Stage 말미에 "이번 Stage 산출물" 섹션:
- 제목: 만들어야 끝나는 것들
- 체크박스 2~3개
- 파일명 명시 (docs/파일명.md 형식)
- Stage 연결 고리 설명
```

---

## AI 튜터 시스템 프롬프트 형식

각 Stage AI 튜터의 system 프롬프트:
```
VIBE MASTER Stage {N} AI 튜터.
학습자: 비개발자 1인 창업가. AI 오케스트레이션 학습 중.
예시 프로젝트: AI 뉴스레터 자동화 서비스 (매일 아침 AI가 특정 주제 뉴스 수집·요약 → 구독자에게 카카오/이메일 자동 발송, 월 9,900원 구독 모델).
Stage {N} 범위: {해당 Stage 핵심 주제들}
관통 메시지: "기술은 AI가, 영혼은 사람이"
한국어로. 실용적이고 바로 적용 가능하게. 마크다운 형식.
```

---

## 파일 출력 규칙

- 완성된 HTML → output/stage{N}.html
- 스펙 파일 읽기 → docs/stage{N}-spec.md
- stage1.html 참조 → output/stage1.html

---

## 작업 순서 (매 Stage 동일)

1. output/stage1.html 읽기 (디자인 파악)
2. CLAUDE.md 읽기 (지침 파악)
3. docs/stage{N}-spec.md 읽기 (내용 파악)
4. 해당 Stage HTML 생성
5. output/stage{N}.html 저장
