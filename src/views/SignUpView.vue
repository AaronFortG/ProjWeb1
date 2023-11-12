<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="login_and_signUp-container">

    <h1 class="title">Welcome to Dungeon Clash</h1>

    <h2 class="login_and_signUp">Sign Up</h2>

    <div class="login_and_signUp_form-group">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required placeholder="example@gmail.com" />
    </div>

    <div class="login_and_signUp_form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required placeholder="password"/>
    </div>

    <div class="login_and_signUp_form-group">
      <label for="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" v-model="confirmPassword" required placeholder="password"/>
    </div>

    <div class="buttons_login_and_signUp">
      <RouterLink to="/" class="router-link">
        <button id="login-button" type="submit">Login</button>
      </RouterLink>
      <RouterLink to="/home" class="router-link">
        <button id="register-button" @click="register">Create account</button>
      </RouterLink>
    </div>

    <p v-if="password !== confirmPassword" class="error-message">Passwords do not match.</p>

  </div>

  <footer>
    <p>Created by Marcos Ruiz-Flores, Aaron Fort and Gemma Yebra.</p>
  </footer>
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


  label {
    font-weight: bold;
  }


  .error-message {
    color: red;
    margin-top: 40px;
  }

</style>