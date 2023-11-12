<script setup>

import {RouterLink} from "vue-router";

</script>

<template>
  <div class="big_container">
    <h1 class="title"> Dungeon Clash </h1>
    <div class="buttons_container"> 

      <RouterLink to="/create-arena" class="router-link">
        <button class="main-button"> Create match </button>
      </RouterLink>

      <RouterLink to="/join-arena">
      <button class="main-button"> Join match </button>
      </RouterLink>

      <RouterLink to="/player-info">
      <button class="main-button"> Player information </button>
      </RouterLink>

      <RouterLink to="/store">
      <button class="main-button"> Store </button>
      </RouterLink>

      <RouterLink to="/list-players">
        <button class="main-button">Ranking</button>
      </RouterLink>

      <RouterLink to="/">
      <button class="main-button"> Log out </button>
      </RouterLink>

    </div> 
  </div>
</template>
