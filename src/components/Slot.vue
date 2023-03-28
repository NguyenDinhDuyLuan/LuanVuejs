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
</template>

<style scoped>
@import url("../assets/css/slot.css");
</style>
