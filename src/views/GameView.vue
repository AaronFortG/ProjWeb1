<script setup></script>

<script>
function setButtonState(buttonId, isPressed) {
  const button = document.getElementById(buttonId)
  if (isPressed) {
    button.style.backgroundColor = '#d0d0d0' // Change color when pressed
  } else {
    button.style.backgroundColor = '' // Restore color when not pressed
  }
}

document.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 37: // Arrow Left
      setButtonState('arrowLeftButton', true)
      break
    case 38: // Arrow Up
      setButtonState('arrowUpButton', true)
      break
    case 39: // Arrow Right
      setButtonState('arrowRightButton', true)
      break
    case 40: // Arrow Down
      setButtonState('arrowDownButton', true)
      break
    case 32: // Key Space
      setButtonState('spaceKeyButton', true)
      break
  }
})

document.addEventListener('keyup', function (event) {
  switch (event.keyCode) {
    case 37: // Arrow Left
      setButtonState('arrowLeftButton', false)
      break
    case 38: // Arrow Up
      setButtonState('arrowUpButton', false)
      break
    case 39: // Arrow Right
      setButtonState('arrowRightButton', false)
      break
    case 40: // Arrow Down
      setButtonState('arrowDownButton', false)
      break
    case 32: // Key Space
      setButtonState('spaceKeyButton', false)
      break
  }
})
// Deshabilitar el botón de retroceso
history.pushState(null, null, document.URL)
window.addEventListener('popstate', function () {
  history.pushState(null, null, document.URL)
})
</script>

<template>
  <div class="game_container">
    <!-- Create: player's (1) name and his life -->
    <div class="player-info">
      <p>Player name</p>
      <div class="rows_together_container">
        <img src="../assets/images/game/full-heart.png" alt="heart" width="30" />
        <img src="../assets/images/game/full-heart.png" alt="heart" width="30" />
        <img src="../assets/images/game/half-heart.png" alt="heart" width="30" />
        <img src="../assets/images/game/empty-heart.png" alt="heart" width="30" />
      </div>
    </div>

    <!-- Create: the game board -->
    <table class="board-game">
      <tr>
        <td><img src="../assets/images/game/wall_outer_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall_outer_right.png" alt="Wall right" /></td>
      </tr>
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_spikes_anim_f3.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_spikes_anim_f3.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/floor_1.png" alt="Floor" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>

      <!-- Last row -->
      <tr>
        <td><img src="../assets/images/game/wall_outer_mid_left.png" alt="Wall left" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall-up-game.png" alt="Wall up" /></td>
        <td><img src="../assets/images/game/wall_outer_mid_right.png" alt="Wall right" /></td>
      </tr>
    </table>

    <!-- Create: player's (2) name and his life -->
    <div class="player-info" id="players2">
      <p>Player name</p>
      <div class="rows_together_container">
        <img src="../assets/images/game/full-heart.png" alt="heart" width="30" />
        <img src="../assets/images/game/full-heart.png" alt="heart" width="30" />
        <img src="../assets/images/game/half-heart.png" alt="heart" width="30" />
        <img src="../assets/images/game/empty-heart.png" alt="heart" width="30" />
      </div>
    </div>

    <!-- The attacks and keys -->
    <div class="rows_together_container">
      <section id="attacks">
        <h2>Attacflajlfasdljflsjlfjdlfjlsjdlkfjak 1</h2>
        <h2>Attack 2</h2>
        <h2>Attack 3</h2>
      </section>

      <div class="keys_container">
        <button class="arrow-left" id="arrowLeftButton">
          <img src="../assets/images/game/arrow-left.png" alt="arrow-left" width="30" />
        </button>
        <button class="arrow-up" id="arrowUpButton">
          <img src="../assets/images/game/arrow-up.png" alt="arrow-up" width="30" />
        </button>
        <button class="arrow-down" id="arrowDownButton">
          <img src="../assets/images/game/arrow-down.png" alt="arrow-down" width="30" />
        </button>
        <button class="arrow-right" id="arrowRightButton">
          <img src="../assets/images/game/arrow-right.png" alt="arrow-right" width="30" />
        </button>

        <button class="space-key" id="spaceKeyButton">
          <img src="../assets/images/game/space-key.png" alt="space-key" width="30" />
        </button>
      </div>
    </div>

    <RouterLink to="/home" class="red_button"> Leave match </RouterLink>
  </div>
</template>

<style scoped>
p,
h2 {
  color: white;
}
.rows_together_container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.rows_together_container img {
  margin: 0 2px;
}

.player-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.board-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
}

td {
  width: 30px;
  height: 30px;
  position: relative;
}

td img {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;
}

.game_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
}

.red_button {
  margin: 0 auto;
}

.keys_container button {
  background: none;
  border: none;
}

#attacks {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#attacks h2 {
  max-width: 7rem;
  padding: 0.5rem;
  margin: 0.5rem 0;
  background-color: #483b3a;
  text-align: center;
  white-space: nowrap; /* Evitar que el text es divideixi en més línies */
  overflow: hidden; /* Oculta el text que no cap */
  text-overflow: ellipsis; /* Afageix punts suspensius (...) al final del text */
}

.keys_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #483b3a;
  width: 100vh;
  max-width: 12rem;
  margin: 1rem 0;
}

.keys_container img {
  min-width: 50px;
}

.arrow-left {
  grid-column: 1 / 2;
  grid-row: 2 / 2;
}

.arrow-up {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.arrow-down {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.arrow-right {
  grid-column: 3 / 4;
  grid-row: 2 / 2;
}

.space-key {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  margin-top: 10px;
}

.space-key img {
  width: 100%;
}

@media (min-width: 980px) {
  .game_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .player-info {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    align-items: start;
    max-width: 20rem;
  }
  .player-info img {
    width: 3rem;
    flex-flow: column wrap;
  }
  .player-info p {
    max-width: 25rem;
    font-size: 2rem;
    white-space: nowrap; /* Evitar que el text es divideixi en més línies */
    overflow: hidden; /* Oculta el text que no cap */
    text-overflow: ellipsis; /* Afageix punts suspensius (...) al final del text */
  }
  #players2 {
    grid-column: 3 / 3;
    grid-row: 1 / 3;
    margin-left: auto;
  }

  .board-game {
    margin-top: 14rem;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    min-width: 20rem;
  }

  .rows_together_container {
    grid-column: 1 / 4; /* Ocupa des de la columna 1 fins la columna 4 (3 columnes) */
    grid-row: 2 / 2; /* Ocupa la fila 2 */
  }
  .rows_together_container .keys_container {
    margin: auto 0 0 auto;
  }
  .rows_together_container #attacks {
    margin: auto auto 0 0;
  }
  .rows_together_container #attacks h2 {
    max-width: 14rem;
  }
  .red_button {
    max-height: 5rem;
    grid-column: 2 / 3;
    grid-row: 1 / 1;
  }

  .keys_container img {
    min-width: 70px;
  }
}
</style>
