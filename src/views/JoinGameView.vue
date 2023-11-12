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
    <router-link to="/home" class="red_button" id="back-button">Back</router-link>

    <router-link to="/filter-arenas" class="main-button" id="filter-button">Filter Arenas</router-link>
  </header>

  <section>
    <h1 class="title">Join an arena</h1>
    <p id="arena-join-description">Right click an arena to join it.</p>

    <div id="available-arenas">
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
    </div>
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
    margin: 2rem;
    position: sticky;
    background-color: #2F2F2F;
    top: 0;
    min-height: 3rem;
  }

  h1.title {
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  #filter-button {
    margin-bottom: 0;
    width: auto;
    padding: 1rem;
  }

  section {
    margin: 2rem;
  }

  #arena-join-description {
    color: white;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1rem;
  }

  section div article {
    background-color: #181414;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  section div article p,
  section div article h2 {
    color: white;
  }

  section div article div.arena-info {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  section div article div.arena-info h2,
  section div article div.arena-size p {
    display: inline;
  }

  section div article:hover {
    outline: white 1px solid;
  }

  @media (min-width: 1000px) {
    #available-arenas {
      display: flex;
      flex-wrap: wrap;
      column-gap: 2rem;
    }

    section div article.arena {
      flex: 1;
      max-width: 21.5rem;
      min-width: 21.5rem;
      box-sizing: border-box;
    }
  }
</style>