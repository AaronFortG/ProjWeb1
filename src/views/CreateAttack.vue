<script setup>
  import '../assets/createAttack.css';
</script>

<template>
  <div class="createAttack_container">
    <h1 class="title">Create an attack</h1>

    <div class="buttons_container">

      <form class="form">
        <div class="form-group">
          <label>Positions</label>
          <input type="number" name="size" id="amount-input" required @change="negativeValueCheck($event, 1)">
        </div>

        <div class="form-group">
          <label>Price</label>
          <input type="number" id="amount-input" required @change="negativeValueCheck($event, 1)">
        </div>

        <div class="form-group">
          <label>Level_needed</label>
          <input type="number" id="amount-input" required @change="negativeValueCheck($event, 1)">
        </div>
      </form>

      <RouterLink to="/bag" class="router-link">
        <button class="main-button" type="submit">
          Create attack
        </button>
      </RouterLink>

    </div>
  </div>
</template>

<style scoped>

</style>