<script setup>
  import { RouterView } from 'vue-router'
  import HorizontalMenuComponent from "@/components/HorizontalMenuComponent.vue";
  // Patrons Vue -> observer (quan canvia una cosa de l'element observat, els observadors reven el canvi) + singleton (punt únic de consulta de dades de l'app).
  // Framework reactiu = tots els elements tenen la base de dades dins de la vista; quan es modifica, la vista canvia.
</script>

<script>
  import VerticalMenuComponent from "@/components/VerticalMenuComponent.vue";
  import LoginView from "@/views/LoginView.vue";

  export default {
    data() {
      return {
        showVerticalMenu: false
      };
    },
    components: {
      VerticalMenuComponent,
      LoginView,
    },
  };
</script>

<template>
  <vertical-menu-component v-if="showVerticalMenu"/>
  <RouterView/>
  <horizontal-menu-component v-if="showVerticalMenu"/>
</template>

<style scoped></style>
