<script setup>
  import { RouterView } from 'vue-router'
  import HorizontalMenuComponent from "@/components/HorizontalMenuComponent.vue";
  import { ref, onMounted } from 'vue';


  const token = ref('');


  // Función para obtener datos del localStorage
  const getLocalStorageData = () => {
    // Obtener el token
    token.value = localStorage.getItem('token') || '';
  };

  // Llamar a la función al montar el componente
  onMounted(() => {
    getLocalStorageData();
  });
  // Patrons Vue -> observer (quan canvia una cosa de l'element observat, els observadors reven el canvi) + singleton (punt únic de consulta de dades de l'app).
  // Framework reactiu = tots els elements tenen la base de dades dins de la vista; quan es modifica, la vista canvia.
</script>

<script>
  import VerticalMenuComponent from "@/components/VerticalMenuComponent.vue";

  export default {
    data() {
      return {
        showVerticalMenu: false
      };
    },
    components: {
      VerticalMenuComponent,
    },
  };
</script>

<template>
  <vertical-menu-component v-if="showVerticalMenu"/>
  <RouterView/>
  <horizontal-menu-component v-if="showVerticalMenu"/>
</template>

<style scoped></style>
