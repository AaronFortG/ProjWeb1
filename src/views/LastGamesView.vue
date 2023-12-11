<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1 class="title">Last games</h1>
    <div v-for="(game, index) in games" :key="index" class="game-container">
      <hr class="separator" />
      <div class="info_player">
        <p>Player1: {{ game.player1.name }}</p>
        <p>Victory / Loss: {{ game.player1.result }}</p>
        <p>Attacks: {{ game.player1.attacks }}</p>
      </div>
      <hr class="separator" />

      <div class="info_player">
        <p>Player2: {{ game.player2.name }}</p>
        <p>Victory / Loss: {{ game.player2.result }}</p>
        <p>Attacks: {{ game.player2.attacks }}</p>
      </div>
      <hr class="separator" />
    </div>
    <div class="separator"></div>
    <router-link class="red_button register-button" to="/stats">Back</router-link>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$root.$data.showVerticalMenu = false;
  },
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
}
</style>
