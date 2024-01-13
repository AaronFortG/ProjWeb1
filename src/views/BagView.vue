<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
  setup() {},
  data() {
    return {
      showPopUp: false
    }
  },
  mounted() {
    this.$root.$data.showVerticalMenu = false;
  },
  methods: {
    showPopUpMethod() {
      this.showPopUp = true
    },
    hidePopUp() {
      this.showPopUp = false
    },
    handleYesClick() {
      alert('Yes')
      this.hidePopUp()
    },
    handleNoClick() {
      alert('No')
      this.hidePopUp()
    }
  }
}
</script>

<template>
  <div class="container_shop">
    <h1 class="title">Your Bag</h1>

    <div style="margin: 0 2rem 2rem 2rem" class="content">
      <div class="left_row_container">
        <img src="../assets/images/coin.png" alt="coin" style="max-width: 2rem" />
        <p id="coins">Coins</p>
      </div>

      <div class="rows_container" id="BagAndButton">
        <div class="left_row_container">
          <RouterLink to="/store">
            <img src="../assets/images/store.png" alt="store" style="max-width: 5.5rem" />
          </RouterLink>

          <RouterLink to="/create-attack">
            <img src="../assets/images/createAttack.png" alt="bag" style="max-width: 5.5rem" />
          </RouterLink>
        </div>
      </div>

      <h2>Attacks</h2>

      <div class="shop_container">
        <article class="item_container">
          <h3>Attack 1</h3>

          <div class="rows_container">
            <p>Level</p>
            <p id="level-1">level</p>
          </div>

          <div class="rows_container">
            <p>Power</p>
            <p id="power-1">power</p>
          </div>

          <div class="rows_container">
            <p>Price</p>
            <p id="price-1">price</p>
          </div>
          <button class="red_button" @click="showPopUpMethod">Sell</button>
        </article>

        <article class="item_container">
          <h3>Attack 2</h3>

          <div class="rows_container">
            <p>Level</p>
            <p id="level-2">level</p>
          </div>

          <div class="rows_container">
            <p>Power</p>
            <p id="power-2">power</p>
          </div>

          <div class="rows_container">
            <p>Price</p>
            <p id="price-2">price</p>
          </div>
          <button class="red_button" @click="showPopUpMethod">Sell</button>
        </article>

        <article class="item_container">
          <h3>Attack 3</h3>

          <div class="rows_container">
            <p>Level</p>
            <p id="level-3">level</p>
          </div>

          <div class="rows_container">
            <p>Power</p>
            <p id="power-3">power</p>
          </div>

          <div class="rows_container">
            <p>Price</p>
            <p id="price-3">price</p>
          </div>
          <button class="red_button" @click="showPopUpMethod">Sell</button>
        </article>

        <article class="item_container">
          <h3>Attack 4</h3>

          <div class="rows_container">
            <p>Level</p>
            <p id="level-4">level</p>
          </div>

          <div class="rows_container">
            <p>Power</p>
            <p id="power-4">power</p>
          </div>

          <div class="rows_container">
            <p>Price</p>
            <p id="price-4">price</p>
          </div>
          <button class="red_button" @click="showPopUpMethod">Sell</button>
        </article>
      </div>
    </div>
  </div>

  <div id="popUp" class="popUp" v-show="showPopUp">
    <p class="popUp-question"><b>Are you sure you want to sell the attack?</b></p>
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
