<script setup>

import {RouterLink} from "vue-router";
import "../assets/joinArena.css";
import "../assets/filterArenas.css";

</script>

<script>
export default {
  mounted() {
    // Initialize the date range picker with 'drops: up'
    $('input[name="date-range"]').daterangepicker({
      opens: 'center'
    }, function(start, end) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  },
  setup() {},
  data() {
    return {
      showPopUp: false,
    };
  },
  methods: {
    showPopUpMethod() {
      this.showPopUp = true;
    },
    hidePopUp() {
      this.showPopUp = false;
    },
    handleYesClick() {
      alert('Join arena');
      this.hidePopUp();
    },
    handleNoClick() {
      this.hidePopUp();
    },
  }
};
</script>

<template>
  <header class="header-buttons-container" id="center-button">
    <RouterLink to="/join-arena">
      <button class="red_button" id="back-button">Back</button>
    </RouterLink>
  </header>

  <h1 class="title">Filter arenas</h1>
  
  <form id="arena-filters">
    <div>
      <label for="arena-filter-selector">Filter by arena Status</label>
      <select id="arena-filter-selector" required>
        <option value="Available" selected>Available</option>
        <option value="Finished">Finished</option>
        <option value="Available and Finished">Available and Finished</option>
      </select>
    </div>

    <div>
      <label for="arena-search-input">Filter by arena ID</label>
      <input id="arena-search-input" type="text" placeholder="Arena ID">
    </div>

    <div>
      <label for="date-range-input">Filter by date range</label>
      <input type="text" name="date-range" id="date-range-input" value="11/10/2023 - 11/12/2023"/>
    </div>
  </form>

  <p id="arena-join-description">Right click an arena to join it.</p>

  <section>
    <article class="arena" @click="showPopUpMethod">
      <div class="arena-info">
        <h2>Arena #1 - Date: </h2>
        <h2>20/10/2023</h2>
      </div>
      <div class="arena-size">
        <p>Grid size: </p>
        <p>2x2</p>
      </div>
    </article>
    <article class="arena" @click="showPopUpMethod">
      <div class="arena-info">
        <h2>Arena #2 - Date: </h2>
        <h2>31/10/2023</h2>
      </div>
      <div class="arena-size">
        <p>Grid size: </p>
        <p>3x3</p>
      </div>
    </article>
    <article class="arena" @click="showPopUpMethod">
      <div class="arena-info">
        <h2>Arena #3 - Date: </h2>
        <h2>05/11/2023</h2>
      </div>
      <div class="arena-size">
        <p>Grid size: </p>
        <p>5x5</p>
      </div>
    </article>
    <article class="arena" @click="showPopUpMethod">
      <div class="arena-info">
        <h2>Arena #4 - Date: </h2>
        <h2>09/11/2023</h2>
      </div>
      <div class="arena-size">
        <p>Grid size: </p>
        <p>10x10</p>
      </div>
    </article>
    <article class="arena" @click="showPopUpMethod">
      <div class="arena-info">
        <h2>Arena #5 - Date: </h2>
        <h2>11/11/2023</h2>
      </div>
      <div class="arena-size">
        <p>Grid size: </p>
        <p>8x8</p>
      </div>
    </article>
  </section>

  <div id="popUp" class="popUp" v-show="showPopUp">
    <p><b>Are you sure you want to join the game?</b></p>
    <button @click="handleYesClick">Join arena</button>
    <button @click="handleNoClick">Cancel</button>
  </div>
</template>

<style scoped>

</style>