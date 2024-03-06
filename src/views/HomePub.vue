<template>
  <div class="portfolio-wrap">
    <header class="header" :class="scroll ? 'scroll' : ''">
      <div class="header__inner">
        <h1 class="logo" @click="scrollTop()">zyekim</h1>
        <nav class="nav">
          <p
            v-for="page in ['project', 'skill']"
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
              <p class="job">웹 퍼블리셔 김지혜입니다. :&#41;</p>
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
      <section class="experience" aria-label="content">
        <h2 class="section-title">경력</h2>
        <div class="desc-wrap">
          <div class="desc-wrap__content">
            <h4 class="section-subtitle">유아이랩 🏢</h4>
            <p>(2년 11개월 ~)</p>
          </div>
          <div class="desc-wrap__right-content">
            <p class="section-subtitle2">웹퍼블리셔</p>
            <ul class="details">
              <li class="details__item">
                2023/01 - 2023/09 : '교원 차세대 영업관리시스템구축'에 프리랜서
                웹퍼블리셔로 재직
              </li>
              <li class="details__item">
                2020/11 - 2022/12 : 웹퍼블리셔와 프론트엔드 개발자로 재직
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="project" aria-label="content">
        <hr class="section-divider" />
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
        <h4 class="section-subtitle">HTML/CSS</h4>
        <ul class="details">
          <li class="details__item">
            웹표준 및 웹접근성에 준수하여 작업합니다.
          </li>
          <li class="details__item">
            BEM법칙에 따른 클래스 명명에 능숙합니다.
          </li>
          <li class="details__item">
            최신 css기술에 대해 항상 관심을 기울이고 브라우져 호환성을
            체크해가며 작업합니다.
          </li>
          <li class="details__item">반응형 웹페이지 제작 경험이 많습니다.</li>
          <li class="details__item">display: flex 사용에 능숙합니다.</li>
        </ul>
        <h4 class="section-subtitle">SCSS</h4>
        <ul class="details">
          <li class="details__item">
            scss 문법에 능숙하며, mixin 사용에 익숙합니다.
          </li>
        </ul>
        <h4 class="section-subtitle">Javascript/jquery</h4>
        <ul class="details">
          <li class="details__item">jquery,javascript에 능숙합니다.</li>
          <li class="details__item">다수의 프로젝트에서 경험하였습니다.</li>
        </ul>
        <h4 class="section-subtitle">Javascript 프레임워크</h4>
        <p class="section-subtitle2">Vue</p>
        <ul class="details">
          <li class="details__item">vue template 사용에 능숙합니다.</li>
          <li class="details__item">
            vue 관련 ui component framework custom override 능숙합니다.
          </li>
        </ul>
        <p class="section-subtitle2">React</p>
        <ul class="details">
          <li class="details__item">JSX문법으로 화면 퍼블리싱에 능숙합니다.</li>
        </ul>
        <h4 class="section-subtitle">git/sourcetree</h4>
        <ul class="details">
          <li class="details__item">
            git 기본사용법에 익숙하고 sourcetree 연동하여 git flow관리에
            능숙합니다
          </li>
          <li class="details__item">
            github, gitlab으로 관리되는 프로젝트 경험이 다수입니다.
          </li>
        </ul>

        <h4 class="section-subtitle">기타 기술</h4>
        <ul class="details">
          <li class="details__item">마크다운 문법에 익숙합니다.</li>
        </ul>
      </section>
      <!-- <section class="work" aria-label="content">
        <hr class="section-divider" />
        <h2 class="section-title">개인 작업물</h2>
        <div class="desc-wrap">
          <div class="desc-wrap__content">
            <h4 class="section-subtitle">TodoList</h4>
            <p class="section-caption">
              (VUE)
              <a
                href="https://daily-todolist-zyekim.netlify.app/"
                class="text-underline"
                target="_blank"
                >https://daily-todolist-zyekim.netlify.app/</a
              >
            </p>
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
      </section> -->
      <section class="experience" aria-label="content">
        <hr class="section-divider" />
        <h2 class="section-title">교육</h2>
        <div class="desc-wrap">
          <div class="desc-wrap__content">
            <h4 class="section-subtitle">국비교육과정 💻</h4>
          </div>
          <div class="desc-wrap__right-content">
            <p class="section-subtitle2">
              [웹코딩]UIUX반응형(REACT,javascript),프론트엔드 개발자
            </p>
            <ul class="details">
              <li class="details__item">
                2023/04 - 2023/05 : React 기초과정 수강
              </li>
            </ul>

            <p class="section-subtitle2">
              하이미디어학원 UI/UX 반응형 웹퍼블리셔/웹디자인 A
            </p>
            <ul class="details">
              <li class="details__item">
                2020/03 - 2020/09 : 웹퍼블리셔과정 수강(<b>성적우수상 수상</b>)
              </li>
            </ul>

            <p class="section-subtitle2">
              빅데이터 소셜마케팅 전문인력 양성과정
            </p>
            <ul class="details">
              <li class="details__item">
                2015/12 - 2016/02 : 빅데이터 분석/마케팅 수강 (<b
                  >공모전 장려상 수상</b
                >)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
  // @ is an alias to /src
  import projectList from "@/json/pub_project.json";
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
        return projectList.reverse();
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
              "https://www.notion.so/ZYEKIM-CODE-81f1f72258ee4106989ba951a8ffd64d?pvs=4";
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
