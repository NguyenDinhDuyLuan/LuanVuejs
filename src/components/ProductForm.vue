<script>
export default {
  data() {
    return {
      productName: '',
      codeProduct: "",
      typeProduct: "S2",
      colorProduct: [],
      dataCheckbox: ["Code sản phẩm 1", "Code sản phẩm 2", "Code sản phẩm 3"],
    };
  },
};
</script>

<template>
  <form action="#" class="product-form">
    <label class="product-name" for="fname">Name product:</label><br />
    <input
      class="name-input"
      type="text"
      id="fname"
      name="fname"
      placeholder="Default input"
      v-model="productName"
    /><br />
    <div class="dropdown-wrapper">
      <label>Code product:</label>
      <br />
      <select v-model="codeProduct" class="code-selector">
        <option disabled value="">Default Select</option>
        <option v-for="option in dataCheckbox" :value="option">{{option}}</option>
      </select>
    </div>
    <label>Type product</label>
    <br />
    <div class="radio-wrapper">
      <div class="radio-style">
        <input
          class="radio-btn"
          type="radio"
          id="one"
          value="S2"
          v-model="typeProduct"
        />
        <label for="one">S2</label>
      </div>
      <div class="radio-style">
        <input
          class="radio-btn"
          type="radio"
          id="two"
          value="D6"
          v-model="typeProduct"
        />
        <label for="two">D6</label>
      </div>
    </div>
    <label>Color product</label>
    <br />
    <div class="checkbox-wrapper">
      <div class="checkbox-style">
        <input
          class="checkbox-btn"
          type="checkbox"
          id="red"
          value="Red"
          v-model="colorProduct"
        />
        <label for="red">Red</label>
      </div>
      <div class="checkbox-style">
        <input
          class="checkbox-btn"
          type="checkbox"
          id="blue"
          value="Blue"
          v-model="colorProduct"
        />
        <label for="blue">Blue</label>
      </div>
      <div class="checkbox-style">
        <input
          class="checkbox-btn"
          type="checkbox"
          id="gray"
          value="Gray"
          v-model="colorProduct"
        />
        <label for="gray">Gray</label>
      </div>
      <div class="checkbox-style">
        <input
          class="checkbox-btn"
          type="checkbox"
          id="white"
          value="White"
          v-model="colorProduct"
        />
        <label for="white">White</label>
      </div>
    </div>
  </form>
  <div class="form-result">
    <h3>Products in stock that have just been added are:</h3>
    <p>{{ productName }} : {{ codeProduct }}, {{ typeProduct }}, {{ colorProduct }}</p>
  </div>
</template>

<style scoped>
@import url("../assets/css/ProductForm.css");
</style>
