<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="login-container">
    <h1 class="title">Login</h1>
    <form @submit.prevent="login">
      <p id="Log in">Log in</p>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" @input="validateEmail" required />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <RouterLink to="/home">
        <button id="login-button" type="submit">Login</button>
      </RouterLink>
      <RouterLink to="/home">
        <button id="register-button" @click="register">Register</button>
      </RouterLink>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    /**
     * Válidamos el email del usuario que almenos contenga un @
     */
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) console.log("Email format is not valid!.");
    },
    login() {
      // Método para procesar el inicio de sesión
      // Puedes agregar lógica para autenticar al usuario aquí
      console.log("Iniciando sesión...");
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
    register() {
      // Método para redirigir al usuario a la página de registro
      // Puedes implementar la lógica de redirección a la página de registro aquí
      console.log("Redirigiendo al formulario de registro...");
    },
  },
};
</script>


<style scoped>
</style>
