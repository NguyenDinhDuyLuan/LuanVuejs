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
    }
  },

  data() {
    return {
    };
  },
};
</script>

<template>
  <div class="country-flag">
    <div class="flag-img">
      <img :src="urlFlag" />
    </div>
    <p class="flag-name">{{nameFlag}}</p>
    <p class="flag-tel">({{telephoneFlag}})</p>
  </div>
</template>

<style scoped>
@import url("../assets/css/flagCountry.css");
</style>
