<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
import { onMounted } from 'vue'
import $ from 'jquery'

export default {
  setup() {
    onMounted(() => {
      // Initialize the date range picker with 'drops: up'
      $(this.$el).find('input[name="date-range"]').daterangepicker(
        {
          opens: 'center'
        }
        // function (start, end) {}
      )
    })

    return {
      showPopUp: false
    }
  },
  mounted() {
    this.$root.$data.showVerticalMenu = false;
  },
  methods: {
    navigateLogs() {
      this.$router.push('/game-logs/007');  // TODO: falta fer-ho depenent del joc triat.
    },
    showPopUpMethod() {
      this.showPopUp = true
    },
    hidePopUp() {
      this.showPopUp = false
    },
    handleYesClick() {
      alert('Join arena')
      this.hidePopUp()
    },
    handleNoClick() {
      this.hidePopUp()
    }
  }
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
    <article class="arena" @click="navigateLogs">
      <div class="arena-info">
        <h2>Arena #1 - Date:</h2>
        <h2>20/10/2023</h2>
      </div>
      <div class="arena-size">
        <p>Grid size:</p>
        <p>2x2</p>
      </div>
    </article>
    <article class="arena" @click="navigateLogs">
      <div class="arena-info">
        <h2>Arena #2 - Date:</h2>
        <h2>31/10/2023</h2>
      </div>
      <div class="arena-size">
        <p>Grid size:</p>
        <p>3x3</p>
      </div>
    </article>
    <article class="arena" @click="navigateLogs">
      <div class="arena-info">
        <h2>Arena #3 - Date:</h2>
        <h2>05/11/2023</h2>
      </div>
      <div class="arena-size">
        <p>Grid size:</p>
        <p>5x5</p>
      </div>
    </article>
    <article class="arena" @click="navigateLogs">
      <div class="arena-info">
        <h2>Arena #4 - Date:</h2>
        <h2>09/11/2023</h2>
      </div>
      <div class="arena-size">
        <p>Grid size:</p>
        <p>10x10</p>
      </div>
    </article>
    <article class="arena" @click="navigateLogs">
      <div class="arena-info">
        <h2>Arena #5 - Date:</h2>
        <h2>11/11/2023</h2>
      </div>
      <div class="arena-size">
        <p>Grid size:</p>
        <p>8x8</p>
      </div>
    </article>
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

section article {
  background-color: #181414;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

section article p,
section article h2 {
  color: white;
}

section article div.arena-info {
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Espai al costat de la data */
.arena-info h2:last-child {
  margin-left: 0.5rem;
}

/* Espai al costat del grid size */
.arena-size p:last-child {
  margin-left: 0.5rem;
}

section article div.arena-info h2,
section article div.arena-size p {
  display: inline;
}

section article:hover {
  outline: white 1px solid;
}

@media (min-width: 1000px) {
  section {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
  }

  section article.arena {
    flex: 1;
    max-width: 21.5rem;
    min-width: 21.5rem;
    box-sizing: border-box;
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
