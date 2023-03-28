<template>
  <div class="outer">
    <div>
      <b-button v-b-modal.modal-xl @click="modalCard = !modalCard">
        show model
        <!--  gọi sự kiện để gọi modal show data lên  -->
      </b-button>
      <!--  khúc naỳ nằm ở đây  -->
      <SlotModal>
        <!--  đổ data vào đây theo slot nha em -->
        <!--   -->
      </SlotModal>
    </div>
  </div>
</template>

<script>
import SlotModal from "../components/SlotModal.vue";
export default {
  data() {
    return {};
  },
  components: { SlotModal },
};
</script>
