<script setup>
import {RouterLink} from "vue-router";
</script>

<script>
export default {
  props: {
    link: String,
    text: String
  }
}
</script>

<template>
  <RouterLink v-bind:to="link" class="main-button"> {{ text }}</RouterLink>
</template>

<style scoped>
.main-button {
  border: 1px solid #181414;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 20px 20px;
  background-color: #181414;
  color: white;
  text-align: center;
}

.main-button:hover {
  border: 1px solid rgba(226, 222, 211, 0.89);
}
</style>
