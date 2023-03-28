<template>
  <!-- <b-button v-b-modal.modal-xl @click="modalCard = !modalCard">
    <slot></slot>
    </b-button> -->
  <!--  khúc naỳ nằm ngoài nha  -->

  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot name="body"></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
