<script setup>
import { RouterLink } from 'vue-router'
import InputNumberComponent from "@/components/InputNumberComponent.vue";
</script>

<script>
export default {
  setup() {},
  mounted() {
    this.$root.$data.showVerticalMenu = true;
  },
  methods: {

    // Function to check if the value of the input is negative
    negativeValueCheck(event, min) {
      const input = event.target

      if (input.value < min) {
        input.value = min
      }
    },
    // Function to check the value of the input
    maxLengthCheck(event, min, max) {
      const input = event.target

      this.negativeValueCheck(event, min)

      if (input.value > max) {
        input.value = max
      } else if (input.value.length > 2) {
        input.value = input.value.slice(0, 2)
      }
    }
  }
}
</script>

<template>
  <div class="createArena_container">
    <h1 class="title">Create an arena</h1>

    <div class="buttons_container">
      <form class="form_container">
        <div class="form-group">
          <label>Size [2..10]</label>
          <InputNumberComponent placeHolder="[2..10]" type="number" min="2" max="10"/>
        </div>

        <div class="form-group">
          <label>HP max</label>
          <InputNumberComponent placeHolder="HP" type="number" min="1" max="1000000"/>
        </div>
      </form>

      <RouterLink to="/loading-page" class="router-link main-button"> Create arena </RouterLink>
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

@media (min-width: 600px) {
  .form {
    margin-bottom: 5rem;
  }
}
</style>
