<template>
  <div class="section-alert">
    <div class="alert-btn">
      <button @click="showSuccessAlert = true">Success Button</button>
      <button @click="showDefaultAlert = true">Information Button</button>
      <button @click="showWarningAlert = true">Warning Button</button>
      <button @click="showDangerAlert = true">Danger Button</button>
    </div>
    <div class="alert-wrapper">
      <div class="alert-box success-alert" variant="success" v-if="showSuccessAlert">
        <div class="alert-icon success-icon">
          <div class="icon-control">
            <font-awesome-icon
              :icon="['fas', 'circle-check']"
              size="4x"
              style="color: white"
            />
          </div>
        </div>
        <h3>A successful toast</h3>
        <button class="alert-close" @click="showSuccessAlert = false">
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            size="2x"
            style="color: #747e89"
          />
        </button>
      </div>
      <div class="alert-box information-alert" variant="information" v-if="showDefaultAlert">
        <div class="alert-icon information-icon">
          <div class="icon-control">
            <font-awesome-icon
              :icon="['fas', 'circle-info']"
              size="4x"
              style="color: white"
            />
          </div>
        </div>
        <h3>An information toast</h3>
        <button class="alert-close" @click="showDefaultAlert = false">
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            size="2x"
            style="color: #747e89"
          />
        </button>
      </div>
      <div class="alert-box warning-alert" variant="warning" v-if="showWarningAlert">
        <div class="alert-icon warning-icon">
          <div class="icon-control">
            <font-awesome-icon
              :icon="['fas', 'triangle-exclamation']"
              size="4x"
              style="color: white"
            />
          </div>
          <!--  vô rôì nè, e thử mấy con icon khác xem , chọn mục free nha  -->
        </div>
        <h3>A warning toast</h3>
        <button class="alert-close" @click="showWarningAlert = false">
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            size="2x"
            style="color: #747e89"
          />
        </button>
      </div>
      <div class="alert-box destructive-alert" variant="danger" v-if="showDangerAlert">
        <div class="alert-icon destructive-icon">
          <div class="icon-control">
            <font-awesome-icon
              :icon="['fas', 'triangle-exclamation']"
              size="4x"
              style="color: white"
            />
          </div>
        </div>
        <h3>A destructive toast</h3>
        <button class="alert-close" @click="showDangerAlert = false">
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            size="2x"
            style="color: #747e89"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSuccessAlert: false,
      showDefaultAlert: false,
      showWarningAlert: false,
      showDangerAlert: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
@import url("../assets/css/alert.css");
</style>
