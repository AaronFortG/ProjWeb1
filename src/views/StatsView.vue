<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
  mounted() {
    this.$root.$data.showVerticalMenu = false;
  },
}
</script>

<template>
  <div class="container">
    <div class="back-button">
      <router-link class="red_button" to="/list-players">Back</router-link>
    </div>

    <h1 class="title" style="margin-bottom: 2rem">Stats</h1>

    <h2>Name Player</h2>

    <div class="content-container">
      <section class="column-1">
        <article>
          <p class="victories">Victories</p>
          <div class="progress-bar">
            <div
              :style="`transform: rotate(${victoriesPercentage}deg)`"
              class="progress progress-victories"
            ></div>
          </div>
        </article>

        <article>
          <p class="losses">Losses</p>
          <div class="progress-bar">
            <div
              :style="`transform: rotate(${lossesPercentage}deg)`"
              class="progress progress-losses"
            ></div>
          </div>
        </article>

        <article>
          <p class="win-rate">Winrate 50%</p>
          <p class="total-games">Total Games: 10 games</p>
          <p class="favorite champ">Favorite Champion LeBlanc</p>
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
      <router-link class="main-button" to="/last-games">Last Games</router-link>
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

p {
  color: white;
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
  background-color: #181414;
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
  background-color: #28a745;
  transform-origin: bottom right;
}

.progress-victories {
  transform: rotate(0deg);
  background-color: #28a745;
}

.progress-losses {
  transform: rotate(360deg);
  background-color: #da4e39;
}

.victories {
  color: #28a745;
  font-size: 16px;
  font-weight: bold;
}

.losses {
  color: #da4e39;
  font-size: 16px;
  font-weight: bold;
}

.win-rate {
  color: #ffc107;
  font-size: 16px;
  font-weight: bold;
}

.total-games {
  color: #007bff;
  font-size: 16px;
  font-weight: bold;
}

.favorite {
  color: darkviolet;
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
