import {RouterLink} from "vue-router";
<template>
  <div class="register-container">
    <h1 class="title">Register</h1>
    <form @submit.prevent="register">
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

      <p id="Log in" @click="redirectToLogin">Log in</p>

      <button id="register-button" type="submit">Register</button>
    </form>

    <p v-if="password !== confirmPassword" class="error-message">Passwords do not match.</p>
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
