<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
  mounted() {
    this.$root.$data.showVerticalMenu = true;
  },
}
</script>

<template>
  <div class="big_container">
    <h1 class="title" style="color: #da4e39; text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.7)">
      Game Over
    </h1>

    <RouterLink to="/home" class="router-link main-button"> Continue </RouterLink>
  </div>
</template>
