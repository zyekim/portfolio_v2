<template>
  <div class="work">
    <div class="work__header">
      <button class="home" @click="$router.push('/')">Go Home</button>
    </div>
    <div>
      <div class="work__wrap">
        <h2>Vue.js</h2>
        <hr />
          <!-- 모달창 컴포넌트 -->
        <div class="work__item">
          <h3>Modal Component</h3>
          <div class="work__box">
            <button @click="modal1 = true">기본 모달창</button>
            <ZModal :title="'기본타이틀'" v-model="modal1" @close="modal1 = false">
              <p v-for="i in 10" :key="i">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum dicta deserunt quo culpa quis.
              </p>
              <template #action>
                <button class="popup-btn">확인</button>
              </template>
            </ZModal>
            <button @click="modal2 = true"> slot 컨텐츠 변경 action button 추가 </button>
            <ZModal :title="'문의사항을 입력해주세요'" v-model="modal2" @close="modal2 = false">
              <textarea name="example" id="example" cols="30" rows="10"
                style="padding-right: 10px; width: 100%;border: 1px solid #eee;"></textarea>
              <template v-slot:action>
                <button class="popup-btn">제출</button>
              </template>
            </ZModal>
            <button @click="modal3 = true"> no title & action</button>
            <ZModal v-model="modal3" @close="modal3 = false">
              <div style="display:flex;justify-content:center;align-items:center;height: 100px;">
                <p>제목과 액션버튼이 없고, 내용만 있어요</p>
              </div>
            </ZModal>
          </div>
        </div>
        <!-- vue Accordion -->
        <div class="work__item">
          <h3>Accordion using transition</h3>
          <div class="work__box">
            <ul class="accordion">
                <li class="accordion__item" v-for="i in 4" :key="i" @click="clickAccordion(i)">
                <div class="accordion__trigger">
                  accordion{{i}}
                </div>
                <transition name="accordion" appear @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
                  <div v-show="selectedAccordion === i">
                    <div class="accordion__contents">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est maxime ratione at perferendis, mollitia debitis id rem quo voluptatum laboriosam.</div>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZModal from '@/components/ZModal.vue'

export default {
  name: 'WorkView',
  data () {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      selectedAccordion: 1,
    }
  },
  components: {
    ZModal
  },
  computed:{
  },
  methods:{
    start (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end (el) {
      el.style.height = ''
    },
    clickAccordion(index){


      if(index === this.selectedAccordion){
        this.selectedAccordion = 0
      }else {
        this.selectedAccordion = index
      }
    }
  }


}
</script>

<style lang="scss" scoped>
.work {
  margin: 110px auto 80px;
  padding: 0 20px;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  text-align: left;
  &__header{
    padding: 10px 20px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #fff;
    button {
      padding: 3px 10px;
      height: 30px;
      font-size: 14px;
      border: 1px solid #eee;
      border-radius: 5px;
    }
  }
  hr {
    margin: 20px 0;
    border-top: 1px solid #eee;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
  }
  &__item {
    h3 {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 700;
      &:before {
        content: '';
        margin-right: 8px;
        display: inline-block;
        // vertical-align: middle;
        width: 14px;
        height: 14px;
        background-color: #333;
      }
    }
  }
  &__box {
    padding: 30px 20px;
    display: flex;
    column-gap: 20px;
    > button {
      padding: 6px 15px;
      border-radius: 4px;
      background-color: #a8d8bc;
    }
  }
}

.accordion {
  width: 500px;
  &__item{
    width: 100%;
      &:not(:first-child){
      border-top: 1px solid  #eeeff1;
    }
  }
  &__trigger{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    transition: ease-in-out all 300ms;
    cursor: pointer;
    &:after {
      content: '';
      width: 12px;
      height: 12px;
      border-top: 2px solid #222;
      border-right: 2px solid #222;
      transform: rotate(135deg);
    }
  }
  &__contents{
    padding: 20px;
    background-color: #c6d4d1;
    border-bottom: 1px solid #958c8c;
  }
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.popup-btn {
  padding: 6px 15px;
  border-radius: 4px;
  background-color: rgb(51, 149, 206);
  color: #fff;
}

</style>