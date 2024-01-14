<script>
export default {
  props: {
    name: String,
    power: Number,
    posX: Number,
    posY: Number
  },
  methods: {

  }
}
</script>

<template>
  <article class="attack">
    <h3>{{ name }}</h3>
    <p>Power {{ power }}</p>
    <p>Positions: x={{ posX }}, y={{ posY }}</p>
  </article>
</template>

<style scoped>
p {
  color: white;
  font-size: 1.2rem;
}

h3 {
  color: white;
  font-size: 18px;
}

.attack {
  margin-left: 2rem;
  margin-right: 2rem;
  padding: 1.5rem;
  background-color: #181414;
}

.attack :nth-child(2) {
  margin: 1rem 0;
}

.attack:hover {
  outline: 1px solid white;
}

@media (min-width: 1100px) {
  #player-info-image img {
    max-width: 12rem;
  }

  p {
    color: white;
    font-size: 24px;
  }

  h3 {
    font-size: 24px;
  }

  /* No separar la informació del jugador amb espai (ja se separa adalt amb el justify-content) */
  #player-info-data * {
    margin-top: 0;
    margin-bottom: 0;
  }

  #player-info-data p,
  #player-info-data p b {
    font-size: 1.5rem;
  }

  #player-info article {
    margin-bottom: 0;
  }

  .attack {
    min-width: 22rem; /* Mida mínima pel requadre de l'atac */
    flex: 1;
  }
}
</style>