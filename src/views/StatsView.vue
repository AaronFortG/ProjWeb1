
<script setup>

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
          <button class="red_button">Back</button>
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
  .container {
    text-align: center;
    margin: 10px;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
  }

  .header-title {
    margin-bottom: 10px;
  }

  .header-buttons-container {
    background-color: #2F2F2F;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 1.0s ease;
    margin-top: 10px;
  }

  .header-buttons-container:hover {
    background-color: #28A745;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .column-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: #181414;
    margin-bottom: 20px;
  }

  .column-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: blueviolet;
  }

  .last_games {
    width: 100%;
    height: 40px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }

  .progress-bar {
    position: relative;
    width: 100%;
    height: 80px; /* Reducido el tamaño de las redondas de porcentaje */
    border-radius: 50%;
    background-color: #f0f0f0;
    margin: 10px 0;
    overflow: hidden;
  }

  .progress {
    position: absolute;
    width: 100%;
    height: 100%;
    clip: rect(0, 100px, 100px, 50px);
    border-radius: 100%;
    background-color: #28A745;
    transform-origin: bottom right;
  }

  .progress-victories {
    transform: rotate(0deg);
    background-color: #28A745;
  }

  .progress-losses {
    transform: rotate(360deg);
    background-color: #DA4E39;
  }

  .Victorys {
    color: #28A745;
    font-size: 16px;
    font-weight: bold;
  }

  .Losses {
    color: #DA4E39;
    font-size: 16px;
    font-weight: bold;
  }

  .Winrate {
    color: #FFC107;
    font-size: 16px;
    font-weight: bold;
  }

  .Partidas {
    color: #007BFF;
    font-size: 16px;
    font-weight: bold;
  }

  .Favorite {
    color: blueviolet;
    font-size: 16px;
    font-weight: bold;
  }
</style>