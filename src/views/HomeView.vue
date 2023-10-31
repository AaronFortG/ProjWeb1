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
  grid-template-rows: 1fr 2fr;
  grid-gap: 50px; /* Espacio entre elementos */
  padding: 0 40px;
}

@media (min-width: 600px) {
  .big_container {
    grid-gap: 100px;
  }
}

</style>
