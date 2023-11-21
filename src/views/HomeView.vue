<script setup>
import { RouterLink } from 'vue-router'
import MainButton from "@/components/MainButton.vue";
</script>

<template>
  <div class="big_container">
    <h1 class="title">Dungeon Clash</h1>
    <div class="buttons_container">
      <RouterLink to="/create-arena" class="router-link main-button"> Create match </RouterLink>

      <RouterLink to="/join-arena" class="router-link main-button"> Join match </RouterLink>

      <RouterLink to="/player-info" class="router-link main-button">
        Player information
      </RouterLink>

      <RouterLink to="/store" class="router-link main-button"> Store </RouterLink>

      <RouterLink to="/list-players" class="router-link main-button"> Ranking </RouterLink>

      <RouterLink to="/" class="router-link main-button"> Log out</RouterLink>
      <MainButton link="/player-info" text="Log Out" padding="2rem 2rem"></MainButton>
    </div>
  </div>
</template>
