<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="container">
    <RouterLink to="/filter-arenas" class="router-link">
      <button class="red_button">Back</button>
    </RouterLink>

    <h1 class="title">Game Logs</h1>

    <section>
      <article id="grid-size">
        <p>Grid Size:</p>
        <p>5x5</p>
      </article>
      <article id="game-logs">
        <p>10:34 - Player A moved to X:5 Y:5.</p>
        <p>10:34 - Player A attacked Player B with attack X.</p>
        <p>10:35 - Player B moved to X:4 Y:3.</p>
        <p>10:36 - Player A moved to X:5 Y:4.</p>
      </article>
    </section>
  </div>
</template>

<style scoped>
#container {
  margin: 2rem;
}

h1 {
  padding: 2rem 0 2rem 0;
}

p {
  color: white;
}

/* Alinear els dos paràgrafs */
article#grid-size p {
  font-weight: bolder;
  font-size: 1.5rem;
  display: inline;
}

article#grid-size {
  padding-bottom: 2rem;
}

article p {
  padding-bottom: 1rem;
  line-height: 1.5rem;
}
</style>
