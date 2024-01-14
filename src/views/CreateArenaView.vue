<script setup>
import InputNumberComponent from "@/components/InputNumberComponent.vue";
import { ApiClient } from '@/assets/ApiClient'
import { inject, ref } from 'vue'
import InputComponent from '@/components/InputComponent.vue'
import { useRouter } from 'vue-router';

const api = new ApiClient();

let game_ID = ref("");
let size = ref(0);
let hpMax = ref(0);
const router = useRouter();

const token = inject('token');
const playerID = inject('playerID');

// Show the vertical menu.
const updateShowVerticalMenu = inject('updateShowVerticalMenu');
updateShowVerticalMenu(true);

const getName = async (event) => {
  game_ID.value = event;
}

const getSize = async (event) => {
  size.value = event;
}

const getHP = async (event) => {
  hpMax.value = event;
}

const createArena = async () => {
  try {
    const createEndpoint = `/arenas`;
    const createData = {
      game_ID: game_ID.value,
      size: Number(size.value),
      HP_max: Number(hpMax.value)
    };

    const createResponse = await api.post(createEndpoint, createData, token);

    if (createResponse) {
      // Arena creada correctamente
      console.log('Arena created successfully');

      // Cambia la URL
      router.push(`/loading-page/${game_ID.value}`);

    } else {
      console.error('Error creating arena:', createResponse);
      alert(createResponse);
    }
  } catch (error) {
    console.error('Error creating arena:', error);
    alert(error);
  }
}

</script>

<template>
  <div class="createArena_container">
    <h1 class="title">Create an arena</h1>

    <div class="buttons_container">
      <form class="form_container">
        <div class="form-group">
          <div class="form-group">
            <label>Name</label>
            <input-component placeHolder="Name" type="text" v-on:data="getName"/>
          </div>

          <label>Size [2..10]</label>
          <InputNumberComponent placeHolder="[2..10]" type="number" min="2" max="10" v-on:data="getSize"/>
        </div>

        <div class="form-group">
          <label>HP max</label>
          <InputNumberComponent placeHolder="HP" type="number" min="1" max="1000000" v-on:data="getHP"/>
        </div>


      </form>

      <button class="main-button" @click="() => createArena()"> Create arena </button>
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
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

}
.form-group label {
  color: white;
  margin: 0.5rem;
}

</style>
