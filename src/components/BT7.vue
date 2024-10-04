<template>
  <div>
    <h3>Bài 7:</h3>
    <router-link to="/" exact-active-class="active">Home</router-link>
    <router-link to="/product" exact-active-class="active">Product</router-link>
    <router-link to="/detail" exact-active-class="active"> Detail </router-link>
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
