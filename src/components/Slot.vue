<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <button type="submit" class="slot-btn">
    <slot>Submit</slot>
  </button>
  <div class="card-wrapper">
    <div class="card-img">
        <img src="../assets/img/flower-card.jpg">
    </div>
    <div class="card-info">
        <div class="card-name"><slot name="name"></slot></div>
        <div class="card-detail"><slot name="detail"></slot></div>
        <div class="card-status"><slot name="status"></slot></div>
    </div>
  </div>
</template>

<style scoped>
@import url("../assets/css/slot.css");
</style>
