<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="big_container">
    <h1 class="title" style="color: #DA4E39; text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7);">Game Over</h1>

    <div class="buttons_container">

      <RouterLink to="/home" class="router-link">
        <button class="main-button">Continue</button>
      </RouterLink>

    </div>
  </div>
</template>
