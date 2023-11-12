<script setup>

import {RouterLink} from "vue-router";

</script>

<template>
  <div class="login-container">
    <h1 class="title">Welcome to Dungeon Clash</h1>
    <form @submit.prevent="login">
      <h2 class="Log in">Log in</h2>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" @input="validateEmail" required placeholder="example@gmail.com" />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required placeholder="password" />
      </div>

      <RouterLink to="/home">
        <button id="login-button" type="submit">Login</button>
      </RouterLink>
      <RouterLink to="/sign-up">
        <button id="register-button" @click="register">Sign Up</button>
      </RouterLink>
      <footer>
        <p>Created by Marcos, Aaron and Gemma</p>
      </footer>
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
  .login-container {
    text-align: center;
    margin: 20px;
  }

  .form-group {
    margin: 20px;
  }

  h2.Log.in {
    color: #ffffff;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  footer p {
    background-color: #2F2F2F;
    color: #ffffff;
    text-align: center;
    font-size: 20px;
    font-family: "Times New Roman", serif;
    padding: 10px;
    position: relative; /* Cambiado de absolute a relative */
    bottom: 0;
    width: 100%;
    margin-top: 20px; /* Añadido espacio superior */
  }

  .form-group label {
    display: block;
    margin-bottom: 15px;
    font-weight: bold;
    color: #fff;
  }

  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);
  }

  #login-button,
  #register-button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #login-button {
    background-color: #007BFF;
    margin-right: 0;
    margin-bottom: 15px;
  }

  #register-button {
    background-color: #28A745;
  }
</style>
