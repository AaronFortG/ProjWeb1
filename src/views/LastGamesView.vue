<script setup>
import { ref, onMounted } from 'vue';
import { ApiClient } from '@/assets/ApiClient';
import { useRoute } from 'vue-router';

const games = ref([]);
const route = useRoute();
const playerID = ref('');
const finishedGames = ref([]);

const formatDate = (rawDate) => {
  const date = new Date(rawDate);
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

onMounted(async () => {
  try {
    const api = new ApiClient();
    playerID.value = route.params.playerID;

    const finishedGamesResponse = await api.get(`/players/${playerID.value}/games/finished`, "46679998-2095-4a74-a1e6-6ca67be66f43");
    finishedGames.value = finishedGamesResponse;


    if (finishedGames.value && finishedGames.value.length > 0) {
      const lastTwoGames = finishedGames.value.slice(0, 5);

      games.value = [];
      for (const game of lastTwoGames) {
        games.value.push({
          player1: {
            player_ID: game.players_games[0].player_ID,
            winner: game.players_games[0].winner,
            xp_win: game.players_games[0].xp_win,
            coins_win: game.players_games[0].coins_win,
            date: formatDate(game.creation_date),
          },
          player2: {
            player_ID: game.players_games[1].player_ID,
            winner: game.players_games[1].winner,
            xp_win: game.players_games[1].xp_win,
            coins_win: game.players_games[1].coins_win,
            date: formatDate(game.creation_date),
          }
        });
      }

    }
  } catch  {
    // Error cannot be shown in console.
  }
});
</script>

<template>
  <div>
    <h1 class="title">Last games</h1>
    <div v-for="(game, index) in games" :key="index" class="game-container">
      <hr class="separator" />
      <div class="info_player">
        <p class="gray-text">Player1:</p>
        <p>{{ game.player1.player_ID }}</p>
        <p class="gray-text"> Victory / Loss:</p>
        <p>{{ game.player1.winner }}</p>
        <p class="gray-text">Attacks:</p>
        <p>{{ game.player1.xp_win }}</p>
        <p class="gray-text">Date:</p>
        <p> {{ game.player1.date }}</p>
      </div>
      <hr class="separator" />

      <div class="info_player">
        <p class="gray-text">Player2:</p>
        <p>{{ game.player2.player_ID }}</p>
        <p class="gray-text">Victory / Loss:</p>
        <p>{{ game.player2.winner }}</p>
        <p class="gray-text"> Attacks:</p>
        <p>{{ game.player2.xp_win }}</p>
        <p class="gray-text">Date:</p>
        <p>{{ game.player2.date }}</p>
      </div>
      <hr class="separator" />
    </div>
    <div class="back-button">
      <router-link class="main-button red_button" to="/player-info">Back</router-link>
    </div>
  </div>
</template>

<style scoped>
.gray-text {
  color: #e67e22;
}

.game-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
}

.back-button {
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
  order: -1;
}

.separator {
  border: 3px solid #ffc107;
  margin: 20px 20px;
  height: 10px;
  width: 100%;
}

.info_player p {
  margin-bottom: 1rem;
}

.info_player {
  background-color: #ffc;
  padding: 1rem;
  width: 50rem;
  text-align: center;
  border-radius: 30px;
  color: #333333;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);

  .main-button {
    text-align: center;
    padding: 10px;
  }
}
</style>
