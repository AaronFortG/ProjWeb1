<script setup>
import { RouterLink } from "vue-router";
import '../assets/games.css'
</script>

<template>
  <div>
    <h1 class="title">Last games</h1>
    <div v-for="(game, index) in games" :key="index" class="game-container">
      <hr class="separator">
      <div class="info_player-1">
        <p>Player1: {{ game.player1.name }}</p>
        <p>Victory / Loss: {{ game.player1.result }}</p>
        <p>Attacks: {{ game.player1.attacks }}</p>
      </div>
      <hr class="separator">

      <div class="info_player-2">
        <p>Player2: {{ game.player2.name }}</p>
        <p>Victory / Loss: {{ game.player2.result }}</p>
        <p>Attacks: {{ game.player2.attacks }}</p>
      </div>
      <hr class="separator">
    </div>
    <div class="separator"></div>
    <RouterLink to="/stats" class="router-link">
      <button class="register-button" @click="back">Back</button>
    </RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          player1: { name: 'Player1', result: 'Victory', attacks: 'principal attack' },
          player2: { name: 'Player2', result: 'Loss', attacks: 'principal attack' },
        },
        {
          player1: { name: 'Player1', result: 'Victory', attacks: 'principal attack' },
          player2: { name: 'Player2', result: 'Loss', attacks: 'principal attack' },
        },
        {
          player1: { name: 'Player1', result: 'Victory', attacks: 'principal attack' },
          player2: { name: 'Player2', result: 'Loss', attacks: 'principal attack' },
        },
        {
          player1: { name: 'Player1', result: 'Victory', attacks: 'principal attack' },
          player2: { name: 'Player2', result: 'Loss', attacks: 'principal attack' },
        },
        {
          player1: { name: 'Player1', result: 'Victory', attacks: 'principal attack' },
          player2: { name: 'Player2', result: 'Loss', attacks: 'principal attack' },
        },
        // el resto de juegos que vengan de la API
      ],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>