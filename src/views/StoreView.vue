<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, getCurrentInstance } from 'vue'
import { ApiClient } from '@/assets/ApiClient';

const { proxy } = getCurrentInstance(); // Obtiene la instancia actual

const items = ref([]);
const player = ref([]);
const selectedAttack = ref(null);
const coins = ref(0);

const api = new ApiClient();
const showPopUp = ref(false);


onMounted(async () => {
  // Accede a la propiedad $root para establecer showVerticalMenu en true
  proxy.$root.$data.showVerticalMenu = true;

  try {
    const itemsEndpoint = '/shop/attacks';
    const itemsResponse = await api.get(itemsEndpoint, "4c92d229-6871-4a46-ac2e-2ddb1dfdb3eb");

    console.log('Items Response:', itemsResponse);

    if (itemsResponse) {
      items.value = Array.isArray(itemsResponse) ? itemsResponse : [];
      console.log('Items:', items.value);

      // Actualiza las monedas después de obtener la información del jugador
      coins.value = await getUserCoins();

    } else {
      console.error('Invalid response format. Missing "data" property.');
    }
  } catch (error) {
    console.error('Error fetching items:', error);
  }
});

const showPopUpMethod = (attack) => {
  selectedAttack.value = attack;
  showPopUp.value = true;
};


const handleYesClick = async () => {
  hidePopUp();

  // Aquí debes verificar si el usuario tiene monedas suficientes para comprar el ataque
  const attackToBuy = selectedAttack.value;

  console.log("PRICE: " + attackToBuy.price);

  const coins = await getUserCoins();
  if (attackToBuy && attackToBuy.price <= coins) {
    // Usuario tiene monedas suficientes, realiza la compra
    await buyAttack(attackToBuy.attack_ID);
  } else {
    alert('Not enough coins to buy the attack!');
  }
};

const handleNoClick = () => {
  alert('No');
  hidePopUp();
};

const hidePopUp = () => {
  showPopUp.value = false;
};

const getUserCoins = async () => {
  try {
    let selectedPlayer = "laGemmaYebra";
    const playerInfoEndpoint = `/players/${selectedPlayer}`;
    const playerResponse = await api.get(playerInfoEndpoint, "4c92d229-6871-4a46-ac2e-2ddb1dfdb3eb");

    if (playerResponse) {
      player.value = playerResponse;
      console.log('Player:', player.value);
      console.log('Coins: ', player.value.coins);
      const coins = player.value.coins;
      return coins;
    } else {
      console.error('Invalid response format. Missing "data" property.');
    }
  } catch (error) {
    console.error('Error fetching player information:', error);
    return 0;
  }
};


const buyAttack = async (attackId) => {
  try {
    // Lógica para realizar la compra del ataque
    const buyEndpoint = `/shop/attacks/${attackId}/buy`;
    await api.post(buyEndpoint, "", "4c92d229-6871-4a46-ac2e-2ddb1dfdb3eb");
    alert('Attack bought successfully!');
    location.reload();
  } catch (error) {
    console.error('Error buying attack:', error);
    alert('Failed to buy the attack. Please try again.');
  }
};
</script>

<template>
  <div class="container_shop">
    <h1 class="title">Shop</h1>

    <div style="margin: 0 2rem 2rem 2rem" class="content">
      <div class="left_row_container">
        <img src="../assets/images/coin.png" alt="coin" style="max-width: 2rem" />
        <p id="coins">{{ coins }}</p>
      </div>

      <div class="rows_container" id="BagAndButton">
        <RouterLink to="/bag">
          <img src="../assets/images/bag.png" alt="bag" style="max-width: 5.5rem" />
        </RouterLink>
      </div>

      <h2>Attacks</h2>

      <div class="shop_container">
        <article v-for="(item, index) in items" :key="index" class="item_container">
          <h3>{{ item.attack_ID }}</h3>

          <div class="rows_container">
            <p>Level</p>
            <p>{{ item.level_needed }}</p>
          </div>

          <div class="rows_container">
            <p>Power</p>
            <p>{{ item.power }}</p>
          </div>

          <div class="rows_container">
            <p>Price</p>
            <p>{{ item.price }}</p>
          </div>
          <button class="red_button" @click="() => showPopUpMethod(item)">Buy</button>
        </article>
      </div>
    </div>
  </div>

  <div id="popUp" class="popUp" v-show="showPopUp">
    <p class="popUp-question"><b>Are you sure you want to buy the attack?</b></p>
    <p @click="handleYesClick">Yes</p>
    <p @click="handleNoClick">No</p>
  </div>
</template>

<style scoped>
h2 {
  color: white;
  font-size: 1.5rem;
  margin: 1rem auto !important;
}

.left_row_container {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  color: white;
}

.shop_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.item_container {
  display: grid;
  grid-template-columns: max-content 1fr max-content 1fr;
  gap: 10px;
  align-items: center;
  color: white;
  background-color: #181414;
  border: #cccccc 1px solid;
  padding: 1rem;
  margin: 1rem 0;
  width: 20rem;
}

.item_container h3 {
  font-size: 1.2rem;
  grid-column: 1 / span 4;
  margin: 0;
}

.item_container div {
  grid-column: 1 / span 4;
  margin: 0;
}

.item_container button {
  grid-column: 1 / span 4;
  margin: 0;
}

.container_shop {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.content {
  display: flex;
  flex-direction: column;
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

/* Move the BagAndButton element to the end */
@media (min-width: 600px) {
  .rows_container#BagAndButton {
    order: 999;
  }

  .item_container {
    margin: 1rem 2rem;
    min-width: 20rem;
  }

  .shop_container {
    flex-wrap: wrap;
    justify-content: center;

    width: 100%; /* Establece el ancho deseado */
    height: 30rem; /* Establece la altura deseada */
    overflow: auto; /* Agrega barras de desplazamiento cuando sea necesario */
  }

  .container_shop {
    width: 100% !important;
  }
}
</style>
