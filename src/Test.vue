<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <div class="section-product">
      <div class="container">
        <div class="card-gallery">
          <CardProduct
            :is-active="true"
            :url-card="urlCard1"
            title-card="Card item 1"
            link-card="Read"
            info-card="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero molestias sed nobis, necessitatibus incidunt quo ex inventore aut iste pariatur recusandae atque. Beatae nisi doloremque assumenda praesentium deleniti quod magni omnis, commodi quis expedita qui consectetur atque amet, porro deserunt facere dolore blanditiis consequuntur. Ipsa perferendis mollitia dolorem quidem?"
          ></CardProduct>
          <CardProduct
            :is-active="false"
            :url-card="urlCard2"
            title-card="Card item 2"
            link-card="Read"
            info-card="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero molestias sed nobis, necessitatibus incidunt quo ex inventore aut iste pariatur recusandae atque. Beatae nisi doloremque assumenda praesentium deleniti quod magni omnis, commodi quis expedita qui consectetur atque amet, porro deserunt facere dolore blanditiis consequuntur. Ipsa perferendis mollitia dolorem quidem?"
          ></CardProduct>
        </div>
        <!-- render list ở đây chứ em 
          kkk ý chị là render lít component á 
         -->
        <div class="row">
          <div class="col-4" v-for="item in dataCardProduct">
            <CardProduct
              :isActive="item.isActive"
              :urlCard="item.urlCard"
              :titleCard="item.titleCard"
              :infoCard="item.infoCard"
              :linkCard="item.linkCard"
            ></CardProduct>
          </div>
        </div>
        <div class="flag-list">
          <div class="col-3" v-for="item in dataFlagCountry">
            <FlagCountry
              :urlFlag="item.urlFlag"
              :nameFlag="item.nameFlag"
              :telephoneFlag="item.telephoneNum"
            ></FlagCountry>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Image1 from "./assets/img/logo.svg";
import Image2 from "./assets/img/card-image.jpg";
import GermanImage from "../src/assets/img/german-flag.png";
import JapanImage from "./assets/img/japan-flag.png";
import AmericaImage from "./assets/img/america-flag.png";
import VietnamImage from "./assets/img/vietnam-flag.png";
import CardProduct from "./components/CardProduct.vue";
import FlagCountry from "./components/FlagCountry.vue";
export default {
  data() {
    return {
      dataCardProduct: [
        {
          isActive: true,
          urlCard: Image2,
          titleCard: " title card product ",
          linkCard: " link card ",
          infoCard: " infor card ",
        },
        {
          isActive: false,
          urlCard: Image1,
          titleCard: " title card product ",
          linkCard: " link card ",
          infoCard: " infor card ",
        },
        {
          isActive: true,
          urlCard: Image1,
          titleCard: " title card product ",
          linkCard: " link card ",
          infoCard: " infor card ",
        },
        {
          isActive: true,
          urlCard: Image2,
          titleCard: " title card product ",
          linkCard: " link card ",
          infoCard: " infor card ",
        },
      ],
      dataFlagCountry: [
        {
          urlFlag: GermanImage,
          nameFlag: "German",
          telephoneNum: "+241",
        },
        {
          urlFlag: JapanImage,
          nameFlag: "Viet Nam",
          telephoneNum: "+84",
        },
        {
          urlFlag: AmericaImage,
          nameFlag: "Japan",
          telephoneNum: "+52",
        },
        {
          urlFlag: VietnamImage,
          nameFlag: "America",
          telephoneNum: "+14",
        },
      ],
      urlCard1: Image1,
      urlCard2: Image2,
      urlFlag1: GermanImage,
      urlFlag2: JapanImage,
      urlFlag3: AmericaImage,
      urlFlag4: VietnamImage,
    };
  },
  components: { CardProduct, FlagCountry},
};
</script>
