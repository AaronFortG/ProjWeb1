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
const playerID_2 = ref(null);

const x_game_P1 = ref(null);
const x_game_P2 = ref(null);
const y_game_P1 = ref(null);
const y_game_P2 = ref(null);

// ** Const to get the HP of the players **
// Player 1
const hp1 = ref(null);
const initialHP1 = ref(null);
// Player 2
const hp2 = ref(null);
const initialHP2 = ref(null);


// Const to know the direction of the player
const currentDirection = ref(null);


// *** METHODS ***
onMounted(async () => {
  arenaID.value = route.params.arenaID;
  console.log(arenaID.value);
  currentDirection.value = 'down';
  console.log (currentDirection.value);

  try {
    const id = arenaID.value;
    const response = await api.get(`/arenas/${id}`, token);
    gameData.value = response;
    console.log(gameData.value);
    checkIfGameFinished();

    // Save the initial HP of the players
    initialHP1.value = hp1.value;
    initialHP2.value = hp2.value;

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
      // Obtener los datos del jugador actualizado
      const playerResponse = await api.get('/players/arenas/current', token);
      playerData.value = playerResponse[0];

      for (let i = 0; i < playerData.value.players_games.length; i++) {
        if (playerData.value.players_games[i].player_ID === playerID) {
          // Get the position of the player
          x_game_P1.value = playerData.value.players_games[i].x_game;
          y_game_P1.value = playerData.value.players_games[i].y_game;

          // Get the HP of the player
          hp1.value = playerData.value.players_games[i].hp;
        } else {
          // Get the position of the player
          x_game_P2.value = playerData.value.players_games[i].x_game;
          y_game_P2.value = playerData.value.players_games[i].y_game;
          playerID_2.value = playerData.value.players_games[i].player_ID;

          // Get the HP of the player
          hp2.value = playerData.value.players_games[i].hp;
          break;
        }
      }

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

const setButtonState = (buttonId, isPressed) => {
  const button = document.getElementById(buttonId)
  if (isPressed) {
    button.style.backgroundColor = '#d0d0d0' // Change color when pressed
  } else {
    button.style.backgroundColor = '' // Restore color when not pressed
  }
}

const moveDirection = async (movement) => {
  try {
    // Verifica si la dirección actual es diferente de la dirección solicitada
    if (currentDirection.value === movement) {
      const moveData = {
        direction: movement
      };

      const response = await api.post(`/arenas/direction`, moveData, token);
      console.log(response.value);

      movePosition(movement);
    }
    // Actualiza la dirección actual
    currentDirection.value = movement;
  } catch (error) {
    console.error('Error fetching game data:', error);
    alert(error);
  }
}

const movePosition = async (movement) => {
  try {
    const moveData = {
      movement: movement
    };

    const response = await api.post(`/arenas/move`, moveData, token);
    console.log(response.value);

  } catch (error) {
    console.error('Error fetching game data:', error);
    alert(error);
  }
}

document.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 37: // Arrow Left
      setButtonState('arrowLeftButton', true);
      moveDirection('left');
      break
    case 38: // Arrow Up
      setButtonState('arrowUpButton', true);
      moveDirection('up');
      break
    case 39: // Arrow Right
      setButtonState('arrowRightButton', true);
      moveDirection('right');
      break
    case 40: // Arrow Down
      setButtonState('arrowDownButton', true);
      moveDirection('down');
      break
    case 32: // Key Space
      setButtonState('spaceKeyButton', true);
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

const generateHeartIndices1 = () => {
  const heartsCount = Math.min(5, Math.ceil((hp1.value / initialHP1.value) * 5));
  return Array.from({ length: heartsCount }, (_, index) => index);
};

const generateHeartIndices2 = () => {
  const heartsCount = Math.min(5, Math.ceil((hp2.value / initialHP2.value) * 5));
  return Array.from({ length: heartsCount }, (_, index) => index);
};

onUnmounted(() => clearInterval(intervalId)); // Detener el intervalo cuando se desmonte el componente


</script>

<script>

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
      <p>{{playerID}}</p>
      <div>
        <!-- Lógica para mostrar corazones según el número de vidas -->
        <img v-for="heartIndex in generateHeartIndices1()" :key="heartIndex" src="../assets/images/game/full-heart.png" alt="heart" width="30" style="margin-right: 5px;" />
      </div>
    </div>

    <!-- Create: the game board -->
    <div class="board-game" v-if="playerData">
      <div v-for="(row, rowIndex) in gameData.size" :key="rowIndex" class="row">
        <div v-for="(cell, colIndex) in gameData.size" :key="colIndex">
          <!-- Verificar si la celda coincide con la posición del jugador -->
          <img
            v-if="x_game_P1 === colIndex && y_game_P1 === rowIndex && currentDirection === 'up'"
            src="../assets/images/game/player1_up.png"
            :alt="`Player1 up`"
          />
          <img
            v-else-if="x_game_P1 === colIndex && y_game_P1 === rowIndex && currentDirection === 'down'"
            src="../assets/images/game/player1_down.png"
            :alt="`Player1 down`"
          />
          <img
            v-else-if="x_game_P1 === colIndex && y_game_P1 === rowIndex && currentDirection === 'left'"
            src="../assets/images/game/player1_left.png"
            :alt="`Player1 left`"
          />
          <img
            v-else-if="x_game_P1 === colIndex && y_game_P1 === rowIndex && currentDirection === 'right'"
            src="../assets/images/game/player1_right.png"
            :alt="`Player1 right`"
          />

          <img
            v-else-if="x_game_P2 === colIndex && y_game_P2 === rowIndex "
            src="../assets/images/game/player2.png" :alt="`Player2`"
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
      <p>{{playerID_2}}</p>
      <div>
        <!-- Lógica para mostrar corazones según el número de vidas -->
        <img v-for="heartIndex in generateHeartIndices2()" :key="heartIndex" src="../assets/images/game/full-heart.png" alt="heart" width="30" style="margin-right: 5px;" />
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
