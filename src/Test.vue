<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <div class="section-navbar">
      <div class="navbar-wrapper">
        <Navbar />
      </div>
    </div>
    <div>hellloooo</div>
    <!-- khúc này hiển thị nội dung được định tuyến, tức là cái ui lúc nãy mình import ở trang home á  -->
    <router-view/>
  
  </main>
</template>

<script>
// import Image1 from "./assets/img/logo.svg";
// import Image2 from "./assets/img/card-image.jpg";
// import GermanImage from "../src/assets/img/german-flag.png";
// import JapanImage from "./assets/img/japan-flag.png";
// import AmericaImage from "./assets/img/america-flag.png";
// import VietnamImage from "./assets/img/vietnam-flag.png";
// import ProductCoffe from "./assets/img/coffe.jpg";

// import CardProduct from "./components/CardProduct.vue";
// import FlagCountry from "./components/FlagCountry.vue";
// import ProductOrder from "./components/ProductOrder.vue";
import ProductForm from "./components/ProductForm.vue";
import Navbar from "./components/navbar.vue";

export default {
  data() {
    return {
      // dataCardProduct: [
      //   {
      //     isActive: true,
      //     urlCard: Image2,
      //     titleCard: " title card product ",
      //     linkCard: " link card ",
      //     infoCard: " infor card ",
      //   },
      //   {
      //     isActive: false,
      //     urlCard: Image1,
      //     titleCard: " title card product ",
      //     linkCard: " link card ",
      //     infoCard: " infor card ",
      //   },
      //   {
      //     isActive: true,
      //     urlCard: Image1,
      //     titleCard: " title card product ",
      //     linkCard: " link card ",
      //     infoCard: " infor card ",
      //   },
      //   {
      //     isActive: true,
      //     urlCard: Image2,
      //     titleCard: " title card product ",
      //     linkCard: " link card ",
      //     infoCard: " infor card ",
      //   },
      // ],
      // dataFlagCountry: [
      //   {
      //     flagActive: true,
      //     urlFlag: GermanImage,
      //     nameFlag: "German",
      //     telephoneNum: "+241",
      //   },
      //   {
      //     flagActive: false,
      //     urlFlag: VietnamImage,
      //     nameFlag: "Viet Nam",
      //     telephoneNum: "+84",
      //   },
      //   {
      //     flagActive: true,
      //     urlFlag: JapanImage,
      //     nameFlag: "Japan",
      //     telephoneNum: "+52",
      //   },
      //   {
      //     flagActive: false,
      //     urlFlag: AmericaImage,
      //     nameFlag: "America",
      //     telephoneNum: "+14",
      //   },
      // ],
      // dataProductItem: [
      //   {
      //     urlProduct: ProductCoffe,
      //     nameProduct: "Pinot Noir",
      //     infoProduct:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. ",
      //     pricesProduct: "16.95",
      //   },
      //   {
      //     urlProduct: ProductCoffe,
      //     nameProduct: "Product 2",
      //     infoProduct:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. ",
      //     pricesProduct: "17.95",
      //   },
      //   {
      //     urlProduct: ProductCoffe,
      //     nameProduct: "Product 3",
      //     infoProduct:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. ",
      //     pricesProduct: "18.95",
      //   },
      //   {
      //     urlProduct: ProductCoffe,
      //     nameProduct: "Product 4",
      //     infoProduct:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. ",
      //     pricesProduct: "19.95",
      //   },
      //   {
      //     urlProduct: ProductCoffe,
      //     nameProduct: "Product 5",
      //     infoProduct:
      //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. ",
      //     pricesProduct: "20.95",
      //   },
      // ],
      // urlCard1: Image1,
      // urlCard2: Image2,
      // showProduct: true,
      // showProduct2: true,
      // activeComponent: "ProductOrder",
      // này hơi thừa nha em , với component chưa có css á ,ok , report đi e mai làm tiếp
      // urlFlag1: GermanImage,
      // urlFlag2: JapanImage,
      // urlFlag3: AmericaImage,
      // urlFlag4: VietnamImage,
    };
  },
  components: { Navbar },
};
</script>
