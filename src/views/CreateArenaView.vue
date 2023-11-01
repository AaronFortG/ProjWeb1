<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="big_container">
    <h1 class="title">Create an arena</h1>

    <div class="buttons_container">

      <form>
        <div class="form-group">
          <label>Size:</label>
          <input type="number" name="size" required min="2" max="10">
        </div>

        <div class="form-group">
          <label>HP max:</label>
          <input type="number" name="hp-max" required min="0">
        </div>
      </form>

      <RouterLink to="/loading-page" class="router-link">
        <button class="main-button" type="submit">
          Create arena
        </button>
      </RouterLink>

    </div>
  </div>
</template>
