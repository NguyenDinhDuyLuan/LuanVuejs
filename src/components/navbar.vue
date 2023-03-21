<script>
export default {
  name: "App",
  props: {
    urlLogo: {
      type: String,
    },
  },

  data() {
    return {};
  },
};
</script>
<template>
  <div class="main-navbar" id="app">
    <a class="navbar-logo">
      <img src="../assets/img/pachama.png" />
      <h4>Pachama</h4>
    </a>
    <nav class="navbar-menu">
      <ul class="navbar-menu-control">
        <li><a href="#">About us</a></li>
        <li><a href="#">How it works</a></li>
        <li><a href="#">Explore</a>
            <ul class="dropdown">
                <li><a href="#">Explore 1</a></li>
                <li><a href="#">Explore 2</a></li>
            </ul>
        </li>
        <li><a href="#">Impact</a></li>
      </ul>
    </nav>
    <div class="navbar-user">
      <div class="user-cart">
        <img src="../assets/img/shopping-cart-icon.svg" />
      </div>
      <div class="user-avatar">
        <img src="../assets/img/fujiMout.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../assets/css/navbar.css");
</style>
