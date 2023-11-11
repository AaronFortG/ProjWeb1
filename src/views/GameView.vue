<script setup>
import '../assets/game.css';
</script>

<script>
  function setButtonState(buttonId, isPressed) {
    const button = document.getElementById(buttonId);
    if (isPressed) {
      button.style.backgroundColor = '#d0d0d0'; // Change color when pressed
    } else {
      button.style.backgroundColor = ''; // Restore color when not pressed
    }
  }

  document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37: // Arrow Left
        setButtonState('arrowLeftButton', true);
        break;
      case 38: // Arrow Up
        setButtonState('arrowUpButton', true);
        break;
      case 39: // Arrow Right
        setButtonState('arrowRightButton', true);
        break;
      case 40: // Arrow Down
        setButtonState('arrowDownButton', true);
        break;
      case 32: // Key Space
        setButtonState('spaceKeyButton', true);
        break;
    }
  });

  document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
      case 37: // Arrow Left
        setButtonState('arrowLeftButton', false);
        break;
      case 38: // Arrow Up
        setButtonState('arrowUpButton', false);
        break;
      case 39: // Arrow Right
        setButtonState('arrowRightButton', false);
        break;
      case 40: // Arrow Down
        setButtonState('arrowDownButton', false);
        break;
      case 32: // Key Space
        setButtonState('spaceKeyButton', false);
        break;
    }
  });
</script>


<template>

  <div class="game_container">
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
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
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
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
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
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
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
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
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
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
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
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
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
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
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
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
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
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
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
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
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
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor"></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right"></td>
      </tr>

      <!-- Last row -->
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up"></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right"></td>
      </tr>
    </table>

    <!-- Create: player's (2) name and his life -->
    <div class="player-info" id="players2">
      <p>Player name</p>
      <section class="rows_together_container">
        <img src="../assets/images/game/full-heart.png" alt="heart" width="30">
        <img src="../assets/images/game/full-heart.png" alt="heart" width="30">
        <img src="../assets/images/game/half-heart.png" alt="heart" width="30">
        <img src="../assets/images/game/empty-heart.png" alt="heart" width="30">
      </section>
    </div>

    <!-- The attacks and keys -->
    <div class="rows_together_container">

      <section id="attacks">
        <article>Attacflajlfasdljflsjlfjdlfjlsjdlkfjak 1</article>
        <article>Attack 2</article>
        <article>Attack 3</article>
      </section>

      <section class="keys_container">
        <button class="arrow-left" id="arrowLeftButton">
          <img src="../assets/images/game/arrow-left.png" alt="arrow-left" width="30">
        </button>
        <button class="arrow-up" id="arrowUpButton">
          <img src="../assets/images/game/arrow-up.png" alt="arrow-up" width="30">
        </button>
        <button class="arrow-down" id="arrowDownButton">
          <img src="../assets/images/game/arrow-down.png" alt="arrow-down" width="30">
        </button>
        <button class="arrow-right" id="arrowRightButton">
          <img src="../assets/images/game/arrow-right.png" alt="arrow-right" width="30">
        </button>

        <button class="space-key" id="spaceKeyButton">
          <img src="../assets/images/game/space-key.png" alt="space-key" width="30">
        </button>
      </section>

    </div>

    <button class="red_button">
      <RouterLink to="/home">
        Leave match
      </RouterLink>
    </button>


  </div>
</template>

<style scoped>

</style>