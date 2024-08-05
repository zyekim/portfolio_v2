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
                  <vue-typer
                    class="custom-type"
                    :repeat="Infinity"
                    :text="[
                      'n년차 커뮤니케이터',
                      '사용자 편의를 최우선으로 하는',
                      '구글링 고수',
                    ]"
                    :shuffle="false"
                    initial-action="typing"
                    :pre-type-delay="70"
                    :type-delay="70"
                    :pre-erase-delay="2000"
                    :erase-delay="250"
                    erase-style="select-all"
                    :erase-on-complete="false"
                    caret-animation="blink"
                  />
                </span>
              </p>
              <p class="job">주니어 프론트엔드개발자 김지혜입니다. :&#41;</p>
              <ul class="links">
                <li
                  class="links__item"
                  v-for="item in links"
                  :key="item.name"
                  @click="movePage(item.name)"
                >
                  <img
                    :src="require(`@/assets/images/${item.src}`)"
                    :key="item.name"
                  />
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
                v-for="item in project.desc"
                :key="item.index"
                class="details__item"
                v-html="item"
              />
            </ul>
            <!-- <p class="section-subtitle2">사용 스킬 / framework</p>
            <div class="skill-chips">
              <p
                class="skill-chips__item"
                v-for="skill in project.skills"
                :key="skill"
              >
                {{ skill }}
              </p>
            </div> -->
          </div>
          <div class="desc-wrap__right-content" v-if="project.imgsrc">
            <img
              :src="require(`@/assets/images/project/${project.imgsrc}`)"
              :alt="project.title"
            />
          </div>
        </div>
      </section>
      <section class="skill" aria-label="content">
        <hr class="section-divider" />
        <h2 class="section-title">보유 기술</h2>
        <p class="section-subtitle2">Vue</p>
        <ul class="details">
          <li class="details__item">Vue lifecycle 사용 능숙</li>
          <li class="details__item">Vue 기반 컴포넌트 프레임워크 활용 능숙</li>
          <li class="details__item">Vuex를 이용한 상태 관리 최적화</li>
        </ul>
        <p class="section-subtitle2">React</p>
        <ul class="details">
          <li class="details__item">react hook 활용에 익숙합니다.</li>
        </ul>
        <h4 class="section-subtitle2">Javascript</h4>
        <ul class="details">
          <li class="details__item">
            다수의 프로젝트에서 JavaScript를 사용해 스크립트 작성 경험
          </li>
        </ul>

        <h4 class="section-subtitle2">SCSS</h4>
        <ul class="details">
          <li class="details__item">SCSS 문법 능숙, Mixin 사용에 익숙</li>
          <li class="details__item">BEM법칙에 따른 클래스 명명에 능숙</li>
          <li class="details__item">반응형/적응형 웹페이지 제작 경험 풍부</li>
        </ul>

        <h4 class="section-subtitle2">HTML/CSS</h4>
        <ul class="details">
          <li class="details__item">
            웹표준 및 웹접근성에 준수하여 작업합니다.
          </li>
          <li class="details__item">
            최신 CSS 기술과 브라우저 호환성 고려 작업 능숙
          </li>
        </ul>

        <h4 class="section-subtitle2">git/sourcetree</h4>
        <ul class="details">
          <li class="details__item">GitHub, GitLab 프로젝트 관리 경험</li>
          <li class="details__item">
            Git 기본 사용법 및 Sourcetree 연동 버전 관리 능숙
          </li>
        </ul>

        <h4 class="section-subtitle2">Others</h4>
        <ul class="details">
          <li class="details__item">디자인툴: zepline, figma, XD</li>
          <li class="details__item">
            협업툴: Slack, notion, confluence, loop, planner, teams
          </li>
          <li class="details__item">마크다운 문법에 능숙</li>
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

<script>
  // @ is an alias to /src
  import projectdb from "@/json/fe_project.json";
  // const projectList = projectdb

  export default {
    name: "HomeView",
    data() {
      return {
        page: "",
        links: [
          {name: "깃헙", src: "github.png"},
          {name: "Resume", src: "notion.png"},
          {name: "벨로그", src: "velog.jpeg"},
        ],
        scroll: false,
        // projectList: projectList,
      };
    },
    components: {
      // ZModal
    },
    mounted() {
      window.scrollTo(0, 0);
      document.addEventListener("scroll", this.detectScroll);
    },
    unmounted() {
      document.removeEventListener("scroll", this.detectScroll);
    },
    computed: {
      projectList() {
        return projectdb.reverse();
      },
    },
    methods: {
      movePage(page) {
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
      },
      detectScroll() {
        const scrollPosition =
          window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition > 0) {
          this.scroll = true;
        } else if (scrollPosition === 0) {
          this.scroll = false;
        }
      },
      moveScroll(target) {
        const pageHeaderHeight = 60;
        let pageLocation =
          document.getElementsByClassName(target)[0].offsetTop -
          pageHeaderHeight;
        window.scrollTo({top: pageLocation, behavior: "smooth"});
      },
      scrollTop() {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      },
    },
  };
</script>
