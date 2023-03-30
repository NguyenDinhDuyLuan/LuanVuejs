<template>
  <div class="section-alert">
    <!-- <div class="alert-btn">
      <button @click="showSuccessAlert = true">Success Button</button>
      <button @click="showDefaultAlert = true">Information Button</button>
      <button @click="showWarningAlert = true">Warning Button</button>
      <button @click="showDangerAlert = true">Danger Button</button>
    </div> -->
    <!-- phần button này là gọi component nên nó sẽ nằm ngoài component  -->

    <!-- <div class="alert-wrapper">
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
    </div> -->
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
        'alert-box', alertClassBox,
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
      <!-- tương tự em sửa lại class name hiển thị tương ứng nhé  -->
      <div class="alert-icon" :class="alertClassIcon">
        <div class="icon-control">
          <!-- tương tự em add thêm icon theo từng điều kiện nha , 
              chỗ icon này mở rộng linh hoạt còn có thể cho người dùng truyền vào nữa nha,
         -->
          <font-awesome-icon
            v-if="status === alertStatus"
            :icon="['fas', alertIcon]"
            size="4x"
            style="color: white"
          />
        </div>
      </div>
      <!--  dòng này em cần cho người dùng truyền data vào nha,  -->
      <h3>{{ alertInfo }}</h3> 
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
  //  còn thiếu data đổ voà nữa nha
  props: {
    alertInfo: {
      type: String,
    },
    alertIcon: {
      type: String,
    },
    alertStatus: {
      type: String,
    },
    alertClassIcon: {
      type: String,
    },
    alertClassBox: {
      type: String,
    },
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
      default: false
    },
  },
  data() {
    return {


    };
  },
  methods: {},
};
</script>

<style scoped>
@import url("../assets/css/alert.css");
</style>
