import {RouterLink} from "vue-router";
<template>
  <div class="signUp-container">
    <h1 class="title">Sign Up</h1>
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
      <button id="login-button" @click="redirectToLogin">Log in</button>
      <button id="register-button" @click="register">Register</button>
    </div>

    <p v-if="password !== confirmPassword" class="error-message">Passwords do not match.</p>
    <footer>
      <p>Created by Marcos, Aaron and Gemma</p>
    </footer>
  </div>
</template>

<script>
export default {
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
      // Puedes agregar aquí la redirección a la página de inicio de sesión
    },
  },
};
</script>
