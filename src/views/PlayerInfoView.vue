<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="header-buttons-container">

    <RouterLink to="/home" class="router-link">
      <button class="red_button" id="back-button">Back</button>
    </RouterLink>

    <RouterLink to="/delete-account" class="router-link">
      <button class="main-button" id="delete-account">Delete account</button>
    </RouterLink>
  </div>

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

  <hr>

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
  </section>

</template>

<style scoped>

</style>