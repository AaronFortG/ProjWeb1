<script setup>
import { RouterLink } from 'vue-router'
import MySecondComponent from "@/components/InputComponent.vue";

import Swal from 'sweetalert2';
import {inject, ref} from 'vue';
import { ApiClient } from '@/assets/ApiClient';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const imageOptions = [
  'https://i.postimg.cc/jj9Dj2vz/Captura-de-Pantalla-2024-01-13-a-las-14-47-12.png',
  'https://i.postimg.cc/50C6QJkD/Captura-de-Pantalla-2024-01-13-a-las-14-47-22.png',
  'https://i.postimg.cc/sxC1pLkx/Captura-de-Pantalla-2024-01-13-a-las-14-47-34.png',
  'https://i.postimg.cc/wB3tHL5q/Captura-de-Pantalla-2024-01-13-a-las-14-47-46.png',
];

const selectedImage = ref('');
const nameOptions = {
  0: 'Marcos',
  1: 'Gemma',
  2: 'Aaron',
  3: 'Dani',
};

const openImageDialog = async () => {
  const { value: selectedName } = await Swal.fire({
    title: 'Select Your Profile Image',
    inputOptions: nameOptions,
    imageUrl: imageOptions[2], // Imagen por defecto para el nombre seleccionado

    imageAlt: 'User profile image',
    input: 'select',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    confirmButtonText: 'Select',
    preConfirm: (selectedName) => {
      // Set the selected image URL based on the selected name
      selectedImage.value = imageOptions[nameOptions[selectedName]];
      selectedImage.value = imageOptions[2];
    },
  });

  // mirar si se cambia el valor del path de la imagen
  console.log("path de la imagen", selectedImage.value);

  if (selectedName !== undefined) {
    console.log('Selected Name:', selectedName);
    console.log('Selected Image:', selectedImage.value);
  }
};


const isValidSignUp = () => isValidEmail() && isPasswordValid();

const getValuePassword = (event) => {
  password.value = event;
};

const getValueConfirmPassword = (event) => {
  confirmPassword.value = event;
};

const getValueEmail = (event) => {
  email.value = event;
};

const postData = async () => {
  console.log('Entering postData');
  const endpoint = 'players';

  const data = {
    player_ID: email.value,
    password: password.value,
    img: selectedImage.value,
  };


  try {
    const api = new ApiClient();
    const response = await api.post(endpoint, data);
    console.log('Successfully created. Status code:', response.status);
  } catch (error) {
    console.error('Error during the request:', error);
  }
};

// eslint-disable-next-line no-unused-vars
const isValidEmail = () => email.value.includes('@') && email.value.includes('.com');
const isPasswordValid = () => password.value === confirmPassword.value;
</script>

<template>
  <div class="login_and_signUp-container" style="margin-bottom: 5rem">
    <h1 class="title">Welcome to Dungeon Clash</h1>

    <div class="form_container">
      <h2 class="login_and_signUp">Sign Up</h2>

      <button style="background-color: transparent" @click="openImageDialog">
        <img src="../assets/images/userProfile.png" style="max-width: 7rem" alt="User profile image.">
      </button>

      <div class="login_and_signUp_form-group">
        <label for="email">Email:</label>
        <MySecondComponent v-on:data="getValueEmail" placeHolder="example@gmail.com" type="text"/>
      </div>

      <div class="login_and_signUp_form-group">
        <label for="password">Password:</label>
        <MySecondComponent v-on:data="getValuePassword" placeHolder="password" type="password"/>
      </div>

      <div class="login_and_signUp_form-group">
        <label for="confirm-password">Confirm Password:</label>
        <MySecondComponent v-on:data="getValueConfirmPassword" placeHolder="password" type="password"/>
      </div>

      <div class="buttons_login_and_signUp">
        <router-link id="login-button" type="submit" to="/" class="router-link">Login</router-link>
        <router-link id="register-button" :to="isValidSignUp() ? '/player-info' : '/sign-up'" class="router-link" @click="postData()">
          Create account
        </router-link>

      </div>

      <p v-if="password !== confirmPassword || !isValidEmail()" class="error-message">
        {{ isValidEmail() ? 'Passwords do not match.' : 'Invalid email address.' }}
      </p>

    </div>
  </div>


  <footer>
    <p>Created by Marcos Ruiz-Flores, Aaron Fort and Gemma Yebra.</p>
  </footer>
</template>


<style scoped>
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
