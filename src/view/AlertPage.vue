<template>
  <div class="outer">
    <!--  button gọi sự kiện  -->
     <div class="alert-btn">
      <button @click="showAlert = !showAlert == true">Success Button</button>
     
    </div>
    
    <!--  1 component có các yếu tố sau : - biến để đổ đata vào [bắt buộc có ] - sự kiện để có thể gọi component [có thể có hoặc không] -->
    <AlertBtn  status="success" :showSuccessAlert= 'showAlert' />
  </div>
</template>

<script>
import AlertBtn from "../components/Alert.vue";
export default {
  data() {
    return {
      showAlert: false,
      showDefaultAlert: false,
      showWarningAlert: false,
      showDangerAlert: false,
    };
  },
  components: { AlertBtn },
};
</script>

<style></style>
