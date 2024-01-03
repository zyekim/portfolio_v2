<template>
  <div>
    <div>
      <p>vue Component</p>
      <!-- 모달창 컴포넌트 -->
      <div style="dislplay: flex;">
        <button @click="modal1 = true">기본 모달창</button>
        <ZModal :title="'기본타이틀'" v-model="modal1" @close="modal1 = false">
          <p v-for="i in 10" :key="i">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum dicta deserunt quo culpa quis.
          </p>
          <template #action>
            <button class="popup-btn">확인</button>
          </template>
        </ZModal>
        <button @click="modal2 = true"> 컨텐츠 변경</button>
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
    }
  },
  components: {
    ZModal
  },


}
</script>

<style lang="scss" scoped>

.popup-btn {
  padding: 6px 15px;
  border-radius: 4px;
  background-color: rgb(51, 149, 206);
  color: #fff;
}

</style>