<script>
export default {
  props: {
    name: String,
    level: Number,
    xp: Number,
    coins: Number
  },
  methods: {

  }
}
</script>

<template>
  <section id="player-info-data">
    <p><b>Player name:</b> {{ name }}</p>
    <p><b>Level:</b> {{ level }}</p>
    <p><b>XP:</b> {{ xp }}</p>
    <p><b>Coins:</b> {{ coins }}</p>
  </section>
</template>

<style scoped>
p,
b {
  color: white;
  font-size: 20px;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 1100px) {
  p,
  b {
    font-size: 1.5rem;
  }

  #player-info-image img {
    max-width: 12rem;
  }

  /* No separar la informació del jugador amb espai (ja se separa adalt amb el justify-content) */
  #player-info-data * {
    margin-top: 0;
    margin-bottom: 0;
  }

  #player-info-data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #player-info article {
    margin-bottom: 0;
  }
}
</style>