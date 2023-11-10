<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="container_shop">
    <h1 class="title">Your Bag</h1>

    <div style="margin: 0 2rem 2rem 2rem;" class="content">
      <div class="left_row_container">
        <img src="../assets/images/coin.png" alt="coin" style="max-width: 2rem">
        <p id="coins">Coins</p>
      </div>

      <div class="rows_container" id="BagAndButton">
        <section class="left_row_container">
          <RouterLink to="/shop">
            <img src="../assets/images/store.png" alt="bag" style="max-width: 5.5rem">
          </RouterLink>

          <RouterLink to="/create-attack">
            <img src="../assets/images/createAttack.png" alt="bag" style="max-width: 5.5rem">
          </RouterLink>
        </section>
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
          <button class="red_button">Buy</button>
        </article>

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
          <button class="red_button">Buy</button>
        </article>

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
          <button class="red_button">Buy</button>
        </article>

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
          <button class="red_button">Buy</button>
        </article>

      </section>

    </div>
  </div>
</template>

<style scoped>

</style>