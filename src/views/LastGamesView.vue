<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1 class="title">Last games</h1>
    <div v-for="(game, index) in games" :key="index" class="game-container">
      <hr class="separator" />
      <div class="info_player-1">
        <p>Player1: {{ game.player1.name }}</p>
        <p>Victory / Loss: {{ game.player1.result }}</p>
        <p>Attacks: {{ game.player1.attacks }}</p>
      </div>
      <hr class="separator" />

      <div class="info_player-2">
        <p>Player2: {{ game.player2.name }}</p>
        <p>Victory / Loss: {{ game.player2.result }}</p>
        <p>Attacks: {{ game.player2.attacks }}</p>
      </div>
      <hr class="separator" />
    </div>
    <div class="separator"></div>
    <router-link class="register-button" to="/stats">Back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          player1: { name: 'Player1', result: 'Victory', attacks: 'principal attack' },
          player2: { name: 'Player2', result: 'Loss', attacks: 'principal attack' }
        },
        {
          player1: { name: 'Player1', result: 'Victory', attacks: 'principal attack' },
          player2: { name: 'Player2', result: 'Loss', attacks: 'principal attack' }
        },
        {
          player1: { name: 'Player1', result: 'Victory', attacks: 'principal attack' },
          player2: { name: 'Player2', result: 'Loss', attacks: 'principal attack' }
        },
        {
          player1: { name: 'Player1', result: 'Victory', attacks: 'principal attack' },
          player2: { name: 'Player2', result: 'Loss', attacks: 'principal attack' }
        },
        {
          player1: { name: 'Player1', result: 'Victory', attacks: 'principal attack' },
          player2: { name: 'Player2', result: 'Loss', attacks: 'principal attack' }
        }
        // el resto de juegos que vengan de la API
      ]
    }
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.game-container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
}

p {
  margin: 10px 0;
  color: black;
}

.separator {
  border: 3px solid #ffc107;
  margin: 20px 20px;
  height: 10px;
  width: 100%;
}

.router-link {
  text-align: center;
  margin-top: 20px;
}

.register-button {
  padding: 10px 20px;
  background-color: #da4e39;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 20%;
  margin: 0 auto;
  display: block;
}

.info_player-1,
.info_player-2 {
  background-color: #ffc;
  padding: 25px;
  border-radius: 30px;
  color: #333333;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}
</style>
