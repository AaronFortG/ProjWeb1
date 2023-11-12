
<script setup>

import {RouterLink} from "vue-router";

</script>

<template>
  <div class="container">
    <div class="back-button">
      <RouterLink to="/list-players" class="router-link">
        <button class="red_button">Back</button>
      </RouterLink>
    </div>

    <h1 class="title" style="margin-bottom: 2rem">Stats</h1>

    <h2>Name Player</h2>

    <div class="content-container">
      <section class="column-1">
        <article>
          <p class="victories">Victories</p>
          <div class="progress-bar">
            <div :style="`transform: rotate(${victoriesPercentage}deg)`" class="progress progress-victories"></div>
          </div>
        </article>

        <article>
          <p class="losses">Losses</p>
          <div class="progress-bar">
            <div :style="`transform: rotate(${lossesPercentage}deg)`" class="progress progress-losses"></div>
          </div>
        </article>

        <article>
          <p class="win-rate">Winrate</p>
          <p class="total-games">Total Games</p>
          <p class="favorite champ">Favorite Champion</p>
        </article>
      </section>

      <h2>Main Attacks</h2>
      <div class="column-2">
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
    margin: 2rem;
    display: flex;
    flex-direction: column;
  }
  h2 {
    margin-bottom: 1rem;
  }

  .back-button {
    text-align: center;
    margin-bottom: 40px;
    order: -1;
    margin-left: auto;
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
    margin-bottom: 5rem;
  }

  .column-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: blueviolet;
    margin-bottom: 4rem;
  }

  .last_games {
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    min-width: 17rem;
    margin-left: auto;
    margin-right: auto;
  }

  .progress-bar {
    position: relative;
    width: 80px;
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

  .victories {
    color: #28A745;
    font-size: 16px;
    font-weight: bold;
  }

  .losses {
    color: #DA4E39;
    font-size: 16px;
    font-weight: bold;
  }

  .win-rate {
    color: #FFC107;
    font-size: 16px;
    font-weight: bold;
  }

  .total-games {
    color: #007BFF;
    font-size: 16px;
    font-weight: bold;
  }

  .favorite {
    color: blueviolet;
    font-size: 16px;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    .back-button {
      order: 2;
    }
    .column-1 {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .column-1 article:last-child {
      margin-left: 10rem;
      text-align: end;
    }
    .column-1 article:last-child p {
      margin-top: 1rem;
    }
  }

</style>