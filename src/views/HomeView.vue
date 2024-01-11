<template>
  <div class="portfolio-wrap">
    <header class="header" :class="scroll ? 'scroll': ''">
      <div class="header__inner">
        <h1 class="logo" @click="scrollTop()">zyekim <span v-if="false">/{{ page }}</span></h1>
        <nav class="nav">
          <p v-for="page in ['project','skill','work']" :key="page" @click="moveScroll(page)">
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
              <p>안녕하세요.
                <br>
                <span class="highlight">
                  <vue-typer class="custom-type" :repeat='Infinity' :text='["n년차 커뮤니케이터", "사용자 편의를 최우선으로 하는", "구글링 고수"]'
                    :shuffle='false' initial-action='typing' :pre-type-delay='70' :type-delay='70' :pre-erase-delay='2000'
                    :erase-delay='250' erase-style='select-all' :erase-on-complete='false' caret-animation='blink' />
                </span>
              </p>
              <p class="job"> 주니어 프론트엔드개발자, 웹퍼블리셔 김지혜입니다 :&#41; </p>
              <ul class="links">
                <li class="links__item" v-for="item in links" :key="item.name" @click="movePage(item.name)">
                  <img :src="require(`@/assets/images/${item.src}`)" :key="item.name">
                  <span class="links__tooltip">{{ item.name }}</span>
                </li>
              </ul>
            </div>
          </div>
          <aside>
            <!-- todo: 이미지 추가예정 -->
          </aside>
        </div>
      </section>
      <section class="project" aria-label="body">
        <h2 class="section-title">프로젝트 <span class="section-refer"> 외부 요청으로 진행된 프로젝트의 경우, 자세한 UI화면 예시가 어렵습니다. 양해 부탁드립니다.</span></h2>
        <div class="desc-wrap" v-for="project in projectList" :key="project.id">
          <div class="desc-wrap__content">
            <h4 class="section-subtitle">{{ project.title }}</h4>
            <p class="section-caption">{{ project.period }}</p>
            <ul class="details">
              <li v-for="item in project.desc" :key="item.index" class="details__item" v-html="item" />
            </ul>
            <p class="section-subtitle2">
              사용 스킬 / framework
            </p>
            <div class="skill-chips">
              <p class="skill-chips__item" v-for="skill in project.skills" :key="skill">
                {{ skill }}
              </p>
            </div>
          </div>
          <div class="desc-wrap__right-content" v-if="project.imgsrc">
            <img :src="require(`@/assets/images/project/${project.imgsrc}`)" :alt="project.title">
          </div>
        </div>

      </section>
      <section class="skill" aria-label="body">
        <hr class="section-divider"/>
        <h2 class="section-title">보유 기술</h2>
        <h4 class="section-subtitle">Javascript 프레임워크</h4>
        <p class="section-subtitle2">vue</p>
        <ul class="details">
          <li class="details__item">vue template 사용에 능숙합니다. (vue lifecycle hook)</li>
          <li class="details__item">vue 관련 ui component framework 활용에 능숙합니다.</li>
          <li class="details__item">vue store 개발 경험이 있습니다</li>
        </ul>
        <p class="section-subtitle2">react</p>
        <ul class="details">
          <li class="details__item">React hook 활용에 익숙합니다.</li>
        </ul>
        <h4 class="section-subtitle">Javascript</h4>
        <ul class="details">
          <li class="details__item">프로젝트에서 javascript 사용해 스크립트 작성 경험이 다수입니다.</li>
        </ul>


        <h4 class="section-subtitle">SCSS</h4>
        <ul class="details">
          <li class="details__item">scss 문법에 능숙하며, mixin 사용에 익숙합니다.</li>
        </ul>

        <h4 class="section-subtitle">HTML/CSS</h4>
        <ul class="details">
          <li class="details__item">웹표준 및 웹접근성에 준수하여 작업합니다.</li>
          <li class="details__item">BEM법칙에 따른 클래스 명명에 능숙합니다.</li>
          <li class="details__item">최신 css기술에 대해 항상 관심을 기울이고 브라우져 호환성을 체크해가며 작업합니다.</li>
          <li class="details__item">반응형 웹페이지 제작 경험이 많습니다.</li>
          <li class="details__item">display: flex 사용에 능숙합니다.</li>
        </ul>

        <h4 class="section-subtitle">git/sourcetree</h4>
        <ul class="details">
          <li class="details__item">git 기본사용법에 익숙하고 sourcetree 연동하여 git flow관리에 능숙합니다</li>
          <li class="details__item">github, gitlab으로 관리되는 프로젝트 경험이 다수입니다.</li>
        </ul>

        <h4 class="section-subtitle">기타 기술</h4>
        <ul class="details">
          <li class="details__item">마크다운 문법에 익숙합니다.</li>
        </ul>
      </section>
      <section class="work" aria-label="body">
        <hr class="section-divider"/>
        <h2 class="section-title">개인 작업물 <span class="section-refer"> 더 많은 작업물은 <router-link to="/work" class="text-underline">work</router-link>페이지나, <a href="https://github.com/zyekim" class="text-underline" target="_blank">github</a>에서 확인할 수 있습니다.</span></h2>
        <div class="desc-wrap">
          <div class="desc-wrap__content">
            <h4 class="section-subtitle">TodoList</h4>
            <p class="section-caption">(VUE) <a href="https://daily-todolist-zyekim.netlify.app/" class="text-underline" target="_blank">https://daily-todolist-zyekim.netlify.app/</a></p>
            <ul class="details">
              <li class="details__item">
                vue lifecycle활용한 'CRUD' 구현
              </li>
              <li class="details__item">'lowdb' localStrage를 통해 리스트데이터 추가 삭제 가능</li>
              <li class="details__item">uuid/vue store/vuex 경험</li>
              <li class="details__item">전체, 완료, 미완료로 상태를 구분해 sort 가능</li>
              <li class="details__item">텍스트 수정시 수정된 최종날짜 추가</li>
              <li class="details__item">UI/UX 디자인</li>
            </ul>
          </div>
          <div class="desc-wrap__right-content">
            <img src="@/assets/images/project/vue_todo.png" alt="vue todo list">
          </div>
        </div>
      </section>
      <section class="experience" aria-label="body">
        <hr class="section-divider"/>
        <h2 class="section-title">경력</h2>
        <div class="desc-wrap">
          <div class="desc-wrap__content">
            <h4 class="section-subtitle">유아이랩 🏢</h4>
          </div>
          <div class="desc-wrap__right-content">
            <p class="section-subtitle2">웹퍼블리셔/프론트엔드 개발자</p>
            <ul class="details">
              <li class="details__item">2023/01 - 2023/09 : '교원 차세대 영업관리시스템구축'에 프리랜서 웹퍼블리셔로 재직</li>
              <li class="details__item">2020/11 - 2022/12 : 웹퍼블리셔와 프론트엔드 개발자로 재직</li>
            </ul>
          </div>
        </div>
         <hr class="section-divider"/>
        <h2 class="section-title">교육</h2>
        <div class="desc-wrap">
          <div class="desc-wrap__content">
            <h4 class="section-subtitle">국비교육과정 💻</h4>
          </div>
          <div class="desc-wrap__right-content">
            <p class="section-subtitle2">[웹코딩]UIUX반응형(REACT,javascript),프론트엔드 개발자</p>
            <ul class="details">
              <li class="details__item">2023/04 - 2023/05 : React 기초과정 수강</li>
            </ul>

            <p class="section-subtitle2">하이미디어학원 UI/UX 반응형 웹퍼블리셔/웹디자인 A</p>
            <ul class="details">
              <li class="details__item">2020/03 - 2020/09 : 웹퍼블리셔과정 수강(<b>성적우수상 수상</b>)</li>
            </ul>

            <p class="section-subtitle2">빅데이터 소셜마케팅 전문인력 양성과정</p>
            <ul class="details">
              <li class="details__item">2015/12 - 2016/02 : 빅데이터 분석/마케팅 수강 (<b>공모전 장려상 수상</b>)</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import projectList from '@/json/project.json'
// const projectList = projectdb

export default {
  name: 'HomeView',
  data(){
    return {
      page: '',
      links: [
        { name: '깃헙',
        src: 'github.png',
        },
        { name: 'Resume',
        src: 'notion.png',
        },
        { name: '벨로그',
        src: 'velog.jpeg',
        },
      ],
      scroll: false,
      // projectList: projectList,
    }
  },
  components: {
    // ZModal
  },
  mounted() {
    window.scrollTo(0, 0);
    document.addEventListener('scroll', this.detectScroll);
  },
  unmounted(){
    document.removeEventListener('scroll', this.detectScroll);
  },
  computed: {
    projectList() {
      return projectList.reverse()
    }
  },
  methods:{
    movePage(page){
      let href = '';
      switch (page) {
        case '깃헙':
          href = 'https://github.com/zyekim';
          break;
        case 'Resume':
          href = 'https://www.notion.so/zyeKim-Code-e4b2c4cd4dbf4280b4cffee22669a8cf?pvs=4';
          break;
        case '벨로그':
          href = 'https://velog.io/@k_jihye92/posts';
          break;
      }
      return window.open( href, '_blank');
    },
    detectScroll() {
      const scrollPosition = (window.scrollY || document.documentElement.scrollTop)

      if (scrollPosition > 0) {
        this.scroll = true
      } else if (scrollPosition === 0) {
        this.scroll = false
      }
    },
    moveScroll(target){
      const pageHeaderHeight = 60;
      let pageLocation = document.getElementsByClassName(target)[0].offsetTop - pageHeaderHeight;
      window.scrollTo({top: pageLocation, behavior: "smooth"});
    },
    scrollTop(){
      window.scroll({
        top: 0,
        behavior: "smooth",
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.portfolio-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  &__inner {
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    height: 60px;
  }
  .logo {
    font-weight: 700;
    font-size: 22px;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
    height: 100%;
    p {
      padding: 0 10px;
      font-size: 20px;
      font-weight: 300;
      cursor: pointer;
    }
  }
  &.scroll {
    background-color: #fff;
    transition: all ease-in-out 300ms;
  }
}


.highlight {
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 30%;
    // background-color: #c6fcc9;
    background-color: #b0dad5;
  }
}

.home {
  width: 100%;
  height: 100vh;
  background-color: rgb(246, 248, 236);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);
  &__inner {
    margin: 0 auto;
    padding: 60px 20px;
    display: flex;
    width: 100%;
    max-width: 1280px;
    height: 100%;
  }
  &__left{
    flex: 0 1 750px;
    position: relative;
  }
  &__text-wrap {
    position: absolute;
    left: 0;
    top: 65%;
    transform: translateY(-50%);
    p {
      font-size: 50px;
      font-weight: 500;
      text-align: left;
      &.job {
        margin-top: 10px;
        font-weight: 700;
        font-size: 32px;
      }
    }
  }
}

.links {
  $self: '.links';
  margin-top: 30px;
  display: flex;
  column-gap: 10px;
  align-items: center;
  height: 40px;
  &__item {
    position: relative;
    cursor: pointer;
    &:not(:first-of-type){
      &:before {
        content: '';
        display: inline-block;
        margin-right: 10px;
        vertical-align: middle;
        width: 1px;
        height: 30px;
        background-color: #eee;
      }
    }
    img {
      display: inline-block;
      width: auto;
      height: 40px;
    }
    &:hover{
      #{$self}__tooltip {
        display: block;
        opacity: 1;
        transition: 300ms ease-in-out;
      }
    }
  }
  &__tooltip {
    padding: 5px 10px;
    display: none;
    opacity: 0;
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 4px;
    box-shadow: 0 1em 2em -.5em rgba(0, 0, 0, 0.35);
    background: #333;
    color: #fff;
    z-index: 10;
    transition: 300ms ease-in-out;
    &:before {
      content: '';
      position: absolute;
      top: -5px;
      left: 50%;
      transform: translateX(-50%);
      border: 5px solid transparent;
      border-top-width: 0;
      border-bottom-color: #333;
    }
  }
}

section[aria-label="body"] {
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1280px;
  text-align: left;
}

.section {
  &-title {
    margin-top: 35px;
    font-size: 30px;
    font-weight: 700;
    color: #356493;
  }

  &-subtitle {
    margin-top: 28px;
    font-size: 24px;
    font-weight: 500;
  }

  &-subtitle2 {
    margin: 18px 0 10px;
    font-size: 18px;
    font-weight: 500;
  }

  &-body {
    font-size: 16px;
    font-weight: 500;
  }

  &-caption {
    margin: 8px 0;
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    color: #a09f9f;
  }

  &-refer {
    margin-left: 4px;
    font-size: 12px;
    font-weight: 400;
    font-style: italic;
    color: #777;
    &:before {
      content: '*';
    }
  }

  &-divider {
    margin: 10px 0;
    border-top: 1px solid #eee;
  }
}

.details {
  margin: 12px 0;

  &__item {
    margin-left: 8px;
    padding: 5px 0;
    padding-left: 4px;
    list-style-type: '-';
    font-weight: 300;
    color: #555;
  }
}


.desc-wrap {
  display: flex;
  flex-flow: row nowrap;
  column-gap: 35px;

  &__content {
    flex-basis: 45%;
  }

  &__right-content {
    margin: 24px 0;
    flex-basis: 55%;
    > *:first-of-type{
      margin-top: 0;
    }
  }
}

.skill-chips {
  margin: 10px 0 20px;
  &__item {
    display: inline-block;
    padding: 0 6px;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: rgba(234 ,200 ,228 , 0.5);
    border-radius: 3px;
    font-size: 14px;
    white-space: nowrap;
  }
}
</style>
<style lang="scss">
.custom-type {
  .char.custom.typed{
    color: #2f3b47;
  }
}
</style>