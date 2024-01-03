<template>
  <transition v-if="value" name="modal" appear>
    <div class="z-modal" :class="!title ? 'no-title' : ''">
      <span class="z-modal__wall" @click.self="$emit('close')"></span>
      <div class="z-modal__wrap">
        <div class="z-modal__header">
          <h1 class="z-modal__title">{{ title }}</h1>
          <button class="z-modal__close" @click="$emit('close')">닫기</button>
        </div>
        <div class="z-modal__contents">
          <slot />
        </div>
        <div class="z-modal__footer" v-if="$slots.action">
            <div class="z-modal__actions">
              <slot name="action">
              </slot>
            </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ZModal',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    action: {
      type: Boolean,
      required: false
    },
  },
}
</script>

<style lang="scss" scoped>
.z-modal {
  $self: &;
  z-index: 20;
  padding: 0 24px;
  &, #{$self}__wall{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
  &__wall{
    background: rgba(33,33,33,0.46);
  }
  &__wrap{
    width: 380px;
    max-height: calc(100vh - 40%);
    border-radius: 5px;
    background-color: #fff;
    z-index: 1;
    overflow-y: scroll;
  }
  &__header {
    padding: 0 10px;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: #fff;
  }
  &__footer {
    position: sticky;
    bottom: 0;
    height: 50px;
    background-color: #fff;
    display: flex;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
  }
  &__close {
    margin-left: auto;
    position: relative;
    width: 30px;
    height: 30px;
    font-size: 0;
    &:after, &:before {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 3px;
      height: 20px;
      background-color: #333;
      content: '';
    }
    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
  &__title {
    text-align: left;
    font-size: 20px;
  }
  &__contents {
    padding: 20px 10px 10px;
    min-height: fit-content;
    height: auto;
    overflow-y: scroll;
    text-align: left;
  }
  &.no-title {
    #{$self}__header {
      height: 40px;
    }
    #{$self}__contents {
      padding-top: 10px;
    }
  }
}
//transition
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  // 오버레이에 포함되어 있는 모달 윈도의 트랜지션
  .z-modal__wrap {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// 딜레이가 적용된 모달 윈도가 제거된 후에 오버레이가 사라짐
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .z-modal__wrap {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>