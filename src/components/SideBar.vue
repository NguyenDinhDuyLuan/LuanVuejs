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
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@import url("../assets/css/sidebar.css");
</style>
