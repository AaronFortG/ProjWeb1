<script setup>
import { RouterLink } from 'vue-router'
import AttackComponent from "@/components/AttackComponent.vue";
import PlayerInformationComponent from '@/components/PlayerInformationComponent.vue'
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
    <router-link to="" @click="showDeletePopUp" class="main-button" id="delete-account"
      >Delete account</router-link
    >
  </header>

  <section>
    <h1 class="title">Player information</h1>

    <section id="player-info">
      <section id="player-info-image">
        <img
            src="/src/assets/images/playerInfo_profilePicture.jpg"
            alt="User profile image"
            loading="lazy"
        />
      </section>

      <PlayerInformationComponent name="SrFox3999" level="2" xp="369" coins="199"></PlayerInformationComponent>
    </section>
  </section>

  <hr />

  <section>
    <div id="equipped-attacks-title">
      <h2>Equipped attacks</h2>
      <h2>(Click to change)</h2>
    </div>

<!--    <h2 id="equipped-attacks-title">Equipped attacks</h2>-->
<!--    <h2>(Click to change)</h2>-->

    <div id="equipped-attacks">
      <AttackComponent name="Demon Attack" posX="3" posY="4" power="20"></AttackComponent>
      <AttackComponent name="Demon Attack" posX="3" posY="4" power="20"></AttackComponent>
      <AttackComponent name="Demon Attack" posX="3" posY="4" power="20"></AttackComponent>
    </div>
  </section>

  <hr id="owned-attacks-divider" />

  <section>
    <h2>Owned attacks</h2>

    <div id="owned-attacks" style="margin-bottom: 5rem">
      <AttackComponent name="Demon Attack" posX="3" posY="4" power="20"></AttackComponent>
      <AttackComponent name="Demon Attack" posX="3" posY="4" power="20"></AttackComponent>
      <AttackComponent name="Demon Attack" posX="3" posY="4" power="20"></AttackComponent>
      <AttackComponent name="Demon Attack" posX="3" posY="4" power="20"></AttackComponent>
      <AttackComponent name="Demon Attack" posX="3" posY="4" power="20"></AttackComponent>
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
  justify-content: center;
  padding: 2rem;
  position: sticky;
  background-color: #2f2f2f;
  top: 0;
}

#delete-account {
  margin-bottom: 0;
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

#player-info article {
  margin-bottom: 1.5rem;
}

#player-info-image img {
  width: 12rem;
}

#player-info-image {
  padding-bottom: 0.5rem;
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

/* Treure l'espai final de l'últim atac quan aquest està abaix */
@media (min-width: 1100px) and (max-width: 1559px) {
  #equipped-attacks article:last-child {
    margin-bottom: 0;
  }
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

  #equipped-attacks {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: fit-content;
  }

  #owned-attacks {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>
