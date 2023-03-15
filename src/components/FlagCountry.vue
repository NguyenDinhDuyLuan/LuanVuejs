<script>
export default {
  props: {
    urlFlag: {
      type: String,
    },
    nameFlag: {
      type: String,
    },
    telephoneFlag: {
      type: String,
    },
    flagActive:{
      type: Boolean,
      defaul: false,
    }
  },

  data() {
    return {};
  },
};
</script>

<template>
  <div :class="[flagActive ? 'flagBorderGreen' : 'flagBorderRed']" class="country-flag">
    <div class="flag-img">
      <img :src="urlFlag" />
    </div>
    <div class="flag-name">
      <span>{{ nameFlag }}</span>
    </div>
    <div class="flag-tel">
      <span>({{ telephoneFlag }})</span>
    </div>
  </div>
</template>

<style scoped>
@import url("../assets/css/flagCountry.css");
</style>
