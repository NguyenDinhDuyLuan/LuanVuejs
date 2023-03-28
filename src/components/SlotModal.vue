<template>
  <div>
    <b-button v-b-modal.modal-xl @click="modalCard = !modalCard">
    <slot></slot>
    </b-button>

    <b-modal v-model="modalCard" id="modal-xl" size="xl">
      <SlotExample>
        <template #name>
          <h1>Card Title</h1>
        </template>

        <template #detail>
          <p>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer
          </p>
        </template>

        <template #status>
          <p>Last updated 3 mins ago</p>
        </template>
      </SlotExample>
    </b-modal>
  </div>
</template>

<script>
import SlotExample from "../components/Slot.vue";
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
