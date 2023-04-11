<template>
  <div class="section-product">
    <div class="section-product-list">
      <div class="container">
        <div class="product-list">
          <div v-for="item in dataProductItem">
            <!-- Sử dụng transition để thêm animation ẩn hiện cho component -->
            <Transition>
              <!-- Nếu showProduct === true thì hiện component -->
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
        <!-- Tạo event nhấn để thay đổi trạng thái showProduct -->
        <button class="hide-btn" @click="showProduct = !showProduct">
          Hide/show
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductOrder from "../components/ProductOrder.vue";
import ProductImage1 from "../assets/img/coffe-2.jpg";
import ProductImage2 from "../assets/img/coffe-3.jpg";
export default {
  data() {
    return {
      // khai báo trạng thái showProduct
      showProduct: true,
      // Khai báo dữ liệu của Product
      dataProductItem: [
        {
          urlProduct: ProductImage1,
          nameProduct: "Product 1",
          infoProduct: "Info for Items 1",
          pricesProduct: "14.56",
        },
        {
          urlProduct: ProductImage1,
          nameProduct: "Product 2",
          infoProduct: "Info for Items 2",
          pricesProduct: "76.56",
        },
        {
          urlProduct: ProductImage1,
          nameProduct: "Product 2",
          infoProduct: "Info for Items 3",
          pricesProduct: "24.56",
        },
        {
          urlProduct: ProductImage1,
          nameProduct: "Product 1",
          infoProduct: "Info for Items 4",
          pricesProduct: "17.56",
        },
      ],
    };
  },
  components: { ProductOrder },
};
</script>

<style></style>
