<script>
import image from "../assets/img/card-image.jpg";

export default {
  //Khai báo các biến props đế lấy dữ liệu truyền vào
  props: {
    // Dữ liệu của ảnh sản phẩm
    urlCard: {
      type: String,
    },
    // Dữ liệu tên của card
    titleCard: {
      type: String,
    },
    // Dữ liệu thông tin card
    infoCard: {
      type: String,
    },
    linkCard: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      // urlCard: image,
      // productsInfo: {
      // urlCard: 'How to do lists in Vue',
      // titleCard: 'Jane Doe',
      // infoCard: '2016-04-10'
      // },
      styleObject: {
        color: "red",
        fontSize: "13px",
      },

      // titleCard: "hellli ",
    };
  },
};
</script>

<template>
  <!-- Nếu dữ liệu truyền vô isActive bằng true thì thay đổi style của component -->
  <a
    :class="[isActive ? 'classCardYellow' : 'classCardBlue']"
    class="card-item"
    href="#"
  >
    <div class="card-img">
      <img :src="urlCard" />
    </div>
    <p class="title" :style="styleObject">
      {{ titleCard }}
    </p>
    <p class="info">
      {{ infoCard }}
    </p>
    <a class="button" href="#">{{ linkCard }} </a>
  </a>
</template>

<style scoped>
@import url("../assets/css/CardProduct.css");
</style>
