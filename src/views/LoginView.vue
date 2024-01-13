<script setup>
import { RouterLink } from 'vue-router'
import MySecondComponent from "@/components/InputComponent.vue";
</script>

<template>
  <div class="login_and_signUp-container" style="margin-bottom: 5rem">
    <h1 class="title">Welcome to Dungeon Clash</h1>

    <div class="form_container">
      <h2 class="login_and_signUp">Log in</h2>

      <div class="login_and_signUp_form-group ">
        <label for="email">Email:</label>
        <MySecondComponent v-on:data="getPlayer" placeHolder="example@gmail.com" type="text"/>
      </div>


      <div class="login_and_signUp_form-group">
        <label for="password">Password:</label>
        <MySecondComponent v-on:data="getPassword" placeHolder="password" type="password"/>
      </div>

      <div class="buttons_login_and_signUp">
        <router-link id="login-button" type="submit" to="/player-info" class="router-link">Login</router-link>

        <router-link to="/sign-up" id="register-button" class="router-link">Sign Up</router-link>
      </div>
    </div>
  </div>

  <footer>
    <p>Created by Marcos Ruiz-Flores, Aaron Fort and Gemma Yebra.</p>
  </footer>
</template>

<script>
import {ApiClient} from "@/assets/ApiClient";

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    getPlayer(event){
      this.player = event;
    },
    getPassword(event){
      this.password = event;
    },

    async postData() {
      console.log('Entering postData');
      const endpoint = 'players';

      try {
        const api = new ApiClient();
        const response = await api.get(endpoint, null);

        console.log('Successfully obtained player data. Status code:', response.status);

        // Realizar la comparación con el player_ID introducido
        const myPlayerID = this.player; // Reemplaza con tu variable
        const matchingPlayers = response.data.filter(player => player.player_ID === myPlayerID);

        if (matchingPlayers.length > 0) {
          console.log('El player_ID introducido coincide con uno de los jugadores obtenidos:', matchingPlayers[0]);
        } else {
          console.log('El player_ID introducido no coincide con ninguno de los jugadores obtenidos.');
        }

      } catch (error) {
        console.error('Error during the request:', error);
      }
    },

    // ... Otros métodos ...
  },
  mounted() {
    this.$root.$data.showVerticalMenu = false;
  },
}
</script>

