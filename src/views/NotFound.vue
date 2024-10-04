<template>
  <div class="not-found-page">
    <div class="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <router-link to="/">
        <button class="back-home">Go Back Home</button>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style>
.not-found-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #f3f4f6;
  padding: 20px;
}

.error-container {
  max-width: 600px;
}

h1 {
  font-size: 120px;
  color: #060606;
  font-weight: bold;
  margin: 0;
  animation: bounce 1.5s infinite ease-in-out;
}

h2 {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.back-home {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-home:hover {
  background-color: #0056b3;
}

.error-image {
  margin-top: 40px;
}

.error-image img {
  width: 300px;
  height: auto;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
