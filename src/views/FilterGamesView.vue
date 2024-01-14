<script setup>
import { ref, onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import { ApiClient } from '../assets/ApiClient'
import ArenaComponent from '../components/ArenaComponent.vue'

const showPopUp = ref(false)
const router = useRouter()

const navigateLogs = () => {
  router.push('/game-logs/007')  // TODO: adjust based on the chosen game.
}

const showPopUpMethod = () => {
  showPopUp.value = true
}

const hidePopUp = () => {
  showPopUp.value = false
}

const handleYesClick = () => {
  alert('Join arena')
  hidePopUp()
}

const handleNoClick = () => {
  hidePopUp()
}

const api = new ApiClient();
const token = inject('token');
const gamesList = ref([]);

onMounted(async () => {
  try {
    gamesList.value = await api.get('arenas/', token);
  } catch (error) {
    console.error('Error fetching player information:', error);
  }
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
  <header class="header-buttons-container" id="center-button">
    <RouterLink to="/join-arena" class="red_button" id="back-button">Back</RouterLink>
  </header>

  <h1 class="title">Filter arenas</h1>

  <form id="arena-filters">
    <div>
      <label for="arena-filter-selector">Filter by arena Status</label>
      <select id="arena-filter-selector">
        <option value="Available" selected>Available</option>
        <option value="Finished">Finished</option>
        <option value="Available and Finished">Available and Finished</option>
      </select>
    </div>

    <div>
      <label for="arena-search-input">Filter by arena ID</label>
      <input id="arena-search-input" type="text" placeholder="Arena ID" />
    </div>

    <div>
      <label for="date-range-input">Filter by date range</label>
      <input type="text" name="date-range" id="date-range-input" value="11/10/2023 - 11/12/2023" />
    </div>
  </form>

  <p class="arena-join-description">Click an available arena to join it.</p>
  <p class="arena-join-description">Click a finished arena to view its logs.</p>

  <section>
    <ArenaComponent v-for="arena in gamesList" v-bind:key="arena.game_ID" v-bind:name=arena.game_ID v-bind:size=arena.size v-bind:creation-date=formatDate(arena.creation_date) v-bind:hp=arena.HP_max></ArenaComponent>
  </section>

  <div id="popUp" class="popUp" v-show="showPopUp">
    <p class="popUp-question"><b>Are you sure you want to join the game?</b></p>
    <p @click="handleYesClick">Join arena</p>
    <p @click="handleNoClick">Cancel</p>
  </div>
</template>

<style scoped>
.header-buttons-container {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  position: sticky;
  background-color: #2f2f2f;
  top: 0;
}

h1.title {
  margin-bottom: 2rem;
}

section {
  margin: 2rem;
}

h2 {
  font-size: 1rem;
}

.arena-join-description {
  color: white;
  margin-bottom: 1rem;
  margin-left: 2rem;
}

@media (min-width: 1000px) {
  section {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
  }
}

#center-button {
  justify-content: center;
}

form#arena-filters {
  margin-left: 2rem;
  margin-right: 2rem;
}

label {
  color: white;
}

form select,
form input {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  margin-right: 2rem;
  padding: 1rem;
  box-sizing: border-box; /* Fer que l'element no sobresurti de la pantalla */
  width: 100%;
}

p {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

@media (min-width: 1000px) {
  form {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
  }

  form div {
    flex: 1;
    min-width: 20rem;
  }
}
</style>
