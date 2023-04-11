<template>
  <div class="section-alert">
    <!-- các bước tạo ra 1 component :
       1, hiển thị giao diện, 
       2, có thể dùng lại ở nhiều giao diện khác nhau thể hiện qua biến đổ data ,
       3 thay đổi nhiều trạng thái nhưng vẫn sử dụng 1 khung thông qua đặt biến check   -->
    <!--  trong component này: khung thông báo giống nhau, vị trí giống nhau sự khác biệt ở trạng thái 
       1, icon, màu thay đổi >>> chúng ta sử dụng check điều kiện [v-if]] và v-biding class để thay đổi  -->
    <!-- tạo ra 1 class mang 1 khung alert chung [ alert-box] , check điều kiện nếu status === 'susccess '
         thì add thêm classname "success" -->
    <div
      v-show="showAlert"
      :class="[
        'alert-box',
        alertClassBox,
        {
          success: status === 'success',
        },
        {
          fails: status === 'fails',
        },
        {
          warnning: status === 'warnning',
        },
        {
          infor: status === 'infor',
        },
      ]"
    >
      <div class="left-content">
        <div class="alert-icon success-icon" v-if="status === 'success'">
          <div class="icon-control">
            <!-- add icon theo từng điều kiện -->
            <!-- Icon cho alert success -->
            <font-awesome-icon
              :icon="['fas', 'circle-check']"
              size="4x"
              style="color: white"
            />
          </div>
        </div>
        <div class="alert-icon information-icon" v-if="status === 'infor'">
          <div class="icon-control">
             <!-- Icon cho alert information -->
            <font-awesome-icon
              :icon="['fas', 'circle-info']"
              size="4x"
              style="color: white"
            />
          </div>
        </div>
        <div class="alert-icon warning-icon" v-if="status === 'warnning'">
          <div class="icon-control">
            <font-awesome-icon
              :icon="['fas', 'triangle-exclamation']"
              size="4x"
              style="color: white"
            />
          </div>
        </div>
        <div class="alert-icon destructive-icon" v-if="status === 'fails'">
          <div class="icon-control">
            <font-awesome-icon
              :icon="['fas', 'triangle-exclamation']"
              size="4x"
              style="color: white"
            />
          </div>
        </div>

        <!--  người dùng truyền data vào  -->
        <h3>{{ alertInfo }}</h3>
      </div>
      <button class="alert-close" @click="showAlert = false">
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          size="2x"
          style="color: #747e89"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      theme: {
        type: String,
        default: "susscess",
        validator(value) {
          return ["susscess", "fails", "warnning", "infor"].includes(value);
        },
      },
    },
    showAlert: {
      type: Boolean,
      default: false,
    },
    alertInfo: {
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
@import url("../assets/css/alert.css");
</style>
