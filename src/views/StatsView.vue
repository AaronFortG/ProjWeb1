
<script setup>

import '../assets/stats.css'
import {RouterLink} from "vue-router";

</script>
<template>
  <div class="container">
    <div class="header">
      <div class="header-title">
        <h1 class="title">Name Player</h1>
      </div>
      <div class="header-buttons-container">
        <RouterLink to="/list-players" class="router-link">
        <button>Back</button>
        </RouterLink>
      </div>
    </div>
    <div class="content-container">
      <div class="column-1">


        <p class="Victorys">Victories</p>
        <div class="progress-bar">
          <div :style="`transform: rotate(${victoriesPercentage}deg)`" class="progress progress-victories"></div>
        </div>

        <p class="Losses">Losses</p>
        <div class="progress-bar">
          <div :style="`transform: rotate(${lossesPercentage}deg)`" class="progress progress-losses"></div>
        </div>

        <p class="Winrate">Winrate</p>
        <p class="Partidas">Total Games</p>
        <p class="Favorite champ">Favorite Champion</p>
      </div>

      <div class="column-2">
        <h1 class="title">Main Attacks</h1>
        <p class="attack">Attack 1</p>
        <p class="attack">Attack 2</p>
        <p class="attack">Attack 3</p>
      </div>
    </div>

    <div class="last_games">
      <RouterLink to="/last-games" class="router-link">
        <button class="main-button">Last Games</button>
      </RouterLink>
    </div>
  </div>
</template>



<style scoped>

</style>