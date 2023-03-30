<template>
  <div class="outer">
    <!--  button gọi sự kiện  -->
    <div class="alert-btn">
      <button @click="showAlert = !showAlert == true">Success Button</button>
    </div>

    <!--  1 component có các yếu tố sau : - biến để đổ đata vào [bắt buộc có ] - sự kiện để có thể gọi component [có thể có hoặc không] -->
    <div v-for="item in dataAlert" :key="item.alertStatus">
      <AlertBtn
        :status="item.alertStatus"
        :showAlert="showAlert"
        :alertIcon="item.alertIcon"
        :alertInfo="item.alertInfo"
        :alertStatus="item.alertStatus"
        :alertClassIcon="item.alertClassIcon"
        :alertClassBox="item.alertClassBox"
      />
    </div>
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
      dataAlert: [
        {
          alertIcon: "circle-check",
          alertInfo: "A successful toast",
          alertStatus: "success",
          alertClassIcon: "success-icon",
          alertClassBox: "success-alert",
        },
        {
          alertIcon: "circle-info",
          alertInfo: "An information toast",
          alertStatus: "infor",
          alertClassIcon: "information-icon",
          alertClassBox: "information-alert",
        },
        {
          alertIcon: "triangle-exclamation",
          alertInfo: "A warning toast",
          alertStatus: "warnning",
          alertClassIcon: "warning-icon",
          alertClassBox: "warning-alert",
        },
        {
          alertIcon: "triangle-exclamation",
          alertInfo: "A destructive toast",
          alertStatus: "fails",
          alertClassIcon: "destructive-icon",
          alertClassBox: "destructive-alert",
        },
      ],
    };
  },
  components: { AlertBtn },
};
</script>

<style></style>
