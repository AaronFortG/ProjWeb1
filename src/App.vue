<script setup>
import { ref, onMounted } from 'vue';
import VerticalMenuComponent from "@/components/VerticalMenuComponent.vue";

const token = ref('');

// Function to get data from localStorage
const getLocalStorageData = () => {
  token.value = localStorage.getItem('token') || '';
};

// Call the function when the component is mounted
onMounted(() => {
  getLocalStorageData();
});
</script>

<script>
import HorizontalMenuComponent from "@/components/HorizontalMenuComponent.vue";

export default {
  data() {
    return {
      showVerticalMenu: false
    };
  },
  components: {
    HorizontalMenuComponent,
  },
};
</script>

<template>
  <div>
    <VerticalMenuComponent v-if="showVerticalMenu" />
    <RouterView />
    <HorizontalMenuComponent v-if="showVerticalMenu" />
  </div>
</template>

<style scoped></style>
