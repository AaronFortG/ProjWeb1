<script setup>
import MySecondComponent from '../components/MySecondComponent.vue'
</script>

<template>
  <div class="big_container">
    <p class="title"> Dungeon Clash </p>
    <div class="buttons_container"> 
      <button> Create match </button>
      <button> Join match </button>
      <button> Player information </button>
      <button> Store </button>
      <button> Log out </button>
    </div> 
  </div>
</template>

<style scoped>
.big_container {
  display: grid;
  justify-content: center; /* Alinea los elementos horizontalmente en el centro */
  align-items: center;    /* Alinea los elementos verticalmente en el centro */
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 100px; /* Espacio entre elementos */
  padding: 0 40px;
}



</style>
