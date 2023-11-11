<script setup>
import router from "@/router";

onMounted(() => {
  // Espera 10 segons i llavors va a GameView.
  // Quan treballem amb l'API haurem de fer que es vagi reiniciant el temps fins que algú s'uneixi a la partida.
  setTimeout(() => {
    router.push('/game');
  }, 10000);
});

import { ref, onMounted } from 'vue';

const progressBarValue = ref(0);

const updateProgressBar = () => {
  setInterval(() => {
    if (progressBarValue.value < 100) {
      progressBarValue.value += 1;
    } else {
      clearInterval(); // Detener el intervalo si se alcanza el 100%
    }
  }, 100); // Actualizar cada 100 milisegundos (ajusta según tus necesidades)
};

onMounted(() => {
  updateProgressBar();
});
</script>

<style>
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

<template>
  <div class="loading_container">
    <h1 class="title">Loading...</h1>
    <p>Waiting for someone to join</p>
    <progress id="file" :value="progressBarValue" max="100" > </progress>
  </div>

</template>

<style scoped>

</style>