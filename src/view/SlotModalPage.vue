<template>
  <div class="outer">
    <div>
      <b-button v-b-modal.modal-xl @click="modalCard = !modalCard">
        show model
        <!--  gọi sự kiện để gọi modal show data lên  -->
      </b-button>
      <!--  khúc naỳ nằm ở đây  -->
      <b-modal v-model="modalCard" id="modal-xl" size="xl">
        <SlotModal>
          <template #header>
            <h1>Card Title</h1>
          </template>

          <template #body>
            <p>Card detail</p>
          </template>

          <template #footer>
            <p>Last updated 3 mins ago</p>
          </template>
        </SlotModal>
      </b-modal>
    </div>
  </div>
</template>

<script>
import SlotModal from "../components/SlotModal.vue";
export default {
  data() {
    return { modalCard: false };
  },
  components: { SlotModal },
};
</script>
