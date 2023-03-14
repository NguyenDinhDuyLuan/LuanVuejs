<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <div class="section-product">
      <div class="container">
        <div class="card-gallery">
         <CardProduct :is-active= 'true' :url-card="urlCard1" title-card="Card item 1" link-card="Read" info-card="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero molestias sed nobis, necessitatibus incidunt quo ex inventore aut iste pariatur recusandae atque. Beatae nisi doloremque assumenda praesentium deleniti quod magni omnis, commodi quis expedita qui consectetur atque amet, porro deserunt facere dolore blanditiis consequuntur. Ipsa perferendis mollitia dolorem quidem?"></CardProduct>
         <CardProduct :is-active= 'false' :url-card="urlCard2" title-card="Card item 2" link-card="Read" info-card="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero molestias sed nobis, necessitatibus incidunt quo ex inventore aut iste pariatur recusandae atque. Beatae nisi doloremque assumenda praesentium deleniti quod magni omnis, commodi quis expedita qui consectetur atque amet, porro deserunt facere dolore blanditiis consequuntur. Ipsa perferendis mollitia dolorem quidem?"></CardProduct>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import Image1 from "./assets/img/logo.svg";
import Image2 from "./assets/img/card-image.jpg";
import CardProduct from "./components/CardProduct.vue";
export default {
    data() {
        return {
            urlCard1: Image1,
            urlCard2: Image2,
        };
    },
    components: { CardProduct }
};
</script>
