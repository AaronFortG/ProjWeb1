import {RouterLink} from "vue-router";
<template>
  <div class="register-container">
    <h1>Register</h1>
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

      <p id="Log in">Log in</p>

      <button id="register-button" type="submit">Register</button>
      <button id="login-button" @click="redirectToLogin">Log in</button>
    </form>

    <p v-if="password !== confirmPassword" class="error-message">Passwords does not match.</p>
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
        console.log("Checking in...");
        console.log("Email:", this.email);
        console.log("Password:", this.password);
      } else console.log("Password does not match.");

    },
    redirectToLogin() {
      console.log("Redirecting to login page...");
    },
  },
};
</script>

<style scoped>
.register-container {
  text-align: center;
  margin: 20px;
}

.form-group {
  margin: 10px;
}

.error-message {
  color: red;
}

</style>
