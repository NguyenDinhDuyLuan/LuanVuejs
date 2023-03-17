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
              :flagActive="item.flagActive"
              :urlFlag="item.urlFlag"
              :nameFlag="item.nameFlag"
              :telephoneFlag="item.telephoneNum"
            ></FlagCountry>
            <p v-if="item.flagActive === true">Toi yeu VN</p>
            <p v-show="item.flagActive === true">Toi yeu VN</p>
            <div v-if="item.nameFlag === 'Viet Nam'">
              <img class="country-specialty" src="./assets/img/vnHat.jpg" />
            </div>
            <div v-else-if="item.nameFlag === 'Japan'">
              <img class="country-specialty" src="./assets/img/fujiMout.jpg" />
            </div>
            <div v-else-if="item.nameFlag === 'America'">
              <img
                class="country-specialty"
                src="./assets/img/dollarSign.jpg"
              />
            </div>
            <div v-else>German</div>
          </div>
        </div>
      </div>
      <div class="section-product-list">
        <div class="container">
          <div class="product-list">
            <div v-for="item in dataProductItem">
              <Transition>
                <div v-if="showProduct">
                  <ProductOrder
                    :urlProduct="item.urlProduct"
                    :nameProduct="item.nameProduct"
                    :infoProduct="item.infoProduct"
                    :pricesProduct="item.pricesProduct"
                  />
                </div>
              </Transition>
            </div>
          </div>
          <button class="hide-btn" @click="showProduct = !showProduct">
            Hide/show
          </button>
          <!-- {{ showProduct }} -->
        </div>
      </div>
      <div class="section-product-list">
        <div class="container">
          <Transition name="bounce" mode="out-in">
            <div class="product-list">
              <ProductOrder
                :is="activeComponent"
                urlProduct="/src/assets/img/coffe-2.jpg"
                nameProduct="TranstionTest1"
                infoProduct="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. "
                pricesProduct="14.00"
              />
            </div>
          </Transition>
          <button
            class="hide-btn"
            @click="activeComponent"
            value="ProductOrder"
          >
            Component A
          </button>
          <button class="hide-btn" @click="activeComponent" value="FlagCountry">
            Component B
          </button>
          <Transition name="fade" mode="out-in">
            <component :is="activeComponent"></component>
          </Transition>
          <label>
            <input
              type="radio"
              v-model="activeComponent"
              value="ProductOrder"
            />
            A
          </label>
          <label>
            <input type="radio" v-model="activeComponent" value="FlagCountry" />
            B
          </label>
          <!-- {{ showProduct }} -->
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
import ProductOrder from "./components/ProductOrder.vue";
import ProductCoffe from "./assets/img/coffe.jpg";
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
          flagActive: true,
          urlFlag: GermanImage,
          nameFlag: "German",
          telephoneNum: "+241",
        },
        {
          flagActive: false,
          urlFlag: VietnamImage,
          nameFlag: "Viet Nam",
          telephoneNum: "+84",
        },
        {
          flagActive: true,
          urlFlag: JapanImage,
          nameFlag: "Japan",
          telephoneNum: "+52",
        },
        {
          flagActive: false,
          urlFlag: AmericaImage,
          nameFlag: "America",
          telephoneNum: "+14",
        },
      ],
      dataProductItem: [
        {
          urlProduct: ProductCoffe,
          nameProduct: "Pinot Noir",
          infoProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. ",
          pricesProduct: "16.95",
        },
        {
          urlProduct: ProductCoffe,
          nameProduct: "Product 2",
          infoProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. ",
          pricesProduct: "17.95",
        },
        {
          urlProduct: ProductCoffe,
          nameProduct: "Product 3",
          infoProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. ",
          pricesProduct: "18.95",
        },
        {
          urlProduct: ProductCoffe,
          nameProduct: "Product 4",
          infoProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. ",
          pricesProduct: "19.95",
        },
        {
          urlProduct: ProductCoffe,
          nameProduct: "Product 5",
          infoProduct:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod architecto iusto assumenda neque saepe ipsam cum. In, modi itaque. ",
          pricesProduct: "20.95",
        },
      ],
      urlCard1: Image1,
      urlCard2: Image2,
      showProduct: true,
      showProduct2: true,
      activeComponent: "ProductOrder",
      // này hơi thừa nha em , với component chưa có css á ,ok , report đi e mai làm tiếp

      // urlFlag1: GermanImage,
      // urlFlag2: JapanImage,
      // urlFlag3: AmericaImage,
      // urlFlag4: VietnamImage,
    };
  },
  components: { CardProduct, FlagCountry, ProductOrder },
};
</script>
