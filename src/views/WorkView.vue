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
            <ZModal
              :title="'기본타이틀'"
              v-model="modal1"
              @close="modal1 = false"
            >
              <p v-for="i in 10" :key="i">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                harum dicta deserunt quo culpa quis.
              </p>
              <template #action>
                <button class="popup-btn">확인</button>
              </template>
            </ZModal>
            <button @click="modal2 = true">
              slot 컨텐츠 변경 action button 추가
            </button>
            <ZModal
              :title="'문의사항을 입력해주세요'"
              v-model="modal2"
              @close="modal2 = false"
            >
              <textarea
                name="example"
                id="example"
                cols="30"
                rows="10"
                style="padding-right: 10px; width: 100%; border: 1px solid #eee"
              ></textarea>
              <template v-slot:action>
                <button class="popup-btn">제출</button>
              </template>
            </ZModal>
            <button @click="modal3 = true">no title & action</button>
            <ZModal v-model="modal3" @close="modal3 = false">
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100px;
                "
              >
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
              <li
                class="accordion__item"
                v-for="i in 4"
                :key="i"
                @click="clickAccordion(i)"
              >
                <div class="accordion__trigger">accordion{{ i }}</div>
                <transition
                  name="accordion"
                  appear
                  @enter="start"
                  @after-enter="end"
                  @before-leave="start"
                  @after-leave="end"
                >
                  <div v-show="selectedAccordion === i">
                    <div class="accordion__contents">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est maxime ratione at perferendis, mollitia debitis id rem
                      quo voluptatum laboriosam.
                    </div>
                  </div>
                </transition>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="work__wrap">
        <h2>React</h2>
        <hr />
        <!-- converter -->
        <div class="work__item">
          <div class="work__box work__box--column pt0">
            <h3 style="position: relative">
              Unit converter
              <a
                class="href-icon"
                href="https://codesandbox.io/p/sandbox/converter-swtk9g?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cls2qvvc800063b6h3i9ssc8e%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cls2qvvc800023b6hpgjmqhvb%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cls2qvvc800033b6huu9pbk5b%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cls2qvvc800053b6hu141vkaj%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B40%252C60%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cls2qvvc800023b6hpgjmqhvb%2522%253A%257B%2522id%2522%253A%2522cls2qvvc800023b6hpgjmqhvb%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cls2r4icv00023b6h4oioh1v5%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A58%252C%2522startColumn%2522%253A24%252C%2522endLineNumber%2522%253A58%252C%2522endColumn%2522%253A24%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.js%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cls2r4icv00023b6h4oioh1v5%2522%257D%252C%2522cls2qvvc800053b6hu141vkaj%2522%253A%257B%2522id%2522%253A%2522cls2qvvc800053b6hu141vkaj%2522%252C%2522activeTabId%2522%253A%2522clsn31m8h001k3b6hcf4jwhqg%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cls2qvvc800043b6hdp0f24zw%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522SANDBOX_INFO%2522%252C%2522id%2522%253A%2522clsn31m8h001k3b6hcf4jwhqg%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522cls2qvvc800033b6huu9pbk5b%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522cls2qvvc800033b6huu9pbk5b%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D"
                target="_blank"
              >
                <img src="@/assets/images/link.png" alt="코드보러가기" />
              </a>
            </h3>
            <img
              src="@/assets/images/project/work/converter.jpg"
              alt="converter"
            />
          </div>
        </div>
      </div>
      <div class="work__wrap">
        <h2>순수 javascript</h2>
        <hr />
        <!-- hangman -->
        <div class="work__item">
          <h3>Hangman Game</h3>
          <div class="work__box">
            <iframe
              src="https://codesandbox.io/embed/53g2tr?view=Editor+%2B+Preview&module=%2Findex.html&hidenavigation=1"
              style="
                width: 100%;
                height: 500px;
                border: 0;
                border-radius: 4px;
                overflow: hidden;
              "
              title="hangman"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          </div>
        </div>
        <div class="work__item">
          <div class="work__box work__box--column">
            <h3 style="position: relative">
              drag&drop
              <a
                class="href-icon"
                href="https://codesandbox.io/p/sandbox/drag-list-7y4zc9"
                target="_blank"
              >
                <img src="@/assets/images/link.png" alt="코드보러가기" />
              </a>
            </h3>
            <img
              src="@/assets/images/project/work/dragNdrop.jpg"
              alt="dragNdrop"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ZModal from "@/components/ZModal.vue";

  export default {
    name: "WorkView",
    data() {
      return {
        modal1: false,
        modal2: false,
        modal3: false,
        selectedAccordion: 1,
      };
    },
    components: {
      ZModal,
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    methods: {
      start(el) {
        el.style.height = el.scrollHeight + "px";
      },
      end(el) {
        el.style.height = "";
      },
      clickAccordion(index) {
        if (index === this.selectedAccordion) {
          this.selectedAccordion = 0;
        } else {
          this.selectedAccordion = index;
        }
      },
    },
  };
</script>
<style lang="scss">
  .work {
    margin: 110px auto 80px;
    padding: 0 20px;
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 1280px;
    text-align: left;
    &__header {
      padding: 10px 20px;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      height: 50px;
      background-color: #fff;
      z-index: 10;
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
          content: "";
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
      &--column {
        padding: 30px 0;
        flex-flow: column;
        img {
          margin-top: 10px;
          width: 400px;
          height: auto;
        }
      }
    }
  }

  //  start accordion
  .accordion {
    width: 500px;
    &__item {
      width: 100%;
      &:not(:first-child) {
        border-top: 1px solid #eeeff1;
      }
    }
    &__trigger {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      width: 100%;
      transition: ease-in-out all 300ms;
      cursor: pointer;
      &:after {
        content: "";
        width: 12px;
        height: 12px;
        border-top: 2px solid #222;
        border-right: 2px solid #222;
        transform: rotate(135deg);
      }
    }
    &__contents {
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

  //  end accordion

  // start popup
  .popup-btn {
    padding: 6px 15px;
    border-radius: 4px;
    background-color: rgb(51, 149, 206);
    color: #fff;
  }
  // end poup

  .href-icon {
    margin-left: 8px;
    display: grid;
    place-content: center;
    width: 25px;
    height: 25px;
    img {
      width: 20px;
      height: auto;
    }
  }
</style>
