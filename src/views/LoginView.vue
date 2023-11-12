<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="login_and_signUp-container">
    <h1 class="title">Welcome to Dungeon Clash</h1>

    <form @submit.prevent="login">
      <h2 class="login_and_signUp">Log in</h2>

      <div class="login_and_signUp_form-group">
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          v-model="email"
          required
          placeholder="example@gmail.com"
        />
      </div>

      <div class="login_and_signUp_form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required placeholder="password" />
      </div>

      <div class="buttons_login_and_signUp">

        <router-link id="login-button" type="submit" to="/home" class="router-link">Login</router-link>

        <router-link to="/sign-up" id="register-button" class="router-link">Sign Up</router-link>
      </div>
    </form>
  </div>

  <footer>
    <p>Created by Marcos Ruiz-Flores, Aaron Fort and Gemma Yebra.</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    /**
     * Válidamos el email del usuario que almenos contenga un @
     */
  }
}
</script>
