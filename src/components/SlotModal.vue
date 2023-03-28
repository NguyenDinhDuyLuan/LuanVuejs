<template>
  <div>
    <!-- <b-button v-b-modal.modal-xl @click="modalCard = !modalCard">
    <slot></slot>
    </b-button> -->
    <!--  khúc naỳ nằm ngoài nha  -->

    <b-modal v-model="modalCard" id="modal-xl" size="xl">
      <SlotExample>
        <template #name>
          <h1>Card Title</h1>
              <!-- data sẽ đưọc bên ngoài tuỳ chỉnh  -->
        </template>

        <template #detail>
          <!-- <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer
          </p> -->
          <!-- data sẽ đưọc bên ngoài tuỳ chỉnh  -->
        </template>

        <template #status>
              <!-- data sẽ đưọc bên ngoài tuỳ chỉnh  -->
          <p>Last updated 3 mins ago</p>
        </template>
      </SlotExample>
    </b-modal>
  </div>
</template>

<script>
import SlotExample from "../components/Slot.vue"; // khúc này chị k hiểu lắm 
export default {
  data() {
    return { modalCard: false };
  },
  components: { SlotExample },
};
</script>

<style scoped>
@import url("../assets/css/slot.css");
</style>
