<template>
  <div class="outer">
    <AlertBtn />
  </div>
</template>

<script>
import AlertBtn from "../components/Alert.vue";
export default {
  data() {
    return {
      showSuccessAlert: false,
      showDefaultAlert: false,
      showWarningAlert: false,
      showDangerAlert: false,
    };
  },
  components: { AlertBtn },
};
</script>

<style></style>
