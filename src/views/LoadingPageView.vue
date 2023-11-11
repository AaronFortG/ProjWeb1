<script setup>
import { onMounted } from 'vue';
import router from "@/router";
/*
onMounted(() => {
  // Espera 10 segons i llavors va a GameView
  setTimeout(() => {
    router.push('/game');
  }, 3000);
});*/
</script>


<template>
  <div class="big_container">
    <h1 class="title">Loading...</h1>
    <p style="text-align: center; color: white">Waiting for someone to join</p>
  </div>

</template>

<style scoped>

</style>