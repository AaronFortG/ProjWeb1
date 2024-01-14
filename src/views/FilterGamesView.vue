<script setup>
import { inject, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ApiClient } from '../assets/ApiClient'
import ArenaComponent from '../components/ArenaComponent.vue'
import 'jquery'; // Import jQuery
import 'moment'; // Import Moment.js
import 'daterangepicker/daterangepicker.css'; // Import Date Range Picker CSS
import 'daterangepicker'; // Import Date Range Picker script

const showPopUp = ref(false);
const router = useRouter();

const navigateLogs = () => {
  router.push('/game-logs/007'); // TODO: adjust based on the chosen game.
}

const showPopUpMethod = () => {
  showPopUp.value = true;
}

const hidePopUp = () => {
  showPopUp.value = false;
}

const handleYesClick = () => {
  alert('Join arena')
  hidePopUp();
}

const handleNoClick = () => {
  hidePopUp();
}

const api = new ApiClient();
const token = inject('token');
const gamesList = ref([]);
const arenaIdFilter = ref('');
const filteredGame = ref(null);
const filtering = ref(false);
const selectedStatus = ref('Available');
const dateRange = ref('05/01/2024 - 14/01/2024'); // Initial date range value

onMounted(async () => {
  try {
    const response = await api.get('arenas', token);
    const allGames = response;
    gamesList.value = filterGamesByStatus(allGames, selectedStatus.value);
  } catch (error) {
    console.error('Error fetching player information:', error);
  }
});

// Watch for changes in arenaIdFilter and fetch arenas when a new value is entered
watch(arenaIdFilter, async (newValue, oldValue) => {
  if (newValue !== oldValue && newValue !== null && newValue !== '') {
    filtering.value = true;
    await fetchArenaById(arenaIdFilter.value);
  } else {
    filtering.value = false;
    filteredGame.value = null;
  }
});

// Filtering the games
function filterGamesByStatus(allGames, status) {
  switch (status) {
    case 'Available':
      return allGames.filter(game => !game.start && !game.finished);
    case 'Playing':
      return allGames.filter(game => game.start && !game.finished);
    case 'Finished':
      return allGames.filter(game => game.finished);
    default:
      return allGames;
  }
}

// Watch for changes in the selected status
watch(selectedStatus, async (newValue, oldValue) => {
  if (newValue !== oldValue) {
    try {
      const response = await api.get('arenas', token);
      gamesList.value = filterGamesByStatus(response, newValue);
    } catch (error) {
      console.error('Error fetching arenas:', error);
    }
  }
});

// Fetch the arena based on the provided arena ID and update filteredGame
async function fetchArenaById(arenaId) {
  try {
    const result = await api.get(`arenas/${arenaId}`, token);
    filteredGame.value = result;
    console.log(result);
  } catch (error) {
    filteredGame.value = null;
  }
}

// Get the date with format 'DD/MM/YYYY' given the response from the API.
function formatDate(inputDateString) {
  const dateObject = new Date(inputDateString);

  const day = String(dateObject.getDate()).padStart(2, '0');
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = dateObject.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

// Watch for changes in arenaIdFilter and fetch arenas when a new value is entered
watch(dateRange, async (newValue, oldValue) => {
  if (newValue !== oldValue && newValue !== null && newValue !== '') {
    const [startDate, endDate] = newValue.split(' - ');
    await fetchArenasByDates(startDate, endDate);
  } else {
    filteredGame.value = null;
  }
});

async function fetchArenasByDates(startDate, endDate) {
  console.log(startDate, endDate);
  try {
    const response = await api.get('arenas', token);
    console.log(response);
    gamesList.value = response.filter(game => {
      const gameDate = formatDate(game.creation_date);
      console.log(gameDate, startDate, endDate)
      return gameDate >= startDate && gameDate <= endDate;
    });
    console.log("stopped filtering");
  } catch (error) {
    console.error('Error fetching arenas:', error);
  }
}

// Lifecycle hook
onMounted(() => {
  // Initialize the date range with custom selections: format 'DD/MM/YYYY'
  $('input[name="date-range"]').daterangepicker({
    opens: 'center',
    locale: {
      format: 'DD/MM/YYYY',
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      daysOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      firstDay: 1,
    },
  }, (start, end) => {
    console.log(start, end);
    dateRange.value = `${start.format('DD/MM/YYYY')} - ${end.format('DD/MM/YYYY')}`;
  });
});
</script>

<template>
  <header class="header-buttons-container" id="center-button">
    <RouterLink to="/join-arena" class="red_button" id="back-button">Back</RouterLink>
  </header>

  <h1 class="title">Filter arenas</h1>

  <form id="arena-filters">
    <div>
      <label for="arena-filter-selector">Filter by arena Status</label>
      <select v-model="selectedStatus" id="arena-filter-selector">
        <option value="Available" selected>Available</option>
        <option value="Playing">Playing</option>
        <option value="Finished">Finished</option>
      </select>
    </div>

    <div>
      <label for="arena-search-input">Filter by arena ID</label>
      <input v-model="arenaIdFilter" id="arena-search-input" type="text" placeholder="Arena ID" />
    </div>

    <div>
      <label for="date-range-input">Filter by date range</label>
      <input v-model="dateRange" type="text" name="date-range" id="date-range-input" />
    </div>
  </form>

  <p class="arena-join-description">Click an available arena to join it.</p>
  <p class="arena-join-description">Click a finished arena to view its logs.</p>

  <section v-if="filtering && filteredGame">
    <ArenaComponent :name="filteredGame.game_ID" :size="filteredGame.size" :creation-date="formatDate(filteredGame.creation_date)" :started="filteredGame.start" :finished="filteredGame.finished" :hp="filteredGame.HP_max"></ArenaComponent>
  </section>

  <section v-if="!filtering">
    <ArenaComponent v-for="arena in gamesList" v-bind:key="arena.game_ID" v-bind:name=arena.game_ID v-bind:size=arena.size v-bind:creation-date=formatDate(arena.creation_date) v-bind:started=arena.start v-bind:finished=arena.finished v-bind:hp=arena.HP_max></ArenaComponent>
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
