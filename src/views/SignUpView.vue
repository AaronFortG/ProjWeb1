
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
import {RouterLink} from "vue-router";

export default {
  components: {RouterLink},
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    register() {
      if (this.password === this.confirmPassword) {
        console.log("Registering...");
        console.log("Email:", this.email);
        console.log("Password:", this.password);
      } else {
        console.log("Passwords do not match.");
      }
    },
    redirectToLogin() {
      console.log("Redirecting to login page...");

    },
  },
};
</script>
