# zyekim portfolio

> 복잡한 업무 시스템의 권한·상태·화면 흐름을 구조화하는 TypeScript 기반 FE 개발자 김지혜의 포트폴리오

🔗 **배포 링크**: [https://zyekim.github.io](https://zyekim.github.io)

## 기술 스택

| 분류       | 기술                                     |
| ---------- | ---------------------------------------- |
| Framework  | Vue 3 (Composition API, `<script setup>`) |
| Language   | TypeScript                               |
| Build      | Vite                                     |
| Routing    | Vue Router 4 (해시 라우팅)               |
| Style      | SCSS (BEM)                               |
| Lint/Format | ESLint 9 (flat config) + Prettier       |
| Deploy     | GitHub Pages (`gh-pages`)                |

## 프로젝트 구조

```text
portfolio_v2
├── index.html              # Vite 엔트리 (meta description 포함)
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
└── src
    ├── main.ts             # 앱 엔트리
    ├── App.vue
    ├── router
    │   └── index.ts        # createWebHashHistory 기반 라우트
    ├── views
    │   ├── HomeView.vue    # 공통 레이아웃 (헤더 + 전역 섹션 스타일)
    │   ├── HomeFE.vue      # / : 프론트엔드 포트폴리오 메인
    │   ├── HomePub.vue     # /publish : 웹퍼블리셔 포트폴리오
    │   ├── WorkView.vue    # /work : 개인 작업물 데모
    │   └── PubResumeView.vue # /resume/pub : 이력서 (인쇄 최적화)
    ├── components
    │   └── ZModal.vue      # v-model 기반 모달 컴포넌트
    ├── composables
    │   └── useTyper.ts     # 타이핑 효과 composable
    ├── types
    │   └── project.ts      # Project 도메인 타입
    ├── json                # 프로젝트 데이터 (fe/pub)
    └── assets              # scss, 폰트, 이미지
```

## 로컬 실행

```bash
npm install
npm run dev        # 개발 서버
npm run build      # 타입체크(vue-tsc) + 프로덕션 빌드
npm run preview    # 빌드 결과물 로컬 확인
npm run lint       # ESLint
npm run deploy     # GitHub Pages 배포 (predeploy에서 build 실행)
```

## Vue2 → Vue3 + TS 마이그레이션 이력

이 저장소는 Vue2(Options API + JavaScript + vue-cli)로 작성된 포트폴리오를
Vue3 + TypeScript + Vite로 직접 마이그레이션한 결과물입니다.

| 항목        | Before (Vue2)              | After (Vue3)                          |
| ----------- | -------------------------- | ------------------------------------- |
| 빌드        | vue-cli (webpack) + babel  | Vite + vue-tsc                        |
| 컴포넌트    | Options API + JS           | `<script setup lang="ts">` Composition API |
| 라우터      | vue-router 3               | vue-router 4 (`createWebHashHistory`) |
| 타입        | 없음                       | 도메인 타입 정의 (`types/project.ts`), `defineProps` 제네릭 |
| 타이핑 효과 | vue-typer (Vue3 미지원)    | `useTyper` composable 직접 구현       |
| 스타일      | SCSS `@import`             | SCSS `@use` (Dart Sass 모던 문법)     |
| 품질 도구   | ESLint 7                   | ESLint 9 flat config + Prettier       |

### 마이그레이션 포인트

- **의존성 다이어트**: three.js, vue-html2pdf, AOS 등 실사용처 없는 의존성을 제거해
  런타임 의존성을 `vue` + `vue-router` 2개로 축소
- **v-model 규약 전환**: ZModal의 `value` prop을 Vue3 `modelValue` 규약으로 전환,
  transition 클래스(`-enter` → `-enter-from`) 마이그레이션
- **Vite 자산 처리 전환**: webpack `require()` 동적 이미지 로딩을
  정적 import + `import.meta.glob`으로 대체
- **GitHub Pages 유지**: 해시 라우팅(`createWebHashHistory`)으로 정적 호스팅에서
  새로고침 404 없이 라우팅 유지
