<template>
  <div class="outer">
    <div>
      <SlotExample>
        <template #name>
          <h1>Card Title</h1>
        </template>

        <template #detail>
          <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
        </template>

        <template #status>
          <p>Last updated 3 mins ago</p>
        </template>
      </SlotExample>
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
