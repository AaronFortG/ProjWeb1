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
    <router-link to="/home" class="router-link">
      <button class="red_button" id="back-button">Back</button>
    </router-link>

    <router-link to="/delete-account" class="router-link">
      <button class="main-button" id="delete-account">Delete account</button>
    </router-link>
  </header>

  <h1 class="title">Player information</h1>

  <div id="player-info">
    <div id="player-info-image">
      <img src="/src/assets/images/playerInfo_profilePicture.jpg" alt="User profile image">
    </div>

    <div id="player-info-data">
      <div id="player-info-name">
        <p><b>Player name: </b></p>
        <p id="player-name">SrFox3999</p>
      </div>

      <div id="player-info-level">
        <p><b>Level: </b></p>
        <p id="player-level">2</p>
      </div>

      <div id="player-info-xp">
        <p><b>XP: </b></p>
        <p id="player-xp">369</p>
      </div>

      <div id="player-info-coins">
        <p><b>Coins: </b></p>
        <p id="player-coins">199</p>
      </div>
    </div>
  </div>

  <hr>

  <section>
    <div id="equipped-attacks-title">
      <h2>Equipped attacks</h2>
      <h2>(Click to change)</h2>
    </div>

    <div id="equipped-attacks">
      <article class="main-attack" @click="showPopUpMethod">
        <h3>Name of the attack</h3>
        <div class="main-attack-power">
          <p>Power </p>
          <p>1</p>
        </div>
        <div class="main-attack-positions">
          <p>Positions: </p>
          <p>x=2, y=3</p>
        </div>
      </article>

      <article class="main-attack" @click="showPopUpMethod">
        <h3>Name of the attack</h3>
        <div class="main-attack-power">
          <p>Power </p>
          <p>2</p>
        </div>
        <div class="main-attack-positions">
          <p>Positions: </p>
          <p>x=2, y=3</p>
        </div>
      </article>

      <article class="main-attack" @click="showPopUpMethod">
        <h3>Name of the attack</h3>
        <div class="main-attack-power">
          <p>Power </p>
          <p>3</p>
        </div>
        <div class="main-attack-positions">
          <p>Positions: </p>
          <p>x=2, y=3</p>
        </div>
      </article>
    </div>
  </section>

  <hr id="owned-attacks-divider">

  <section>
    <h2>Owned attacks</h2>

    <div id="owned-attacks">
      <article class="attack" @click="showPopUpMethod">
        <h3>Name of the attack</h3>
        <div class="main-attack-power">
          <p>Power </p>
          <p>1</p>
        </div>
        <div class="main-attack-positions">
          <p>Positions: </p>
          <p>x=2, y=3</p>
        </div>
      </article>

      <article class="attack" @click="showPopUpMethod">
        <h3>Name of the attack</h3>
        <div class="main-attack-power">
          <p>Power </p>
          <p>2</p>
        </div>
        <div class="main-attack-positions">
          <p>Positions: </p>
          <p>x=2, y=3</p>
        </div>
      </article>

      <article class="attack" @click="showPopUpMethod">
        <h3>Name of the attack</h3>
        <div class="main-attack-power">
          <p>Power </p>
          <p>3</p>
        </div>
        <div class="main-attack-positions">
          <p>Positions: </p>
          <p>x=2, y=3</p>
        </div>
      </article>

      <article class="attack" @click="showPopUpMethod">
        <h3>Name of the attack</h3>
        <div class="main-attack-power">
          <p>Power </p>
          <p>4</p>
        </div>
        <div class="main-attack-positions">
          <p>Positions: </p>
          <p>x=2, y=3</p>
        </div>
      </article>

      <article class="attack" @click="showPopUpMethod">
        <h3>Name of the attack</h3>
        <div class="main-attack-power">
          <p>Power </p>
          <p>5</p>
        </div>
        <div class="main-attack-positions">
          <p>Positions: </p>
          <p>x=2, y=3</p>
        </div>
      </article>
    </div>
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

  #delete-account {
    margin-bottom: 0;
  }

  p, b {
    color: white;
    font-size: 1.5rem;
  }

  h1.title {
    font-size: 2.5rem !important;
    padding: 0 2rem 2rem 2rem;
    margin: 0;
  }

  #player-info {
    text-align: center;
    display: inline;
  }

  /* Separar la informació del jugador amb espai */
  #player-info-data * {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  #player-info p {
    display: inline;
  }

  #player-info article {
    margin-bottom: 1.5rem;
  }

  #player-info-image img {
    width: 12rem;
  }

  #player-info-image {
    padding-bottom: 0.5rem;
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

  h3 {
    color: white;
    font-size: 18px;
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
    margin-bottom: 1rem;
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
    .header-buttons-container {
      padding-bottom: 0;
    }

    #player-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-bottom: 2rem;
    }

    #player-info-image img {
      max-width: 12rem;
    }

    #player-info-image {
      padding-bottom: 0;
    }

    h1 {
      margin-bottom: 2rem !important;
    }

    h3 {
      font-size: 24px;
    }

    /* Mostrar el títol dels atacs equipats en una sola línia. */
    #equipped-attacks-title {
      display: flex;
      justify-content: center;
      column-gap: 1rem;
    }

    hr#owned-attacks-divider {
      margin-top: 0.5rem;
    }

    #player-info-data {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* No separar la informació del jugador amb espai (ja se separa adalt amb el justify-content) */
    #player-info-data * {
      margin-top: 0;
      margin-bottom: 0;
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