<template>
  <div class="outer">
    <!--  button gọi sự kiện  -->
    <div class="alert-btn">
      <button @click="showAlertOn = !showAlertOn == true">
        Success Button
      </button>
      <button @click="showAlertOnFaisl = !showAlertOnFaisl == true">
        Fails Button
      </button>
      <button @click="showAlertOnWarnning = !showAlertOnWarnning == true">
        Warning Button
      </button>
      <button @click="showAlertOnInfor = !showAlertOnInfor == true">
        Infor Button
      </button>
    </div>

    
    <AlertBtn
      status="success"
      :showAlert="showAlertOn"
      alertInfo="A successful toast."
    ></AlertBtn>
    <AlertBtn
      status="warnning"
      :showAlert="showAlertOnWarnning"
      alertInfo="An warning toast."
    ></AlertBtn>
    <AlertBtn
      status="infor"
      :showAlert="showAlertOnInfor"
      alertInfo="An information toast."
    ></AlertBtn>
    <AlertBtn
      status="fails"
      :showAlert="showAlertOnFaisl"
      alertInfo="A destructive toast."
    ></AlertBtn>
  </div>
</template>

<script>
import AlertBtn from "../components/Alert.vue";
export default {
  data() {
    return {
      showAlertOn: false,
      showAlertOnFaisl: false,
      showAlertOnWarnning: false,
      showAlertOnInfor: false,
    };
  },
  components: { AlertBtn },
};
</script>

<style></style>
