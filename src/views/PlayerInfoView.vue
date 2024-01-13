<script setup>
import { inject, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ApiClient } from '../assets/ApiClient'
import AttackComponent from '@/components/AttackComponent.vue'
import PlayerInformationComponent from '@/components/PlayerInformationComponent.vue'

const showPopUpEquip = ref(false);
const showPopUpUnequip = ref(false);
const deleteAccPopUp = ref(false);
const selectedAttack = ref(null);

const api = new ApiClient();

const token = inject('token');
const playerID = inject('playerID');

console.log("Token: ", token, "Player ID", playerID);

const showPopUpEquipAttack = (attackID) => {
  console.log("Selected attack: ", attackID);
  selectedAttack.value = attackID;
  showPopUpEquip.value = true;
};

const showPopUpUnequipAttack = (attackID) => {
  console.log("Selected attack: ", attackID);
  selectedAttack.value = attackID;
  showPopUpUnequip.value = true;
};

const hidePopUp = () => {
  showPopUpEquip.value = false;
  deleteAccPopUp.value = false;
  showPopUpUnequip.value = false;
};

const showDeletePopUp = () => {
  deleteAccPopUp.value = true;
};

const confirmDeleteAccount = (playerID) => {
  api.delete(`players/`, token)
    .then(() => {
      // Handle success
      location.reload();
      alert('Account successfully deleted!');
      console.log(`Attack ${playerID} equipped successfully.`);
    })
    .catch((error) => {
      // Handle error
      alert(`Error equipping attack ${playerID}: ${error.message}`);
    });
  this.$router.push('/');
};

const equipAttack = (attackID) => {
  //const token = inject('token');
  //console.log("Token: ", token);

  console.log(`Token:${token} - Attack:${attackID}`);
  api.post(`players/attacks/${attackID}`, null, token)
    .then(() => {
      // Handle success
      location.reload();
      console.log(`Attack ${attackID} equipped successfully.`);
    })
    .catch((error) => {
      // Handle error
      console.log(error);
      alert(`Error equipping attack ${attackID}: ${error.message}`);
    });

  hidePopUp();
};

const unequipAttack = (attackID) => {
  //const token = inject('token');

  console.log(`Token:${token} - Attack:${attackID}`);
  api.delete(`players/attacks/${attackID}`, token)
    .then(() => {
      // Handle success
      location.reload();
      console.log(`Attack ${attackID} equipped successfully.`);
    })
    .catch((error) => {
      // Handle error
      alert(`Error equipping attack ${attackID}: ${error.message}`);
    });
  hidePopUp();
};

const handleNoClick = () => {
  hidePopUp();
};

const playerInfo = ref(null);
const playerAttacks = ref([]);
const equippedAttacks = ref([]);
const notEquippedAttacks = ref([]);

const filterAttacks = (attacksList) => {
  // Filter all the attacks
  for (const attack of attacksList) {
    console.log(attack);
    if (attack.equipped) {
      equippedAttacks.value.push(attack);
    }
    else {
      notEquippedAttacks.value.push(attack);
    }
  }
};

const getAttackPosition = (positionString) => {
  const positionArray = positionString.slice(1, -1).split(',');
  const x = parseInt(positionArray[0]);
  const y = parseInt(positionArray[1]);
  return { x, y };
};

const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

// Allow inject() to get the updated value using onBeforeMounted().
onMounted(async () => {
  try {
    //api.savePlayerID("aaronElMejor");
    //api.savePlayerToken("b9936a38-c0b4-4e13-ab82-630724b68a59");
    //const token = api.getPlayerToken();
    //const playerID = api.getPlayerID();
    //const token = inject('token');
    //const playerID = inject('playerID')

    //console.log("Token: ", token, "Player ID", playerID);

    // Replace 'your-endpoint' with the actual endpoint you want to call to get player information
    playerInfo.value = await api.get(`/players/${playerID}`, token);
    playerAttacks.value = await api.get(`/players/attacks`, token);

    filterAttacks(playerAttacks.value);
  } catch (error) {
    console.error('Error fetching player information:', error);
  }
});
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
          :src="isValidURL(playerInfo?.img) ? playerInfo?.img : '/src/assets/images/playerInfo_profilePicture.jpg'"
          alt="User profile image"
          loading="lazy"
        />
      </section>

      <PlayerInformationComponent v-bind:name=playerInfo?.player_ID v-bind:level=playerInfo?.level v-bind:xp=playerInfo?.xp v-bind:coins=playerInfo?.coins></PlayerInformationComponent>
    </section>
  </section>

  <hr />

  <section>
    <div id="equipped-attacks-title">
      <h2>Equipped attacks</h2>
      <h2>(Click to change)</h2>
    </div>

    <div id="equipped-attacks">
      <AttackComponent v-for="attack in equippedAttacks" v-bind:key="attack.attack_ID" v-bind:name=attack.attack_ID v-bind:posX=getAttackPosition(attack.positions).x v-bind:posY=getAttackPosition(attack.positions).y v-bind:power=attack.power v-on:click="() => showPopUpUnequipAttack(attack.attack_ID)"></AttackComponent>
    </div>
  </section>

  <hr id="owned-attacks-divider" />

  <section>
    <h2>Owned attacks</h2>

    <div id="owned-attacks" style="margin-bottom: 5rem">
      <AttackComponent v-for="attack in notEquippedAttacks" v-bind:key="attack.attack_ID" v-bind:name=attack.attack_ID v-bind:posX=getAttackPosition(attack.positions).x v-bind:posY=getAttackPosition(attack.positions).y v-bind:power=attack.power v-on:click="() => showPopUpEquipAttack(attack.attack_ID)"></AttackComponent>
    </div>
  </section>

  <div id="popUp" class="popUp" v-show="showPopUpUnequip">
    <p class="popUp-question"><b>Confirm to unequip {{ selectedAttack }} attack.</b></p>
    <p @click="unequipAttack(selectedAttack)">Unequip attack</p>
    <p @click="handleNoClick">Cancel</p>
  </div>

  <div id="popUp" class="popUp" v-show="showPopUpEquip">
    <p class="popUp-question"><b>Confirm to equip {{ selectedAttack }} attack.</b></p>
    <p @click="equipAttack(selectedAttack)">Equip attack</p>
    <p @click="handleNoClick">Cancel</p>
  </div>

  <div id="popUp" class="popUp" v-show="deleteAccPopUp">
    <p class="popUp-question"><b>Confirm to delete your account, all progress will be lost.</b></p>
    <p @click="confirmDeleteAccount(playerID)">Delete account</p>
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
