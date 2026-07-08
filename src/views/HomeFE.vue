<template>
  <div class="portfolio-wrap">
    <header class="header" :class="scroll ? 'scroll' : ''">
      <div class="header__inner">
        <h1 class="logo" @click="scrollTop()">zyekim</h1>
        <nav class="nav">
          <p
            v-for="page in ['project', 'skill', 'work']"
            :key="page"
            @click="moveScroll(page)"
          >
            {{ page }}
          </p>
        </nav>
      </div>
    </header>
    <main>
      <section class="home">
        <div class="home__inner">
          <div class="home__left">
            <div class="home__text-wrap">
              <p>
                안녕하세요.
                <br />
                <span class="highlight">
                  <span class="custom-type"
                    >{{ typed }}<span class="caret" aria-hidden="true"></span
                  ></span>
                </span>
              </p>
              <p class="job">프론트엔드개발자 김지혜입니다. :&#41;</p>
              <ul class="links">
                <li
                  class="links__item"
                  v-for="item in links"
                  :key="item.name"
                  @click="movePage(item.name)"
                >
                  <img :src="item.src" :alt="item.name" />
                  <span class="links__tooltip">{{ item.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="project" aria-label="content">
        <h2 class="section-title">
          프로젝트
          <span class="section-refer">
            외부 요청으로 진행된 프로젝트의 경우, 자세한 UI화면 예시가
            어렵습니다. 양해 부탁드립니다.</span
          >
        </h2>
        <div class="desc-wrap" v-for="project in projectList" :key="project.id">
          <div class="desc-wrap__content">
            <h4 class="section-subtitle">
              {{ project.title }}
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                style="display: inline-block; vertical-align: middle"
                ><img
                  style="width: 20px; margin-left: 4px"
                  src="@/assets/images/link.png"
                  alt="링크아이콘"
              /></a>
            </h4>
            <p class="section-caption">{{ project.period }}</p>
            <ul class="details">
              <li
                v-for="(item, i) in project.desc"
                :key="i"
                class="details__item"
                v-html="item"
              />
            </ul>
          </div>
          <div class="desc-wrap__right-content" v-if="project.imgsrc">
            <img :src="projectImg(project.imgsrc)" :alt="project.title" />
          </div>
        </div>
      </section>
      <section class="skill" aria-label="content">
        <hr class="section-divider" />
        <h2 class="section-title">보유 기술</h2>

        <p class="section-subtitle2">Vue3 / TypeScript</p>
        <ul class="details">
          <li class="details__item">
            Vue3 Composition API 기반 컴포넌트 설계 및 공통 라이브러리 구축 경험
          </li>
          <li class="details__item">
            TypeScript 기반 도메인 타입 설계 및 런타임 오류 사전 방지
          </li>
          <li class="details__item">
            Pinia 상태관리 — 복잡한 전역 상태(조직코드, 권한메뉴 등) 스토어 구조
            설계 경험
          </li>
          <li class="details__item">
            권한 기반 동적 라우팅 설계 (beforeEach 가드 + addRoute() 런타임
            주입)
          </li>
          <li class="details__item">
            Vuetify 커스터마이징을 통한 프로젝트 전용 UI Kit 제작 경험
          </li>
        </ul>

        <p class="section-subtitle2">아키텍처 설계</p>
        <ul class="details">
          <li class="details__item">
            모노레포 기반 멀티 서비스 프론트엔드 구조 설계 참여
          </li>
          <li class="details__item">
            Vite 기반 개발 환경 구축 및 ESLint/Prettier 팀 컨벤션 표준화
          </li>
          <li class="details__item">
            Figma 분석 → 컴포넌트 단위 구조 설계 협업 (기획·디자인·개발 간 조율)
          </li>
        </ul>

        <p class="section-subtitle2">JavaScript</p>
        <ul class="details">
          <li class="details__item">
            Stream API 연동 및 청크 단위 렌더링 최적화 경험
          </li>
          <li class="details__item">
            클라이언트 단 엑셀 파싱·유효성 검사, 하드웨어(QR·체적기) API 연동
            경험
          </li>
          <li class="details__item">
            재귀 트리 컴포넌트 설계로 3Depth 이상 계층 데이터 처리
          </li>
        </ul>

        <p class="section-subtitle2">SCSS</p>
        <ul class="details">
          <li class="details__item">
            BEM 방법론 기반 클래스 설계, Mixin·변수 활용 능숙
          </li>
          <li class="details__item">
            반응형/모바일 최적화 레이아웃 구현 경험 다수
          </li>
        </ul>

        <p class="section-subtitle2">Git</p>
        <ul class="details">
          <li class="details__item">
            GitHub · GitLab 기반 브랜치 전략 및 PR 리뷰 경험
          </li>
          <li class="details__item">
            Git 커밋 컨벤션(.gitmessage) 설정 및 팀 표준화 경험
          </li>
        </ul>

        <p class="section-subtitle2">Others</p>
        <ul class="details">
          <li class="details__item">디자인툴: Figma, Zeplin, XD</li>
          <li class="details__item">
            협업툴: Slack, Notion, Confluence, Teams
          </li>
          <li class="details__item">
            Antigravity, Claude, Codex 등 AI 도구를 코드 작성·리팩토링·학습에
            활용
          </li>
        </ul>
        <p class="section-subtitle2">Languages</p>
        <ul class="details">
          <li class="details__item">
            영어 — 비즈니스 문서 독해 가능 (TOEIC 860 / HSK 6급)
          </li>
        </ul>
      </section>
      <section class="work" aria-label="content">
        <hr class="section-divider" />
        <h2 class="section-title">개인 작업물</h2>
        <div class="desc-wrap">
          <div class="desc-wrap__content">
            <h4 class="section-subtitle">
              TodoList
              <a
                href="https://daily-todolist-zyekim.netlify.app/"
                target="_blank"
                style="display: inline-block; vertical-align: middle"
                ><img
                  style="width: 20px; margin-left: 4px"
                  src="@/assets/images/link.png"
                  alt="링크아이콘"
              /></a>
            </h4>
            <p class="section-caption">(VUE)</p>
            <ul class="details">
              <li class="details__item">vue lifecycle 활용한 'CRUD' 구현</li>
              <li class="details__item">
                'lowdb' localStrage를 통해 리스트데이터 추가 삭제 가능
              </li>
              <li class="details__item">uuid/vue store/vuex 경험</li>
              <li class="details__item">
                전체, 완료, 미완료로 상태를 구분해 sort 가능
              </li>
              <li class="details__item">텍스트 수정시 수정된 최종날짜 추가</li>
              <li class="details__item">UI/UX 디자인</li>
            </ul>
          </div>
          <div class="desc-wrap__right-content">
            <img
              src="@/assets/images/project/vue_todo.png"
              alt="vue todo list"
            />
          </div>
        </div>
        <div class="desc-wrap">
          <div class="desc-wrap__content">
            <router-link to="/work"
              ><h4 class="section-subtitle">
                Others
                <img
                  style="margin-left: 4px; display: inline; width: 20px"
                  src="@/assets/images/link.png"
                  alt="링크아이콘"
                /></h4
            ></router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, onUnmounted, ref } from "vue";

  import projectdb from "@/json/fe_project.json";
  import type { Project } from "@/types/project";
  import { useTyper } from "@/composables/useTyper";
  import githubImg from "@/assets/images/github.png";
  import notionImg from "@/assets/images/notion.png";
  import velogImg from "@/assets/images/velog.jpeg";

  interface LinkItem {
    name: string;
    src: string;
  }

  const links: LinkItem[] = [
    { name: "깃헙", src: githubImg },
    { name: "Resume", src: notionImg },
    { name: "벨로그", src: velogImg },
  ];

  const projects: Project[] = projectdb;
  const projectList = computed<Project[]>(() => [...projects].reverse());

  const projectImages = import.meta.glob<string>(
    "../assets/images/project/*",
    { eager: true, import: "default" },
  );
  const projectImg = (name: string) =>
    projectImages[`../assets/images/project/${name}`];

  const { typed } = useTyper([
    "복잡한 업무 시스템을 구조화하는",
    "권한·상태·화면 흐름을 설계하는",
  ]);

  const scroll = ref(false);

  const detectScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    scroll.value = scrollPosition > 0;
  };

  const movePage = (page: string) => {
    let href = "";
    switch (page) {
      case "깃헙":
        href = "https://github.com/zyekim";
        break;
      case "Resume":
        href =
          "https://www.notion.so/zyeKim-Code-e4b2c4cd4dbf4280b4cffee22669a8cf?pvs=4";
        break;
      case "벨로그":
        href = "https://velog.io/@k_jihye92/posts";
        break;
    }
    return window.open(href, "_blank");
  };

  const moveScroll = (target: string) => {
    const pageHeaderHeight = 60;
    const el = document.getElementsByClassName(target)[0] as
      | HTMLElement
      | undefined;
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - pageHeaderHeight, behavior: "smooth" });
  };

  const scrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  onMounted(() => {
    window.scrollTo(0, 0);
    document.addEventListener("scroll", detectScroll);
  });

  onUnmounted(() => {
    document.removeEventListener("scroll", detectScroll);
  });
</script>
