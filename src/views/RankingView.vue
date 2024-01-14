<script setup>
import { ref, onMounted } from 'vue';
import { ApiClient } from '@/assets/ApiClient';

// Define a reactive reference for players
const players = ref([]);

// Initialize the API client
const api = new ApiClient();

// Fetch players when the component is mounted
onMounted(async () => {
  try {
    const playersEndpoint = '/players';
    const playersResponse = await api.get(playersEndpoint, "46679998-2095-4a74-a1e6-6ca67be66f43");

    players.value = playersResponse;

    players.value.sort((b, a) => a.coins - b.coins);
  } catch  {
    // Error cannot be shown in console.
  }
});
</script>

<template>
  <div class="container">
    <h1 class="title white-text">Leaderboard</h1>
    <div class="players-list">
      <div class="player-item" v-for="(player, index) in players" :key="index">
        <router-link :to="{ name: 'stats', params: { playerID: player.player_ID } }">
          <div class="player-info">
            <div class="player-rank">{{ index + 1 }}</div>
            <div class="player-details">
              <div class="player-name">{{ player.player_ID }}</div>
              <div class="player-level">Level {{ player.coins }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="back-button">
      <router-link class="red_button" to="/list-players">Back</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 100%;
  margin: 0 20px;
}

.title {
  color: white;
}

.white-text {
  color: white;
}
.players-list {
  width: 100%;
  max-width: 600px;
}

.player-item {
  background-color: #ffffcc;
  border-radius: 10px;
  margin: 10px 0;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.player-item:hover {
  transform: scale(1.05);
}

.player-info {
  display: flex;
  align-items: center;
}

.player-rank {
  font-size: 1.5em;
  font-weight: bold;
  color: #9d9d9d;
  margin-right: 15px;
}

.player-details {
  text-align: left;
}

.player-name {
  font-size: 1.2em;
  font-weight: bold;
  color: #2c3e50;
}

.player-level {
  color: #e67e22;
}

.back-button {
  margin-top: 20px;
}

.red_button {
  background-color: #e74c3c;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.red_button:hover {
  background-color: #c0392b;
}
</style>
