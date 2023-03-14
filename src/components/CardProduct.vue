<script>
import image from "../assets/img/card-image.jpg";

export default {
  props: {
    urlCard: {
      type: String,
    },
    titleCard: {
      type: String,
    },
    infoCard: {
      type: String,
    },
    linkCard: {
      type: String,
    },
    // classCardRed: {
    //   type: Boolean,
    //   default: false,
    // },
    // classCardBlue: {
    //   type: Boolean,
    //   default: false,
    // },
    isActive:{
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      // urlCard: image,
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
  <a :class="[isActive ? 'classCardYellow' : 'classCardBlue']" class="card-item" href="#">
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
