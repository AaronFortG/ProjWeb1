<script setup>
import router from '@/router'
import { ref, onMounted, inject } from 'vue'
import { ApiClient } from '@/assets/ApiClient'
import { useRoute } from 'vue-router'

// Hide the vertical menu.
const updateShowVerticalMenu = inject('updateShowVerticalMenu');
updateShowVerticalMenu(false);

// *** CONSTANTS ***
const api = new ApiClient();
// API constants
const gameData = ref(null);

const arenaID = ref(null);

// Progress bar
const progressBarValue = ref(0)

const route = useRoute();

const token = window.localStorage.getItem('token');

// *** METHODS ***
onMounted(async () => {
  arenaID.value = route.params.arenaID;

  updateProgressBar()
  try {
    checkIfGameStarted();

  } catch (error) {
    // Error cannot be shown in console.
  }
})

const checkIfGameStarted = async () => {
  setInterval(async () => {
    const id = arenaID.value;
    const response = await api.get(`/arenas/${id}`, token);
    gameData.value = response;

    if (gameData.value.start === true) {
      router.push(`/game/${id}`);
    }
  }, 1000) // Actualizar cada 1000 milisegundos
}

const updateProgressBar = () => {
  setInterval(() => {
    if (progressBarValue.value < 100) {
      progressBarValue.value += 1
    } else {
      progressBarValue.value = 0
    }
  }, 100) // Actualizar cada 100 milisegundos
}

// Deshabilitar el botón de retroceso
history.pushState(null, null, document.URL)
window.addEventListener('popstate', function () {
  history.pushState(null, null, document.URL)
})
</script>

<template>
  <div class="loading_container">
    <h1 class="title">Loading...</h1>
    <p>Waiting for someone to join</p>
    <progress id="file" :value="progressBarValue" max="100"></progress>
  </div>
</template>

<style scoped>
.loading_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loading_container p {
  margin-top: 5rem;
  text-align: center;
  color: white;
}
.loading_container progress {
  width: 70%;
  height: 2rem;
  border-radius: 1rem;
  margin-top: 1rem;
}

progress::-webkit-progress-value {
  background-color: #00d0ff;
}
</style>
