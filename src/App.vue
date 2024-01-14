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
  playerID.value = localStorage.getItem('playerID') || '';
};

// Allow provide() to get the updated value using onBeforeMounted().
onMounted(() => {
  getLocalStorageData();

  provide('token', playerToken.value);
  provide('playerID', playerID.value);
});

// Function to update the global variable
const updateToken = (newToken, newPlayerID) => {
  playerToken.value = newToken;
  playerID.value = newPlayerID;
  localStorage.setItem('token', newToken);
  localStorage.setItem('playerID', newPlayerID);
  console.log("Token updated!");
  // Provide the updated values to the components

  provide('token', playerToken.value);
  provide('playerID', playerID.value);
};

//provide('updateToken', updateToken);
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
  <RouterView />
  <HorizontalMenuComponent v-if="showVerticalMenu" />
</template>

<style scoped></style>
