<script setup>
import MySecondComponent from '../components/MySecondComponent.vue'
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="big_container">
    <h1 class="title"> Dungeon Clash </h1>
    <div class="buttons_container"> 

      <RouterLink to="/create-arena" class="router-link">
        <button class="main-button"> Create match </button>
      </RouterLink>

      <RouterLink to="/joinMatch">
      <button class="main-button"> Join match </button>
      </RouterLink>

      <RouterLink to="/player-info">
      <button class="main-button"> Player information </button>
      </RouterLink>

      <RouterLink to="/shop">
      <button class="main-button"> Store </button>
      </RouterLink>

      <RouterLink to="/logout">
      <button class="main-button"> Log out </button>
      </RouterLink>

    </div> 
  </div>
</template>
