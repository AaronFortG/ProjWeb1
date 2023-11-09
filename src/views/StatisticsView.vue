import {RouterLink} from "vue-router";
<script setup>

</script>
<template>
  <div class="container">
    <div class="header">
      <div class="header-title">
        <h1 class="title">Name Player</h1>
      </div>
      <div class="header-buttons-container">
        <button>Back</button>
      </div>
    </div>
    <div class="content-container">
      <div class="column-1">
        <p class="Victorys">Victories</p>
        <p class="Losses">Losses</p>
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
    <button class="main-button">Last Games</button>

  </div>
</template>


<style scoped>

</style>