<script setup>

import {RouterLink} from "vue-router";

</script>

<template>
  <div class="login_and_signUp-container">

    <h1 class="title">Welcome to Dungeon Clash</h1>

    <form @submit.prevent="login">

      <h2 class="login_and_signUp">Log in</h2>

      <div class="login_and_signUp_form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" @input="validateEmail" required placeholder="example@gmail.com" />
      </div>

      <div class="login_and_signUp_form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required placeholder="password" />
      </div>

      <div class="buttons_login_and_signUp">
        <router-link to="/home" class="router-link">
          <button id="login-button" type="submit">Login</button>
        </router-link>
        <router-link to="/sign-up" class="router-link">
          <button id="register-button" @click="register">Sign Up</button>
        </router-link>
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

