# VIBE MASTER — AI 오케스트레이션 9 Stage 커리큘럼

비개발자 1인 창업가가 AI 오케스트레이션 전문가가 되는 9 Stage 학습 커리큘럼.

> "기술은 AI가, 영혼은 사람이"

## 예시 프로젝트

전 9 Stage를 관통하는 단 하나의 프로젝트 — **AI 뉴스레터 자동화 서비스**.
매일 아침 AI가 뉴스를 수집·요약 → 카카오/이메일 자동 발송. 월 9,900원 구독 모델.

## 9 Stages

| # | 색상 | 제목 | 학습 시간 | 산출물 |
|---|------|------|-----------|--------|
| 1 | 🔵 blue | 비즈니스 기획 & AI 멘탈모델 | 3~4시간 | 2개 |
| 2 | 🟢 green | 개발환경 & 문서화 인프라 | 4~5시간 | 3개 |
| 3 | 🟣 purple | 프롬프트 → 컨텍스트 엔지니어링 | 3~4시간 | 3개 |
| 4 | 🩷 pink | AI 디자인 마스터 | 6~8시간 | 3개 |
| 5 | 🟠 orange | Claude Code 완전 정복 | 8~10시간 | 3개 |
| 6 | 🩵 teal | 백엔드 인프라 완전 이해 | 6~8시간 | 3개 |
| 7 | 🟡 yellow | 자동화 마스터 | 5~6시간 | 3개 |
| 8 | 🔷 cyan | AI 오케스트레이션 고급 | 5~6시간 | 3개 |
| 9 | 🏆 gold | 검증·성장·성공 앱 이식 (FINAL) | 5~6시간 | 3개 |

## 폴더 구조

```
vibe-master/
├── CLAUDE.md           # 커리큘럼 제작 지침 (Claude Code용)
├── README.md           # 본 파일
├── vercel.json         # 배포 설정 (output/ 을 정적 호스팅)
├── docs/               # 9개 Stage 스펙 (제작 입력 자료)
│   ├── stage1-spec.md
│   └── ...
└── output/             # 배포 결과물 (정적 HTML 9개 + index)
    ├── index.html      # 커리큘럼 소개 페이지
    ├── stage1.html     # ~ stage9.html
    └── ...
```

## 로컬 실행

빌드·의존성 없음. 브라우저에서 바로 열면 끝.

```bash
open output/index.html
```

## 배포

Vercel — `vercel.json`에서 `outputDirectory: "output"`으로 정적 호스팅.

## 디자인 원칙

- 다크 테마 고정 (`--bg:#080b10`)
- Stage별 포인트 색상 (1~9 무지개)
- 각 Stage는 **완전 독립 단일 HTML 파일**
- TOC 사이드바 + 진도 dots + 산출물 미션 카드 + AI 튜터 내장
- 한국어
