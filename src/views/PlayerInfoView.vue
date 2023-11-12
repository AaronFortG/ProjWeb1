<script setup>

import {RouterLink} from "vue-router";

</script>

<template>
  <header class="header-buttons-container">
    <RouterLink to="/home" class="router-link">
      <button class="red_button" id="back-button">Back</button>
    </RouterLink>

    <RouterLink to="/delete-account" class="router-link">
      <button class="main-button" id="delete-account">Delete account</button>
    </RouterLink>
  </header>

  <h1 class="title">Player information</h1>

  <section id="player-info">
    <article id="player-info-image">
      <img src="/src/assets/images/playerInfo_profilePicture.jpg" alt="User profile image">
    </article>

    <section id="player-info-data">
      <article id="player-info-name">
        <p><b>Player name: </b></p>
        <p id="player-name">SrFox3999</p>
      </article>

      <article id="player-info-level">
        <p><b>Level: </b></p>
        <p id="player-level">2</p>
      </article>

      <article id="player-info-xp">
        <p><b>  XP: </b></p>
        <p id="player-xp">369</p>
      </article>

      <article id="player-info-coins">
        <p><b>Coins: </b></p>
        <p id="player-coins">199</p>
      </article>
    </section>
  </section>

  <hr>

  <h2>Attacks equipped</h2>
  <h2>(Click to change)</h2>

  <section id="equipped-attacks">
    <article class="main-attack">
      <p>Name of the attack</p>
      <div class="main-attack-power">
        <p>Power </p>
        <p>1</p>
      </div>
    </article>

    <article class="main-attack">
      <p>Name of the attack</p>
      <div class="main-attack-power">
        <p>Power </p>
        <p>2</p>
      </div>
    </article>

    <article class="main-attack">
      <p>Name of the attack</p>
      <div class="main-attack-power">
        <p>Power </p>
        <p>3</p>
      </div>
    </article>
  </section>

  <hr id="owned-attacks-divider">

  <section id="owned-attacks">
    <article class="attack">
      <p>Name of the attack</p>
      <div class="main-attack-power">
        <p>Power </p>
        <p>1</p>
      </div>
    </article>

    <article class="attack">
      <p>Name of the attack</p>
      <div class="main-attack-power">
        <p>Power </p>
        <p>2</p>
      </div>
    </article>

    <article class="attack">
      <p>Name of the attack</p>
      <div class="main-attack-power">
        <p>Power </p>
        <p>3</p>
      </div>
    </article>

    <article class="attack">
      <p>Name of the attack</p>
      <div class="main-attack-power">
        <p>Power </p>
        <p>4</p>
      </div>
    </article>

    <article class="attack">
      <p>Name of the attack</p>
      <div class="main-attack-power">
        <p>Power </p>
        <p>5</p>
      </div>
    </article>
  </section>

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

  #delete-account {
    margin-bottom: 0;
  }

  p, b {
    color: white;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 2.5rem !important;
    padding: 0 2rem 2rem 2rem;
  }

  #player-info {
    text-align: center;
    display: inline;
  }

  #player-info p {
    display: inline;
  }

  #player-info article {
    margin-bottom: 1.5rem;
  }

  #player-info-image img {
    width: 12rem;
    padding-bottom: 1rem;
    margin: 0 auto;
  }

  #player-info-name p {
    display: inline;
  }

  #player-info article:last-child {
    padding: 0;
  }

  h2 {
    font-size: 1.5rem;
    text-align: center;
    color: white;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  #equipped-attacks article,
  #owned-attacks article {
    margin-bottom: 1.5rem;
  }

  /* Treure l'espai final de l'últim atac quan aquest està abaix */
  @media (min-width: 1100px) and (max-width: 1559px) {
    #equipped-attacks article:last-child {
      margin-bottom: 0;
    }
  }

  #equipped-attacks article p,
  #owned-attacks article p {
    font-size: 1.2rem;
    display: inline;
  }

  .main-attack-power {
    margin-top: 1rem;
  }

  #equipped-attacks article:hover,
  #owned-attacks article:hover {
    outline: 1px solid white;
  }

  .main-attack, .attack{
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 1.5rem;
    background-color: #181414;
  }

  .main-attack > p, .attack > p {
    font-weight: bold;
  }

  hr {
    border: 1px solid white;
    margin: 2rem;
  }

  @media (min-width: 1100px) {
    #player-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-bottom: 2rem;
    }

    #player-info-image img {
      max-width: 12rem;
      padding-bottom: 0;
    }

    h1 {
      margin-bottom: 2rem !important;
    }

    hr#owned-attacks-divider {
      margin-top: 0.5rem;
    }

    #player-info-data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    #player-info article {
      margin-bottom: 0;
    }

    #equipped-attacks {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      height: fit-content;
    }

    .main-attack {
      flex: 1; /* Expand to fill the whole container */
      min-width: 22rem; /* Mida mínima pel requadre de l'atac */
    }

    #owned-attacks {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    .attack {
      min-width: 22rem; /* Mida mínima pel requadre de l'atac */
      flex: 1;
    }
  }
</style>