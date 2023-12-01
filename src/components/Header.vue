<template>
  <header class="flex-row">
    <div class="logo-container flex-row">
      <span class="logo">Bethzatha</span>
    </div>
    <div class="navigation-container flex-row">
      <router-link to="/">
        <div class="nav-item flex-row">
          <i class="bx bxs-dashboard"></i>
          <div>Dashboard</div>
        </div>
      </router-link>
      <router-link to="/">
        <div class="nav-item flex-row">
          <i class="bx bxs-user"></i>
          <div>Staffs</div>
        </div>
      </router-link>
      <router-link to="/">
        <div class="nav-item flex-row">
          <i class="bx bx-clinic"></i>
          <div>Doctors</div>
        </div>
      </router-link>
      <router-link to="/">
        <div class="nav-item flex-row">
          <i class="bx bx-test-tube"></i>
          <div>Tests</div>
        </div>
      </router-link>
      <router-link to="/">
        <div class="nav-item flex-row">
          <i class="bx bxs-home-heart"></i>
          <div>Patients</div>
        </div>
      </router-link>
      <router-link to="/">
        <div class="nav-item flex-row">
          <i class="bx bx-transfer-alt"></i>
          <div>Transactions</div>
        </div>
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../styles/colors.scss";

header {
  font-family: "Poppins", sans-serif;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 1rem 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  .logo {
    color: $--bethzatha-blue;
    font-size: 1.5rem;
  }

  .logo-container,
  .navigation-container {
    margin: 0 5rem;
  }

  .a {
    justify-content: center;
    align-items: center;
  }
}

.navigation-container {
  gap: 2rem;

  a {
    text-decoration: none;
  }

  .nav-item {
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    color: $--text-grey;
  }
  .nav-item:hover {
    color: $--bethzatha-blue;
  }
}
</style>
<script setup lang="ts"></script>
