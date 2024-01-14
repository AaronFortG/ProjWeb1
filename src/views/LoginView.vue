<script setup>
import { ref } from 'vue';
import MySecondComponent from "@/components/InputComponent.vue";
import { ApiClient } from "@/assets/ApiClient";
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();
const players = ref([]);

const getPlayer = (event) => {
  email.value = event;
};

const getPassword = (event) => {
  password.value = event;
};

const postData = async () => {

  const endpoint = 'players';

  try {
    const api = new ApiClient();
    const response = await api.get(endpoint, "46679998-2095-4a74-a1e6-6ca67be66f43");
    players.value = response;


    // Realizar la comparación con el player_ID introducido
    const myPlayerID = email.value;

    let matchFound = false;

    for (const player of players.value) {
      if (player.player_ID === myPlayerID) {
        matchFound = true;
        break;
      }
    }

    if (matchFound) {
      router.push('/player-info');
    }
  } catch {
    // Error cannot be shown in console.
  }
};

// eslint-disable-next-line no-unused-vars
const showVerticalMenu = ref(false);

// eslint-disable-next-line no-unused-vars

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
        <button @click="postData" id="login-button" class="router-link">Login</button>
        <router-link to="/sign-up" id="register-button" class="router-link">Sign Up</router-link>
      </div>
    </div>
  </div>

  <footer>
    <p>Created by Marcos Ruiz-Flores, Aaron Fort and Gemma Yebra.</p>
  </footer>
</template>
