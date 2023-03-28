<template>
  <div class="outer">
    <div>
      <SlotModal> Modal Open</SlotModal>
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
