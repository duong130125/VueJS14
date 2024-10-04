<template>
  <div class="auth-form">
    <h2>Create account</h2>
    <form @submit.prevent="handleRegister">
      <label for="email">Your email</label>
      <input
        type="email"
        v-model="email"
        placeholder="name@company.com"
        required
      />

      <label for="password">Password</label>
      <input type="password" v-model="password" placeholder="******" required />

      <label for="confirmPassword">Confirm password</label>
      <input
        type="password"
        v-model="confirmPassword"
        placeholder="******"
        required
      />

      <button type="submit">Create an account</button>
    </form>
    <p>
      Already have an account?
      <router-link to="/login">Login here</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Sử dụng ref để tạo biến reactive
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

// Hàm xử lý đăng ký
const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!");
    return;
  }

  const existingUser = localStorage.getItem(email.value);
  if (existingUser) {
    alert("Email already registered!");
  } else {
    localStorage.setItem(
      "users",
      JSON.stringify({ email: email.value, password: password.value })
    );
    alert("Registration successful!");
    router.push("/login");
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
