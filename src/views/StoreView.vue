<script setup>
import {RouterLink} from "vue-router";
import '../assets/shopBag.css'

</script>


<script>
export default {
  setup() {

  },
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
      alert('Yes');
      this.hidePopUp();
    },
    handleNoClick() {
      alert('No');
      this.hidePopUp();
    },
  },
}
</script>

<template>
  <div class="container_shop">
    <h1 class="title">Shop</h1>

    <div style="margin: 0 2rem 2rem 2rem;" class="content">
      <div class="left_row_container">
        <img src="../assets/images/coin.png" alt="coin" style="max-width: 2rem">
        <p id="coins">Coins</p>
      </div>

      <div class="rows_container" id="BagAndButton">
        <RouterLink to="/bag">
          <img src="../assets/images/bag.png" alt="bag" style="max-width: 5.5rem">
        </RouterLink>

        <RouterLink to="/home" class="router-link">
          <button class="red_button">Back</button>
        </RouterLink>
      </div>

      <h2>Attacks</h2>

      <section class="shop_container">
        <article class="item_container">
          <h3>Attack 1</h3>

          <div class="rows_container">
            <p>Level</p>
            <p id="level">level</p>
          </div>

          <div class="rows_container">
            <p>Power</p>
            <p id="power">power</p>
          </div >

          <div class="rows_container">
            <p>Price</p>
            <p id="price">price</p>
          </div>
          <button class="red_button" @click="showPopUpMethod">Buy</button>
        </article>

        <article class="item_container">
          <h3>Attack 2</h3>

          <div class="rows_container">
            <p>Level</p>
            <p id="level">level</p>
          </div>

          <div class="rows_container">
            <p>Power</p>
            <p id="power">power</p>
          </div >

          <div class="rows_container">
            <p>Price</p>
            <p id="price">price</p>
          </div>
          <button class="red_button" @click="showPopUpMethod">Buy</button>
        </article>

        <article class="item_container">
          <h3>Attack 3</h3>

          <div class="rows_container">
            <p>Level</p>
            <p id="level">level</p>
          </div>

          <div class="rows_container">
            <p>Power</p>
            <p id="power">power</p>
          </div >

          <div class="rows_container">
            <p>Price</p>
            <p id="price">price</p>
          </div>
          <button class="red_button" @click="showPopUpMethod">Buy</button>
        </article>

        <article class="item_container">
          <h3>Attack 4</h3>

          <div class="rows_container">
            <p>Level</p>
            <p id="level">level</p>
          </div>

          <div class="rows_container">
            <p>Power</p>
            <p id="power">power</p>
          </div >

          <div class="rows_container">
            <p>Price</p>
            <p id="price">price</p>
          </div>
          <button class="red_button" @click="showPopUpMethod">Buy</button>
        </article>

      </section>

    </div>
  </div>

  <div id="popUp" class="popUp" v-show="showPopUp">
    <p>Are you sure you want to buy it?</p>
    <button @click="handleYesClick">Yes</button>
    <button @click="handleNoClick">No</button>
  </div>
</template>

<style scoped>

</style>