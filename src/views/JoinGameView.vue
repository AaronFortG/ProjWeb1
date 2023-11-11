<script setup>

import {RouterLink} from "vue-router";
import "../assets/joinArena.css";

</script>

<script>
export default {
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
  },
}
</script>

<template>
  <header class="header-buttons-container">
    <RouterLink to="/home">
      <button class="red_button" id="back-button">Back</button>
    </RouterLink>

    <RouterLink to="/filter-arenas">
      <button class="main-button" id="filter-button">Filter Arenas</button>
    </RouterLink>
  </header>

  <h1 class="title">Join an arena</h1>
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