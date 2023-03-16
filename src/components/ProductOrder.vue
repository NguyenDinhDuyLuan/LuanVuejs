<script>
export default {
  props: {
    urlProduct: {
      type: String,
    },
    nameProduct: {
      type: String,
    },
    infoProduct: {
      type: String,
    },
    pricesProduct: {
      type: String,
    },
    amoutProduct: {
      type: String,
    },
  },

  data() {
    return {
      count: 0,
    };
  },
  methods: {
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>

<template>
  <div class="product-items" id="productItems">
    <div class="option-menu">
      <button
        class="back-btn"
        @click="
          (event) => warn('Bạn có thực sự muốn quay trở về không?', event)
        "
      >
        <img src="../assets/img/left-arrow.svg" />
      </button>
      <button class="option-btn">
        <img src="../assets/img/menu.png" />
      </button>
    </div>
    <div class="product-img">
      <img :src="urlProduct" />
    </div>
    <div class="product-name">
      <p>{{ nameProduct }}</p>
    </div>
    <div class="product-info">
      <p>{{ infoProduct }}</p>
    </div>
    <div class="product-order">
      <div class="product-prices">${{ pricesProduct }}</div>
      <div class="product-amount">
        <button class="amount-minus" @click="count--">-</button>
        <p class="amount-num">{{ count }}</p>
        <button class="amount-plus" @click="count++">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../assets/css/ProductOrder.css");
</style>
