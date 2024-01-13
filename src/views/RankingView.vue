<script setup>
import { ref, onMounted } from 'vue';
import { ApiClient } from '@/assets/ApiClient';

const players = ref([]);
const api = new ApiClient();

onMounted(async () => {
  try {
    const playersEndpoint = '/players';
    const playersResponse = await api.get(playersEndpoint, "46679998-2095-4a74-a1e6-6ca67be66f43");

    console.log('Players Response:', playersResponse);


      players.value = playersResponse;


      //const prueba = await api.get(`players/armand/statistics`, "46679998-2095-4a74-a1e6-6ca67be66f43");
      //console.log("prueba de juegos ganados", prueba.games_won);
      // Ordenamos de manera ascendente
      players.value.sort((b, a) => a.coins - b.coins);

      console.log('Players:', players.value);

  } catch (error) {
    console.error('Error fetching players:', error);
  }
});
</script>


<template>
  <div class="container" style="margin-bottom: 5rem">
    <h1 class="title">Ranking</h1>
    <ol id="ListPlayers">
      <li class="player-item" v-for="(player, index) in players" :key="index">
        <router-link :to="'/stats/' + player.player_ID">
          <div class="player-info">
            <div class="player-rank">{{ index + 1 }}</div>
            <div class="player-name">{{ player.player_ID }}</div>
            <div class="player-name">Level: {{ player.coins }}</div>
          </div>
        </router-link>
        <div class="player-bar"></div>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100%;
  margin: 0 20px; /* Establece un margen constante a ambos lados */
}

.player-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 30px auto;
  background-color: #ffffcc;
  padding: 20px;
  border-radius: 5px;
}

.player-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.player-rank {
  margin-right: 0;
  font-weight: bold;
  color: black;
}

.player-name {
  text-align: center;
  padding: 10px;
  color: black;
}

.recent-results {
  display: flex;
  justify-content: center;
}

.result-box {
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border-radius: 4px;
}

#ListPlayers {
  list-style-type: none;
  padding: 10px;
}

.back-button {
  text-align: center;
  margin-top: 2rem; /* Ajusta el margen superior del botón */
  margin-bottom: 40px;
  order: -1;
  margin-left: auto;
}

.victory {
  background-color: #28a745;
}

.defeat {
  background-color: #dc3545;
}

@media (min-width: 768px) {
  .player-item {
    flex-direction: row;
    max-width: 100%; /* Ajusta el ancho máximo al 100% para pantallas más grandes */
  }

  .player-info {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .player-rank {
    margin-bottom: 0;
    margin-right: 20px; /* Ajusta el margen derecho en pantallas más grandes */
    margin-left: 20px; /* Ajusta el margen izquierdo en pantallas más grandes */
  }

  .back-button {
    order: 0;
  }
}
</style>
