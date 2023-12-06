<script setup>
import MainButton from "@/components/MainButtonComponent.vue";
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
    <h1 class="title">Dungeon Clash</h1>
    <div class="buttons_container">
      <MainButton link="/create-arena" text="Create match"></MainButton>
      <MainButton link="/join-arena" text="Join match"></MainButton>
      <MainButton link="/player-info" text="Player information"></MainButton>
      <MainButton link="/store" text="Store"></MainButton>
      <MainButton link="/list-players" text="Ranking"></MainButton>
      <MainButton link="/" text="Log out"></MainButton>
    </div>
  </div>
</template>
