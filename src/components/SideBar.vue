<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="sub-sidebar">
    <div class="top-content">
      <div class="left-info">
        <a class="sidebar-logo">
          <img src="../assets/img/pachama.png" />
        </a>
      </div>
      <div class="right-info">
        <div class="user-info">
          <h3>Hello Admin,</h3>
          <div class="user-avatar">
            <img src="../assets/img/fujiMout.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-content">
      <div class="left-sidebar">
        <ul>
          <li><router-link to="/">Management</router-link></li>
          <li><router-link to="/about">Dash Board</router-link></li>
          <li><router-link to="/Explore">Calender Management</router-link></li>
        </ul>
      </div>
      <div class="right-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("../assets/css/sidebar.css");
</style>
