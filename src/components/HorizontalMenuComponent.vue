<script setup>

import {RouterLink} from "vue-router";
import { inject } from 'vue'

const updateToken = inject('updateToken');
</script>

<template>
  <body>
  <nav class="mobile-nav">
    <router-link to="/create-arena" class="bloc-icon">
      <img src="../assets/images/menu/tab.png" alt="">
    </router-link>

    <router-link to="/store" class="bloc-icon">
      <img src="../assets/images/menu/store.png" alt="">
    </router-link>

    <router-link to="/join-arena" class="bloc-icon">
      <img src="../assets/images/menu/join.png" alt="">
    </router-link>

    <router-link to="/player-info" class="bloc-icon">
      <img src="../assets/images/menu/user.png" alt="">
    </router-link>

    <router-link to="/list-players" class="bloc-icon">
      <img src="../assets/images/menu/ranking.png" alt="">
    </router-link>

    <router-link to="/" class="bloc-icon" v-on:click="updateToken('', '')">
      <img src="../assets/images/menu/turn-off.png" alt="">
    </router-link>
  </nav>
  </body>
</template>

<style scoped>

.mobile-nav {
  background: #F1F1F1;
  position: fixed;
  bottom: 0;
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.bloc-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bloc-icon img {
  width: 30px;
}

@media (min-width: 600px) {
  .mobile-nav {
    display: none;
  }
}
</style>