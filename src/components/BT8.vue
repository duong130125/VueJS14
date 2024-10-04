<template>
  <div>
    <h3>Bài 8:</h3>
    <router-link to="/dashboard" exact-active-class="active"
      >Dashboard</router-link
    >
    <router-link to="/account" exact-active-class="active">Account</router-link>
    <router-link to="/product" exact-active-class="active">Product</router-link>
  </div>
</template>

<script setup></script>

<style scoped>
a {
  text-decoration: none;
  margin-right: 20px;
}
.active {
  background-color: rgb(18, 146, 220);
  padding: 15px;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
}
</style>
