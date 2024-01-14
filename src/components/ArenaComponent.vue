<script>
export default {
  props: {
    name: String,
    size: Number,
    creationDate: String
  },
  methods: {

  }
}
</script>

<template>
  <article class="arena">
    <h2>Arena "{{ name }}"</h2>
    <p>Date: {{ creationDate }}</p>
    <p>Grid size: {{ size }}x{{ size }}</p>
  </article>
</template>

<style scoped>
h2 {
  font-size: 1rem;
}

article {
  background-color: #181414;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

article p,
article h2 {
  color: white;
}

article * {
  padding-bottom: 1rem;
}

article p:last-child,
article h2:last-child {
  padding-bottom: 0; /* Remove padding for the last child */
}

.arena-info {
  font-weight: bold;
  margin-bottom: 1rem;
}

section section article:hover {
  outline: white 1px solid;
}

@media (min-width: 1000px) {
  .arena {
    flex: 1;
    max-width: 20rem;
    min-width: 20rem;
    box-sizing: border-box;
  }
}
</style>