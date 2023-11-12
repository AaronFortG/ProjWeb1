<script setup>
import {RouterLink} from "vue-router";
</script>

<script>
export default {
  setup() {

  },
  methods: {
    // Function to check if the value of the input is negative
    negativeValueCheck(event, min) {
      const input = event.target;

      if (input.value < min) {
        input.value = min;
      }
    },
    // Function to check the value of the input
    maxLengthCheck(event, min, max) {
      const input = event.target;

      this.negativeValueCheck(event, min);

      if (input.value > max) {
        input.value = max;
      } else if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
      }
    },
  },
};
</script>

<template>
  <div class="createArena_container">
    <h1 class="title">Create an arena</h1>

    <div class="buttons_container">

      <form class="form">
        <div class="form-group">
          <label>Size [2..10]</label>
          <input type="number" name="size" id="size-input" required min="2" max="10" @change="maxLengthCheck($event, 2, 10 )" placeholder="[2..10]">
        </div>

        <div class="form-group">
          <label>HP max</label>
          <input type="number" id="hp-input" required min="1" @change="negativeValueCheck($event, 1)" placeholder="HP">
        </div>
      </form>

      <RouterLink to="/loading-page" class="router-link main-button">
        Create arena
      </RouterLink>

    </div>

    <div class="back-button">
      <RouterLink to="/home" class="router-link red_button">
        Back
      </RouterLink>
    </div>

  </div>
</template>

<style scoped>
  .createArena_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }
  .form-group {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  .form-group label {
    color: white;
    margin: 0.5rem;
  }
  .form-group input {
    padding: 5px;
    width: 17rem;
  }

  .back-button {
    text-align: center;
    margin-bottom: 40px;
    order: -1;
    margin-left: auto;
  }

  @media (min-width: 600px) {
    .form {
      margin-bottom: 5rem;
    }

    .back-button {
      order: 2;
      margin-top: 2rem;
    }
  }
</style>
