<script setup>
import { ref, onMounted, provide } from 'vue';
import { RouterView } from 'vue-router'
import HorizontalMenuComponent from "@/components/HorizontalMenuComponent.vue";

const playerToken = ref('');
const playerID = ref('');
const showVerticalMenu = ref(false);

// Function to enable the visibility of the vertical menu in another view.
const updateShowVerticalMenu = (value) => {
  showVerticalMenu.value = value;
};

provide('updateShowVerticalMenu', updateShowVerticalMenu);

// Function to get data from localStorage
const getLocalStorageData = () => {
  playerToken.value = localStorage.getItem('token') || '';
};

// Allow provide() to get the updated value using onBeforeMounted().
onMounted(() => {
  getLocalStorageData();
  updateToken("b9936a38-c0b4-4e13-ab82-630724b68a59", "aaronElMejor");

  // Provide the variable to the components
  provide('token', playerToken.value);
  provide('playerID', playerID.value);
});

// Function to update the global variable
const updateToken = (newToken, newPlayerID) => {
  playerToken.value = newToken;
  playerID.value = newPlayerID;
};
</script>

<script>
import VerticalMenuComponent from './components/VerticalMenuComponent.vue'

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
  <VerticalMenuComponent v-if="showVerticalMenu" />
  <RouterView :updateToken="updateToken" />
  <HorizontalMenuComponent v-if="showVerticalMenu" />
</template>

<style scoped></style>
