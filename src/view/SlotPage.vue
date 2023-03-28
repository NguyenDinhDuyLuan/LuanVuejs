<template>
    <div class="outer">
      <div>
        <SlotExample/>
        <SlotExample>Cancel</SlotExample>
      </div>
    </div>
  </template>
  
  <script>
  import SlotExample from "../components/Slot.vue";
  export default {
    data() {
      return {};
    },
    components: { SlotExample },
  };
  </script>