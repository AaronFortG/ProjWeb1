<script setup>
import { RouterLink } from 'vue-router'
import MySecondComponent from "@/components/InputComponent.vue";
</script>

<template>
  <div class="login_and_signUp-container" style="margin-bottom: 5rem">
    <h1 class="title">Welcome to Dungeon Clash</h1>

    <div class="form_container">
      <h2 class="login_and_signUp">Sign Up</h2>

      <button style="background-color: transparent">
        <img src="../assets/images/userProfile.png" style="max-width: 7rem">
      </button>
      <div class="login_and_signUp_form-group">
        <label for="email">Email:</label>
        <MySecondComponent placeHolder="example@gmail.com" type="text"/>
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
        <router-link id="login-button" type="submit" to="/" class="router-link" @click="postData()">Login</router-link>
        <router-link id="register-button" to="/player-info" class="router-link">Create account</router-link>
      </div>

      <p v-if="password !== confirmPassword" class="error-message">Passwords do not match.</p>
    </div>
  </div>


  <footer>
    <p>Created by Marcos Ruiz-Flores, Aaron Fort and Gemma Yebra.</p>
  </footer>
</template>

<script>
import { ApiClient } from '@/assets/ApiClient'; // Adjust the path accordingly

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    getValuePassword(event) {
      this.password = event;
    },
    getValueConfirmPassword(event) {
      this.confirmPassword = event;
    },
    async postData() {
      const endpoint = 'players';
      const data = {
        player_ID: 'srfoxtest6',
        password: 'srfoxtest6',
        img: 'srfoxtest6',
      };

      try {
        const api = new ApiClient();
        const response = await api.post(endpoint, data);

        if (response.status === 201) {
          console.log('Successfully created. Status code:', response.status);
          // Redirect to the home page or perform other actions on success
        } else if (response.status === 400) {
          const errorData = await response.json();
          console.error('Error:', errorData.error);
        } else {
          console.error('Unexpected status code:', response.status);
        }
      } catch (error) {
        console.error('Error during the request:', error);
      }
    },
  },
};
</script>

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
