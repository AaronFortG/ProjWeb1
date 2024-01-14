<script setup>
import { inject, onMounted, ref } from 'vue'
import { ApiClient } from '../assets/ApiClient'
import { useRoute } from 'vue-router'

const api = new ApiClient();

// Get the user's credentials from the Singletone.
const token = inject('token');
const logsList = ref([]);
const arenaID = ref('');
const arenaInfo = ref('');

const route = useRoute();

// Run the code when the component is mounted
onMounted(async () => {
  try {
    // Access the parameter value from the route
    arenaID.value = route.params.arenaID;

    // Get the information from the arena (size and logs).
    arenaInfo.value = await api.get(`/arenas/${arenaID.value}`, token);
    logsList.value = await api.get(`/arenas/${arenaID.value}/logs`, token);
  } catch (error) {
    console.error('Error fetching player information:', error);
  }
});

// Get the date from the log with format 'DD-MM-YYYY HH:MM:SS'
function formatDate(dateString) {
  const dateObject = new Date(dateString);

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour format
  };

  const formattedDate = new Intl.DateTimeFormat('default', options).format(dateObject);

  return formattedDate;
}
</script>

<template>
  <div id="container">
    <RouterLink to="/filter-arenas" class="red_button" id="back_button">Back</RouterLink>

    <section>
      <h1 class="title">Game Logs</h1>

<!--      <h2>Arena name: "{{ arenaInfo.game_ID }}" -  Grid Size: {{ arenaInfo.size }} x {{ arenaInfo.size }} - HP Max: {{ arenaInfo.HP_max }}</h2>-->

      <section class="arena-info">
        <h2>Arena name: "{{ arenaInfo.game_ID }}"</h2>
        <span class="separator">-</span>
        <h2>Grid Size: {{ arenaInfo.size }} x {{ arenaInfo.size }}</h2>
        <span class="separator">-</span>
        <h2>HP Max: {{ arenaInfo.HP_max }}</h2>
      </section>

      <p v-for="(log, index) in logsList" v-bind:key="index">[ {{ formatDate(log.date_time) }} ] - {{ log.description }}</p>
    </section>
  </div>
</template>

<style scoped>
#container {
  margin: 3rem 2rem 2rem;
}

h1 {
  margin: 3rem 0 3rem 0;
}

p {
  color: white;
}

/* Alinear els dos paràgrafs */
h2 {
  font-weight: bolder;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

#grid-size p:first-child {
  margin-right: 1rem;
}

p {
  padding-bottom: 1rem;
  line-height: 1.5rem;
}

.arena-info {
  display: flex;
  flex-direction: column; /* Vertical display */
}

.separator {
  display: none;
}

@media (min-width: 768px) {
  .arena-info {
    flex-direction: row; /* Horizontal display */
  }

  .arena-info h2 {
    margin-right: 20px;
  }

  .separator {
    margin: 0 2rem 1rem 1rem; /* Spacing for the separator */
    color: white;
    font-weight: bolder;
    font-size: 1.5rem;
    display: inline;
  }
}
</style>
