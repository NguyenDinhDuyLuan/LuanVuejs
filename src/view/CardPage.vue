<template>
  <div class="section-product">
    <div class="container">
      <h3>Card Product</h3>
      <div class="card-gallery">
        <CardProduct
          :isActive="true"
          :urlCard="urlCard1"
          title-card="Card Item 1"
          linkCard="Read"
          infoCard="Card detail 1"
        />
        <CardProduct
          :isActive="false"
          :urlCard="urlCard2"
          title-card="Card Item 2"
          linkCard="Read"
          infoCard="Card detail 2"
        />
        <CardProduct
          :isActive="false"
          :urlCard="urlCard3"
          title-card="Card Item 3"
          linkCard="Read"
          infoCard="Card detail 3"
        />
        <CardProduct
          :isActive="true"
          :urlCard="urlCard1"
          title-card="Card Item 4"
          linkCard="Read"
          infoCard="Card detail 4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "../components/CardProduct.vue";
import CardImage1 from "../assets/img/card-image.jpg";
import CardImage2 from "../assets/img/flower-card.jpg";
import CardImage3 from "../assets/img/coffe-2.jpg";
export default {
  data() {
    return {
      urlCard1: CardImage1,
      urlCard2: CardImage2,
      urlCard3: CardImage3,
    };
  },
  components: { CardProduct },
};
</script>

<style></style>
