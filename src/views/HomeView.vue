<script setup>
import MySecondComponent from '../components/MySecondComponent.vue'
</script>

<template>
  <div class="columns">
    <MySecondComponent />
    <MySecondComponent />
    <MySecondComponent />
  </div>
</template>

<style scoped>
.columns {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
