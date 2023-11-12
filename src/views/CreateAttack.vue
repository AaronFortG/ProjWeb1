<script setup>
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
    margin: auto 5rem;
    justify-content: center;
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
    button {
      max-width: 20rem;
    }
  }
</style>