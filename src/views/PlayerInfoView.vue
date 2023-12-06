<script setup>
import { RouterLink } from 'vue-router'
import AttackComponnt from "@/components/AttackComponent.vue";
</script>

<script>
export default {
  setup() {},
  mounted() {
    this.$root.$data.showVerticalMenu = true;
  },
  data() {
    return {
      showPopUp: false,
      deleteAccPopUp: false
    }
  },
  methods: {
    showPopUpMethod() {
      this.showPopUp = true
    },
    hidePopUp() {
      this.showPopUp = false
      this.deleteAccPopUp = false
    },
    showDeletePopUp() {
      this.deleteAccPopUp = true
    },
    confirmDelete() {
      alert('Account successfully deleted!')
      this.$router.push('/')
    },
    handleYesClick() {
      alert('Attack changed')
      this.hidePopUp()
    },
    handleNoClick() {
      this.hidePopUp()
    }
  }
}

</script>

<template>
  <header class="header-buttons-container">
    <router-link to="/home" class="red_button" id="back_button">Back</router-link>
    <router-link to="" @click="showDeletePopUp" class="main-button" id="delete-account"
      >Delete account</router-link
    >
  </header>

  <section>
    <h1 class="title">Player information</h1>

    <div id="player-info">
      <div id="player-info-image">
        <img
            src="/src/assets/images/playerInfo_profilePicture.jpg"
            alt="User profile image"
            loading="lazy"
        />
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
  </section>

  <hr />

  <section>
    <div id="equipped-attacks-title">
      <h2>Equipped attacks</h2>
      <h2>(Click to change)</h2>
    </div>

    <div id="equipped-attacks">
      <AttackComponnt name="Demon Attack" pos-x="3" pos-y="4" power="20"></AttackComponnt>
      <AttackComponnt name="Demon Attack" pos-x="3" pos-y="4" power="20"></AttackComponnt>
      <AttackComponnt name="Demon Attack" pos-x="3" pos-y="4" power="20"></AttackComponnt>
    </div>
  </section>

  <hr id="owned-attacks-divider" />

  <section>
    <h2>Owned attacks</h2>

    <div id="owned-attacks">
      <AttackComponnt name="Demon Attack" pos-x="3" pos-y="4" power="20"></AttackComponnt>
      <AttackComponnt name="Demon Attack" pos-x="3" pos-y="4" power="20"></AttackComponnt>
      <AttackComponnt name="Demon Attack" pos-x="3" pos-y="4" power="20"></AttackComponnt>
      <AttackComponnt name="Demon Attack" pos-x="3" pos-y="4" power="20"></AttackComponnt>
      <AttackComponnt name="Demon Attack" pos-x="3" pos-y="4" power="20"></AttackComponnt>
    </div>
  </section>

  <div id="popUp" class="popUp" v-show="showPopUp">
    <p class="popUp-question"><b>Confirm to change the attack.</b></p>
    <p @click="handleYesClick">Change attack</p>
    <p @click="handleNoClick">Cancel</p>
  </div>

  <div id="popUp" class="popUp" v-show="deleteAccPopUp">
    <p class="popUp-question"><b>Confirm to delete your account, all progress will be lost.</b></p>
    <p @click="confirmDelete">Delete account</p>
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

#delete-account {
  margin-bottom: 0;
  width: auto;
  padding: 1rem;
}

p,
b {
  color: white;
  font-size: 20px;
}

/* Estils pel popUp */
div.popUp p {
  color: black;
  font-size: 1.25rem;
}

h1.title {
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

/* Espai al costat del poder */
.main-attack-power p:last-child {
  margin-left: 0.5rem;
}

/* Espai al costat de la posició */
.main-attack-positions p:last-child {
  margin-left: 0.5rem;
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

.main-attack,
.attack {
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1.5rem;
  background-color: #181414;
}

.main-attack > p,
.attack > p {
  font-weight: bold;
}

hr {
  border: 1px solid white;
  margin: 2rem;
}

@media (min-width: 1100px) {
  /* Estils pel popUp */
  div.popUp p {
    color: black;
    font-size: 1rem;
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

  #player-info-data p,
  #player-info-data p b {
    font-size: 1.5rem;
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
