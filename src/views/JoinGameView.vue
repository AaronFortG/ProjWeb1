<script setup>
import { computed, onMounted, ref } from 'vue'
import { ApiClient } from '../assets/ApiClient'
import ArenaComponent from '../components/ArenaComponent.vue'
import { useRouter } from 'vue-router'

const showPopUp = ref(false);
const selectedArena = ref(null);
const router = useRouter();

// Show the popup to join an arena.
const showJoinArenaPopUp = (arena_ID) => {
  selectedArena.value = arena_ID;
  showPopUp.value = true;
};

// Hide the popup of the join.
const hidePopUp = () => {
  showPopUp.value = false;
};

// Get the user's credentials from the Singleton.
const token = window.localStorage.getItem('token');

// Join the arena.
const joinArena = (arena_ID) => {

  api.post(`arenas/${arena_ID}/play`, null, token)
    .then(() => {
      router.push(`/game/${arena_ID}`);
    })
    .catch((error) => {
      alert(error);
    });

  hidePopUp();
};

const handleNoClick = () => {
  hidePopUp();
};

const api = new ApiClient();

const gamesList = ref([]);
onMounted(async () => {
  try {
    gamesList.value = await api.get('/arenas/', token);
  } catch (error) {
    // Error cannot be shown in console.
  }
});

// Computed property to filter out finished arenas
const unfinishedArenas = computed(() => {
  return gamesList.value.filter(arena => !arena.start);
});

// Get the date with format 'DD/MM/YYYY' given the response from the API.
function formatDate(inputDateString) {
  const dateObject = new Date(inputDateString);

  const day = String(dateObject.getDate()).padStart(2, '0');
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = dateObject.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

</script>

<template>
  <header class="header-buttons-container">
    <p></p>
    <router-link to="/filter-arenas" class="main-button" id="filter-button"
      >Filter Arenas</router-link
    >
  </header>

  <section style="margin-bottom: 5rem">
    <h1 class="title">Join an arena</h1>
    <p id="arena-join-description">Right click an arena to join it.</p>

    <section id="available-arenas">
      <ArenaComponent v-for="arena in unfinishedArenas" v-bind:key="arena.game_ID" v-bind:name=arena.game_ID v-bind:size=arena.size v-bind:creation-date=formatDate(arena.creation_date) v-bind:hp=arena.HP_max v-bind:started=arena.start v-bind:finished=arena.finished v-on:click="() => showJoinArenaPopUp(arena.game_ID)"></ArenaComponent>
    </section>
  </section>

  <div id="popUp" class="popUp" v-show="showPopUp">
    <p class="popUp-question"><b>Are you sure you want to join the arena "{{ selectedArena }}"?</b></p>
    <p @click="joinArena(selectedArena)">Join arena</p>
    <p @click="handleNoClick">Cancel</p>
  </div>
</template>

<style scoped>
.header-buttons-container {
  display: flex;
  justify-content: space-between;
  margin: 2rem;
  position: sticky;
  background-color: #2f2f2f;
  top: 0;
  min-height: 3rem;
}

h1.title {
  margin-bottom: 2rem;
}

#filter-button {
  margin-bottom: 0;
  width: auto;
  padding: 1rem;
}

section {
  margin: 1rem 1rem 1rem 2rem;
}

section#available-arenas {
  margin-left: 0;
}

#arena-join-description {
  color: white;
  margin-bottom: 2rem;
}

@media (min-width: 1000px) {
  #available-arenas {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
  }

  section {
    margin-left: 4rem;
  }
}
</style>
