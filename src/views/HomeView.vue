<template>
  <div class="portfolio-wrap">
    <header class="header">
      <h1 class="logo">zyekim <span v-if="false">/{{ page }}</span></h1>
      <nav class="nav">
        <p v-for="page in ['skill','project','work']" :key="page">
          {{ page }}
        </p>
      </nav>
    </header>
    <main>
      <section class="home">
        <div class="home__left">
          <div class="home__text-wrap">
            <p>안녕하세요.
            <br>
            <span class="highlight">
              <vue-typer
                class="custom-type"
                :repeat='Infinity'
                :text='["n년차 커뮤니케이터", "사용자 편의를 최우선으로 하는", "구글링 장인"]'
                :shuffle='false'
                initial-action='typing'
                :pre-type-delay='70'
                :type-delay='70'
                :pre-erase-delay='2000'
                :erase-delay='250'
                erase-style='select-all'
                :erase-on-complete='false'
                caret-animation='blink'
              />
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
      </section>
      <section class="skill">
        <h2>What my develop skill included</h2>
        <div class="skill__block-wrap">
          <div class="skill__block">
            <div class="skill__inner">
              <p>vue</p>
              <span style="display:flex;width: 80px;height:80px;border:4px solid red;border-radius: 100%;"></span>
            </div>
            <div class="skill__inner">
              <p>react</p>
            </div>
          </div>
          <div class="skill__block">
            <div class="skill__inner">
              <p>Javascript</p>
              <span style="display:flex;width: 80px;height:80px;border:4px solid red;border-radius: 100%;"></span>
            </div>
            <div class="skill__inner">
              <p>jQuery</p>
              <span style="display:flex;width: 80px;height:80px;border:4px solid red;border-radius: 100%;"></span>
            </div>
          </div>
          <div class="skill__block">
            <div class="skill__inner">
              <p>HTML</p>
              <span class="skill__bar"></span>
            </div>
            <div class="skill__inner">
              <p>CSS</p>
              <span class="skill__bar"></span>
            </div>
            <div class="skill__inner">
              <p>SCSS</p>
              <span class="skill__bar"></span>
            </div>
          </div>
        </div>
      </section>
      <section class="project"></section>
      <section class="project">
        <div style="dislplay: flex;">
          <button @click="modal1 = true">기본 모달창</button>
          <ZModal :title="'팝업타이틀'" v-model="modal1" @close="modal1 = false">
            <p v-for="i in 10" :key="i">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum dicta deserunt quo culpa quis.
            </p>
            <template #action>
              <button>확인</button>
            </template>
          </ZModal>
          <button @click="modal2 = true"> 컨텐츠 변경</button>
           <ZModal :title="'팝업타이틀'" v-model="modal2" @close="modal2 = false">
            <textarea name="example" id="example" cols="30" rows="10" style="padding-right: 10px; width: 100%;border: 1px solid #eee;"></textarea>
            <template v-slot:action>
              <button>제출</button>
            </template>
          </ZModal>
          <button @click="modal3 = true"> no title & action</button>
          <ZModal v-model="modal3" @close="modal3 = false">
            <div style="display:flex;justify-content:center;align-items:center;height: 150px;">
              <p>제목과 액션버튼이 없고, 내용만 있어요</p>
            </div>
          </ZModal>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import ZModal from '@/components/ZModal.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      modal1: false,
      modal2: false,
      modal3: false,
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
      ]
    }
  },
  components: {
    ZModal
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
  padding: 0 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 50;
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
  padding: 60px 20px;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: rgb(246, 248, 236);
  background-image: url(data:image/png;base64,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);
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

.skill {
  padding: 60px 20px;
  h2 {
    font-size: 33px;
    font-weight: 700;
    color: #2f3b47;
  }
  // height: 100%;
  &__block-wrap{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4px;
  }
  &__block{
    padding: 20px 0;
    &:nth-of-type(1) {
      grid-row: 1 / span 2;
      p {
        text-align: left;
      }
    }
    &:not(:first-of-type){
      display: flex;
      flex-flow: row nowrap;
      column-gap: 10px;
      align-items: stretch;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      display: inline-block;
      &::before{
        content: disc;
      }
    }
    // &:first-of-type{
    //   background-color: #FF90BC77;
    // }
    // &:nth-of-type(2) {
    //   background-color: #FFC0D977;
    // }
  }
  &__inner {
    padding: 20px;
    flex: 1 0 auto;
    border-radius: 15px;
    span {
      margin: 10px auto 0;
    }
  }
  &__bar {
    width: 100%;
    background: #FFC0D977;
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