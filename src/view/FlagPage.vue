<template>
  <div class="flag-list">
    <!-- Sử dụng hàm v-for để lấy dữ liệu trong dataFlagCountry -->
    <div class="col-3" v-for="item in dataFlagCountry">
      <FlagCountry
        :flagActive="item.flagActive"
        :urlFlag="item.urlFlag"
        :nameFlag="item.nameFlag"
        :telephoneFlag="item.telephoneNum"
      />
      <!-- Sử dụng hàm V-if để hiện dòng chữ -->
      <p v-if="item.nameFlag === 'Viet Nam'">Tôi yêu VN</p>
      <!-- Sử dụng hàm v-show để hiện dòng chữ -->
      <p v-show="item.nameFlag === 'German'">Tôi yêu Đức</p>
      <!-- Sử dụng vòng lặp if-else để hiển thị  văn hóa của từng đất nước -->
      <div v-if="item.nameFlag === 'Viet Nam'">
        <img class="country-specialty" src="../assets/img/vnHat.jpg" />
      </div>
      <div v-else-if="item.nameFlag === 'Japan'">
        <img class="country-specialty" src="../assets/img/fujiMout.jpg" />
      </div>
      <div v-else-if="item.nameFlag === 'American'">
        <img class="country-specialty" src="../assets/img/dollarSign.jpg" />
      </div>
      <div v-else>German</div>
    </div>
  </div>
</template>

<script>
import FlagCountry from "../components/FlagCountry.vue";
import GermanImage from "../assets/img/german-flag.png";
import JapanImage from "../assets/img/japan-flag.png";
import AmericaImage from "../assets/img/america-flag.png";
import VietNamImage from "../assets/img/vietnam-flag.png";

export default {
  data() {
    return {
      // Dữ liệu truyền vào components
      dataFlagCountry: [
        {
          flagActive: true,
          urlFlag: GermanImage,
          nameFlag: "German",
          telephoneNum: "+241",
        },
        {
          flagActive: false,
          urlFlag: JapanImage,
          nameFlag: "Japan",
          telephoneNum: "+52",
        },
        {
          flagActive: true,
          urlFlag: AmericaImage,
          nameFlag: "American",
          telephoneNum: "+14",
        },
        {
          flagActive: false,
          urlFlag: VietNamImage,
          nameFlag: "Viet Nam",
          telephoneNum: "+84",
        },
      ],
    };
  },
  components: { FlagCountry },
};
</script>

<style></style>
