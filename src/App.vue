<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MyComponent from './components/MyComponent.vue'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />

  <MyComponent />
</template>

<style scoped>
</style>
