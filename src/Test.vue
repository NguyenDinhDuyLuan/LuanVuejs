<template>
  <div>
    <!-- <div class="section-navbar">
      <div class="navbar-wrapper">
        <Navbar />
      </div>

      khúc này hiển thị nội dung được định tuyến, tức là cái ui lúc nãy mình import ở trang home á 
    </div>
    <router-view /> -->
    <div class="section-sidebar">
      <div class="container">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Sidebar from "./components/SideBar.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: { Navbar, Sidebar },
};
</script>
