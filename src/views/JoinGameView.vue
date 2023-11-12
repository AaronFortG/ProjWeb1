<script setup>

import {RouterLink} from "vue-router";

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
  }
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
  .header-buttons-container {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    position: sticky;
    background-color: #2F2F2F;
    top: 0;
  }

  h1.title {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  button#filter-button {
    margin-bottom: 0;
  }

  section {
    margin: 2rem;
  }

  p#arena-join-description {
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

  section article div.arena-info h2,
  section article div.arena-size p {
    display: inline;
  }

  section article:hover {
    outline: white 1px solid;
  }

  .popUp {
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: #cccccc 1px solid;
    padding: 1rem;
    width: 20rem;
    z-index: 999; /* Per posar-lo per sobre dels elements */
  }

  .popUp *:nth-child(2) {
    margin-bottom: 1rem;
  }

  .popUp button:hover {
    font-weight: bold;
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
</style>