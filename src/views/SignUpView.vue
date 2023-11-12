<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="signUp-container">
    <h1 class="title">Welcome to Dungeon Clash</h1>
    <h2 class="signUp">Sign Up</h2>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required />
      </div>

    <div class="button-container">
      <RouterLink to="/" class="router-link">
        <button class="login-button" @click="redirectToLogin">Log in</button>
      </RouterLink>
      <RouterLink to="/home" class="router-link">
        <button class="register-button" @click="register">Create Account</button>
      </RouterLink>
    </div>

    <p v-if="password !== confirmPassword" class="error-message">Passwords do not match.</p>
    <footer>
      <p>Created by Marcos, Aaron and Gemma</p>
    </footer>
  </div>
</template>

<script>

export default {
  components: {RouterLink},
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
  .signUp-container {
    text-align: center;
    margin: 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .signUp-container h2 {
    margin: 20px;
    color: white;
  }

  form {
    width: 100%;
    max-width: 300px;
    display: grid;
    gap: 4px; /* Espacio entre los elementos */
    align-items: center;
    justify-content: center;
    text-align: left;
    margin-top: 3px; /* Añade espacio superior */
    margin-bottom: 3px; /* Añade espacio inferior */
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    font-weight: bold;
    color: white;
  }

  label {
    font-weight: bold;
  }

  .form-group input {
    width: 100%;
    padding: 5px;
    border: 2px solid #ccc;
    border-radius: 20px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);
  }

  .error-message {
    color: red;
    margin-top: 40px;
  }

  .button-container {
    display: flex;
    justify-content: space-around; /* Espaciado entre los botones */
    margin-top: 20px;
  }

  .login-button,
  .register-button {
    display: inline-block;
    padding: 20px 30px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s; /* Transición suave del color de fondo */
  }

  .login-button {
    background-color: #007BFF;
  }

  .register-button {
    background-color: #28A745;
  }

  .login-button:hover,
  .register-button:hover {
    background-color: #0056b3;
  }

  footer p {
    background-color: #2F2F2F;
    color: #ffffff;
    text-align: center;
    font-size: 20px;
    font-family: "Times New Roman", serif;
    padding: 10px;
    position: relative;
    bottom: 0;
    width: 100%;
    margin-top: 30px;
  }
</style>