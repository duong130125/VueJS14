<template>
  <div class="auth-form">
    <h2>Login account</h2>
    <form @submit.prevent="handleLogin">
      <label for="email">Your email</label>
      <input
        type="email"
        v-model="email"
        placeholder="name@company.com"
        required
      />

      <label for="password">Password</label>
      <input type="password" v-model="password" placeholder="******" required />

      <button type="submit">Login an account</button>
    </form>
    <p>
      Don't have an account?
      <router-link to="/register">Register here</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Sử dụng ref để tạo biến reactive
const email = ref("");
const password = ref("");
const router = useRouter();

// Hàm xử lý đăng nhập
const handleLogin = () => {
  const storedUser = JSON.parse(localStorage.getItem(email.value));
  if (storedUser && storedUser.password === password.value) {
    alert("Login successful!");
    router.push("/dashboard"); // Chuyển hướng sau khi đăng nhập thành công
  } else {
    alert("Invalid credentials!");
  }
};
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
}

button:hover {
  background-color: #0056b3;
}

p {
  text-align: center;
  font-size: 14px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
