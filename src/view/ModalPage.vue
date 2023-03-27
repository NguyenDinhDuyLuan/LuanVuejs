<template>
  <div class="outer">
    <h3>Vue Teleport Example</h3>
    <div>
      <MyModal />
    </div>
  </div>
</template>

<script>
import MyModal from "../components/Modal.vue";
export default {
  data() {
    return {};
  },
  components: { MyModal },
};
</script>
