<template>
  <transistion v-if="value" name="modal">
    <div class="z-modal" :class="!title ? 'no-title' : ''">
      <span class="z-modal__wall" @click.self="$emit('close')"></span>
      <div class="z-modal__wrap">
        <div class="z-modal__header">
          <h1 class="z-modal__title">{{ title }}</h1>
          <button @click="$emit('close')">X</button>
        </div>
        <div class="z-modal__contents">
          <slot />
        </div>
        <div class="z-modal__footer">
            <div class="z-modal__actions">
              <slot name="action">
              </slot>
            </div>
        </div>
      </div>
    </div>
  </transistion>
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
    }
  }
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
    padding: 40px;
    width: 380px;
    border-radius: 5px;
    background-color: #fff;
    z-index: 1;
  }
  &__title {

  }
}
//transition
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  // 오버레이에 포함되어 있는 모달 윈도의 트랜지션
  .ppl-popup__wrap, .ppl-signup-popup__wrap {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// 딜레이가 적용된 모달 윈도가 제거된 후에 오버레이가 사라짐
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .ppl-popup__wrap, .ppl-signup-popup__wrap {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>