<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ApiClient } from '@/assets/ApiClient';
import { inject } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const api = new ApiClient();

const gameData = ref(null);  // Datos de la partida
const arenaID = ref(null);   // ID de la partida
const playerData = ref(null);  // Datos del jugador

let intervalId;       // ID del intervalo

// Hide the vertical menu.
const updateShowVerticalMenu = inject('updateShowVerticalMenu');
updateShowVerticalMenu(false);

// Const to get the ID of the arena
const route = useRoute();
const router = useRouter();

const token = inject('token');
const playerID = inject('playerID');

let x_game;
let y_game;

// *** METHODS ***
onMounted(async () => {
  arenaID.value = route.params.arenaID;
  console.log(arenaID.value);
  try {
    const id = arenaID.value;
    const response = await api.get(`/arenas/${id}`, token);
    gameData.value = response;

    // Obtener los datos del jugador actualizado
    const playerResponse = await api.get('/players/arenas/current', token);
    playerData.value = playerResponse[0];

    x_game = playerData.value?.players_games[0]?.x_game;
    y_game = playerData.value?.players_games[0]?.y_game;

    console.log("X: ", x_game);
    console.log("Y: ", y_game);
    console.log(gameData.value);
    checkIfGameFinished();

  } catch (error) {
    console.error('Error fetching game data:', error);
    alert(error);
  }
});

const leaveGame = async() => {
  try {
    const id = arenaID.value;
    const response = await api.delete(`/arenas/${id}/play`, token);
    gameData.value = response;

    console.log(gameData.value);


  } catch (error) {
    console.error('Error fetching game data:', error);
    alert(error);
  }
}

const checkIfGameFinished = async () => {
  // Almacenar el ID del intervalo en la variable de referencia
  intervalId = setInterval(async () => {
    try {
      // Verificar si el juego ha terminado
      if (gameData.value.finished === true) {
        clearInterval(intervalId);
        console.log("JUEGO TERMINADO");
        router.push('/player-info');
      }
    } catch (error) {
      console.error('Error al obtener los datos del jugador:', error);
      alert(error);
    }
  }, 1000); // Actualizar cada 1000 milisegundos
}

onUnmounted(() => clearInterval(intervalId)); // Detener el intervalo cuando se desmonte el componente

</script>

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
      <div>
        <img src="../assets/images/game/full-heart.png" alt="heart" width="30" style="margin-right: 5px;" />
        <img src="../assets/images/game/full-heart.png" alt="heart" width="30" style="margin-right: 5px;"/>
        <img src="../assets/images/game/half-heart.png" alt="heart" width="30" style="margin-right: 5px;"/>
        <img src="../assets/images/game/empty-heart.png" alt="heart" width="30" />
      </div>
    </div>

    <!-- Create: the game board -->
    <div class="board-game" v-if="playerData">
      <div v-for="(row, rowIndex) in gameData.size" :key="rowIndex" class="row">
        <div v-for="(cell, colIndex) in gameData.size" :key="colIndex">
          <!-- Verificar si la celda coincide con la posición del jugador -->
          <img
            v-if="x_game === colIndex && y_game === rowIndex"
            src="../assets/images/coin.png" :alt="`Player`"
          />
          <!-- Si no, muestra la imagen de suelo -->
          <img
            v-else
            src="../assets/images/game/floor_1.png" :alt="`Cell ${rowIndex}-${colIndex}`"
          />
        </div>
      </div>
    </div>

    <!-- Create: player's (2) name and his life -->
    <div class="player-info" id="players2">
      <p>Player name</p>
      <div>
        <img src="../assets/images/game/full-heart.png" alt="heart" width="30" style="margin-right: 5px;"/>
        <img src="../assets/images/game/full-heart.png" alt="heart" width="30" style="margin-right: 5px;"/>
        <img src="../assets/images/game/half-heart.png" alt="heart" width="30" style="margin-right: 5px;"/>
        <img src="../assets/images/game/empty-heart.png" alt="heart" width="30" style="margin-right: 5px;" />
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

    <button class="red_button" @click="() => leaveGame()"> Leave match </button>
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
  justify-content: center;
  margin: 1rem auto;
}

.row {
  display: flex;
  flex-direction: row;
}

.row img {
  width: 30px;
  height: 30px;
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
    grid-template-columns: repeat(3, 1fr); /* 3 columnas del mismo tamaño */
    gap: 1rem;
  }
  .player-info {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
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
    display: flex;
    grid-column: 2 / 2;
    grid-row: 2 / 2;
  }

  .row img {
    width: 3rem;
    height: 3rem;
  }

  .rows_together_container {
    display: flex;
    grid-column: 1 / 4;
    grid-row: 2 / 2;
    justify-content: space-between;
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
    max-height: 4rem;
    grid-column: 2 / 2;
    grid-row: 1 / 1;
  }

  .keys_container img {
    min-width: 70px;
  }
}
</style>
