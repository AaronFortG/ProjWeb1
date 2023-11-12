<script setup>
import { RouterLink } from 'vue-router'
</script>

<script>
export default {
  setup() {},
  methods: {
    // Function to check if the value of the input is negative
    negativeValueCheck(event, min) {
      const input = event.target

      if (input.value < min) {
        input.value = min
      }
    }
  }
}
</script>

<template>
  <div class="createAttack_container">
    <h1 class="title">Create an attack</h1>

    <div class="buttons_container">
      <form class="form">
        <div class="form-group">
          <label>Positions</label>
          <input
            type="number"
            name="positions"
            id="positions-input"
            required
            @change="negativeValueCheck($event, 1)"
            placeholder="43"
          />
        </div>

        <div class="form-group">
          <label>Price</label>
          <input
            type="number"
            name="price"
            id="price-input"
            required
            @change="negativeValueCheck($event, 1)"
            placeholder="78"
          />
        </div>

        <div class="form-group">
          <label>Level needed</label>
          <input
            type="number"
            name="level-needed"
            id="level-input"
            required
            @change="negativeValueCheck($event, 1)"
            placeholder="15"
          />
        </div>
      </form>

      <RouterLink to="/bag" class="router-link main-button"> Create attack </RouterLink>
    </div>

    <div class="back-button">
      <RouterLink to="/bag" class="router-link red_button"> Back </RouterLink>
    </div>
  </div>
</template>

<style scoped>
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
  width: 25%;
}

.createAttack_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 5rem auto;
}

.back-button {
  text-align: center;
  margin-bottom: 40px;
  order: -1;
  margin-left: auto;
}

.main-button {
  max-width: 20rem;
  margin: auto;
}

@media (min-width: 600px) {
  .form {
    margin-bottom: 2rem;
  }

  .router-link {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }

  .main-button {
    max-width: 20rem;
    margin: auto;
  }
  .back-button {
    order: 2;
    margin-top: 2rem;
  }
}
</style>
