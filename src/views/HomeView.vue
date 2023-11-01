<script setup>
import MySecondComponent from '../components/MySecondComponent.vue'
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="big_container">
    <p class="title"> Dungeon Clash </p>
    <div class="buttons_container"> 

      <RouterLink to="/createMatch" class="router-link">
        <button class="main-button"> Create match </button>
      </RouterLink>

      <RouterLink to="/joinMatch">
      <button class="main-button"> Join match </button>
      </RouterLink>

      <RouterLink to="/playerInfo">
      <button class="main-button"> Player information </button>
      </RouterLink>

      <RouterLink to="/store">
      <button class="main-button"> Store </button>
      </RouterLink>

      <RouterLink to="/logout">
      <button class="main-button"> Log out </button>
      </RouterLink>

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
