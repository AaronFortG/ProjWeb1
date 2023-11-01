import {RouterLink} from "vue-router";
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
  <div class="big_container">
    <h1 class="title">Create an arena</h1>

    <div class="buttons_container">

      <form>
        <div class="form-group">
          <label>Size [2..10]</label>
          <input type="number" name="size" id="amount-input" required min="2" max="10" maxLength="2" @change="maxLengthCheck($event, 2, 10 )">
        </div>

        <div class="form-group">
          <label>HP max</label>
          <input type="number" id="amount-input" required min="1" @change="negativeValueCheck($event, 1)">
        </div>
      </form>

      <RouterLink to="/loading-page" class="router-link">
        <button class="main-button" type="submit">
          Create arena
        </button>
      </RouterLink>

    </div>
  </div>
</template>

