<script setup>
import '../assets/game.css';
</script>

<template>

  <!-- Create: player's (1) name and his life -->
  <div class="player-info">
    <p>Player name</p>
    <section class="rows_together_container">
      <img src="../assets/images/game/full-heart.png" alt="heart" width="30">
      <img src="../assets/images/game/full-heart.png" alt="heart" width="30">
      <img src="../assets/images/game/half-heart.png" alt="heart" width="30">
      <img src="../assets/images/game/empty-heart.png" alt="heart" width="30">
    </section>
  </div>

  <!-- Create: the game board -->
  <table class="board-game">
    <tr>
      <td><img src="../assets/images/game/wall_outer_left.png" alt="Wall left"></td>
      <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
      <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
      <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
      <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
      <td><img src="../assets/images/game/wall_outer_right.png" alt="Wall right"></td>
    </tr>
    <tr>
      <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left"></td>
      <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
      <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
      <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
      <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
      <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right"></td>
    </tr>
    <tr>
      <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left"></td>
      <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
      <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
      <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
      <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
      <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right"></td>
    </tr>
    <tr>
      <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left"></td>
      <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
      <td><img src="../assets/images/game/floor_spikes_anim_f3.png" alt="Floor"></td>
      <td><img src="../assets/images/game/floor_spikes_anim_f3.png" alt="Floor"></td>
      <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
      <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right"></td>
    </tr>
  </table>

  <!-- Create: player's (2) name and his life -->
  <div class="player-info">
    <p>Player name</p>
    <section class="rows_together_container">
      <img src="../assets/images/game/full-heart.png" alt="heart" width="30">
      <img src="../assets/images/game/full-heart.png" alt="heart" width="30">
      <img src="../assets/images/game/half-heart.png" alt="heart" width="30">
      <img src="../assets/images/game/empty-heart.png" alt="heart" width="30">
    </section>
  </div>
</template>

<style scoped>

</style>