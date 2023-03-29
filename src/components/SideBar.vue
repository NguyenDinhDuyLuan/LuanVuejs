<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="sub-sidebar">
    <div class="top-logo">
      <a class="sidebar-logo">
        <img src="../assets/img/pachama.png" />
      </a>
    </div>
    <ul class="sidebar-menu">
      <li class="main-item">
        <router-link to="/about">Management</router-link>
      </li>
      <li>
        <ul>
          <li>
            <router-link to="/explore" class="sub-item">
              <div class="img-contain">
                <img src="../assets/img/dashboard.png" />
              </div>
              Dashboard</router-link
            >
          </li>
          <li>
            <router-link to="/" class="sub-item">
              <div class="img-contain">
                <img src="../assets/img/calendar.png" />
              </div>
              Calender management</router-link
            >
          </li>
          <li>
            <router-link to="/modal" class="sub-item">
              <div class="img-contain">
                <img src="../assets/img/pachama.png" />
              </div>
              Modal Vue</router-link
            >
          </li>
          <li>
            <router-link to="/slot" class="sub-item">
              <div class="img-contain">
                <img src="../assets/img/shopping-cart-icon.svg" />
              </div>
              Slot Vue</router-link
            >
          </li>
          <li>
            <router-link to="/slotModal" class="sub-item">
              <div class="img-contain">
                <img src="../assets/img/calendar.png" />
              </div>
              Slot Modal</router-link
            >
          </li>
          <li>
            <router-link to="/alert" class="sub-item">
              <div class="img-contain">
                <img src="../assets/img/notification.png" />
              </div>
              Alert</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url("../assets/css/sidebar.css");
</style>
