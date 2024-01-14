<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import { ApiClient } from '@/assets/ApiClient';

const token = window.localStorage.getItem('token');
const playerID = ref('');
const gamesPlayed = ref(0);
const gamesWon = ref(0);
const winPercentage = ref(0);
const lossPercentage = ref(0);
const attacks = ref([]);

const route = useRoute();

onMounted(async () => {
  try {
    // Accede al parámetro a través de route.params.playerID
    playerID.value = route.params.playerID;

    const api = new ApiClient();
    const response = await api.get(`players/${playerID.value}/statistics`, token);

    gamesWon.value = response.games_won;
    gamesPlayed.value = response.games_played;

    winPercentage.value = (gamesWon.value / gamesPlayed.value) * 100;
    lossPercentage.value = (gamesPlayed.value - gamesWon.value) / gamesPlayed.value * 100;

    // Obtener los ataques y asignarlos a la variable de referencia attacks
    attacks.value = await api.get(`players/${playerID.value}/attacks`, token);

  } catch {
    // Error cannot be shown in console.
  }
});
</script>

<template>
  <div class="container">
    <h1 class="title" style="margin-bottom: 2rem">Stats</h1>

    <h2 style="color: lightblue;">Name Player: {{ playerID }}</h2>

    <div class="content-container">
      <section class="column-1">
        <article>
          <p class="victories">Victories</p>
          <div class="progress-bar">
            <div class="progress progress-victories" :style="{ width: `${winPercentage}%`, backgroundColor: '#28a745' }"></div>
          </div>
        </article>

        <article>
          <p class="losses">Losses</p>
          <div class="progress-bar">
            <div class="progress progress-losses" :style="{ width: `${lossPercentage}%`, backgroundColor: '#da4e39' }"></div>
          </div>
        </article>

        <article>
          <p class="win-rate" style="margin-bottom: 10px; color: #ffc107;">Winrate {{ winPercentage.toFixed(2) }}%</p>
          <p class="total-games" style="margin-bottom: 10px; color: #007bff;">Total Games: {{ gamesPlayed }} games</p>
        </article>
      </section>

      <h2>Main Attacks</h2>
      <div class="column-2">
        <p class="attack" v-for="(attack, index) in attacks.slice(0, 3)" :key="index" style="margin-bottom: 10px;">
          <span style="color: white;">Attack ID: {{ attack.attack_ID }}</span>,
          <span style="color: green;">Power: {{ attack.power }}</span>
        </p>
      </div>
    </div>
    <p class="last_games">
      <router-link class="main-button" :to="{ name: 'last-games', params: { playerID: playerID.value } }">Last Games</router-link>
    </p>

  </div>

  <div class="back-button">
    <router-link class="red_button" to="/list-players">Back</router-link>
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
  padding-top: 20px;
  margin-bottom: 20px;
  order: -1;
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
  margin-bottom: 45px;
  min-width: 17rem;
  margin-left: auto;
  margin-right: auto;
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 10px 0;
  overflow: hidden;
}

.progress {
  position: absolute;
  height: 100%;
  border-radius: 10px;
}

.progress-victories {
  background-color: #28a745;
}

.progress-losses {
  background-color: #da4e39;
}
</style>
