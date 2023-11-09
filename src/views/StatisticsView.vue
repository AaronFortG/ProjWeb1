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
    <div class="grid-container">
      <div class="column">
        <p class="Victorys">Victories</p>
        <p class="Losses">Losses</p>
        <p class="Winrate">Winrate</p>
        <p class="Partidas">Total Games</p>
        <h1 class="main Attacks">Main Attacks</h1>
        <p class="main attack 1">Attack 1</p>
        <p class="main attack 2">Attack 2</p>
        <p class="main attack 3">Attack 3</p>
        <p class="Favorite champ">Favorite Champion</p>
      </div>
      <button>Last Games</button>
    </div>
  </div>
</template>

<style scoped>

</style>