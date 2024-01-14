<script setup>
import { RouterLink } from 'vue-router'
import { inject, ref } from 'vue'
import InputComponent from '@/components/InputComponent.vue'
import { ApiClient } from '@/assets/ApiClient'

let attack_ID = ref("");
let positions = ref("");
const token = inject('token');

const api = new ApiClient();

// Hide the vertical menu.
const updateShowVerticalMenu = inject('updateShowVerticalMenu');
updateShowVerticalMenu(false);

const getName = async (event) => {
  attack_ID.value = event;
}

const getPositions = async (event) => {
  positions.value = event;
}

const createAttack = async () => {
  try {
    const createEndpoint = `/shop/attacks/`;
    const createData = {
      attack_ID: attack_ID.value,
      positions: positions.value,
      img: "https://imgs.search.brave.com/636aDEVODM14zcFZ4tlGDJaRuZjRJXn48L6MXhK1QWI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Vla3BuZy5jb20v/cG5nL2RldGFpbC8y/Ny0yNzM2NzBfcGl4/ZWwtZ3VuLXBpeGVs/LWFydC5wbmc"
    };

    const createResponse = await api.post(createEndpoint, createData, token);

    if (createResponse) {
      // Ataque creado correctamente
      console.log('Attack created successfully');
      location.reload();
    } else {
      console.error('Error creating attack:', createResponse);
      alert('Error creating attack:' + createResponse);
    }
  } catch (error) {
    console.error('Error creating attack:', error);
    alert(error);
  }
}

</script>

<template>
  <div class="createAttack_container">
    <h1 class="title">Create an attack</h1>

    <div class="buttons_container">
      <form class="form_container">
        <div class="form-group">
          <label>Name</label>
          <input-component
            type="text"
            name="positions"
            id="name"
            required
            placeholder="attack3"
            v-on:data="getName"
          />
        </div>

        <div class="form-group">
          <label>Positions</label>
          <input-component
            type="text"
            name="positions"
            id="price-input"
            required
            placeholder="(x,y)"
            v-on:data="getPositions"
          />
        </div>
      </form>

      <button class="router-link main-button" @click="() => createAttack()"> Create attack </button>
    </div>

    <div class="back-button">
      <RouterLink to="/bag" class="router-link red_button"> Back </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.form-group {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

}
.form-group label {
  color: white;
  margin: 0.5rem;
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
