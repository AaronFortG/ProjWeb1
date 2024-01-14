<script>
import { ref, computed, toRefs } from 'vue'

export default {
  props: {
    name: String,
    size: Number,
    creationDate: String,
    hp: Number,
    started: Boolean,
    finished: Boolean,
  },
  setup(props) {
    // Destructure the props to obtain their reactive references
    const { started, finished } = toRefs(props);
    const status = ref(null);

    // Compute the status based on started and finished props
    const updateStatus = () => {
      if (started.value === false) {
        status.value = "Available";
      }
      else {
        if (started.value === true && finished.value === false) {
          status.value = "Playing";
        }
        else {
          status.value = "Finished";
        }
      }
    };

    // Call the computeStatus function initially
    updateStatus();

    return {
      status: computed(() => status.value),
    };
  },
};
</script>

<template>
  <article class="arena">
    <h2>Arena "{{ name }}"</h2>
    <p>Date: {{ creationDate }}</p>
    <p>Grid size: {{ size }}x{{ size }} - Max HP: {{ hp }}</p>
    <p>Status: {{ status }}</p>
  </article>
</template>

<style scoped>
h2 {
  font-size: 1rem;
}

article {
  background-color: #181414;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

article p,
article h2 {
  color: white;
}

article * {
  padding-bottom: 1rem;
}

article p:last-child,
article h2:last-child {
  padding-bottom: 0; /* Remove padding for the last child */
}

article:hover {
  outline: white 1px solid;
  cursor: pointer;
  pointer-events: auto;
}

@media (min-width: 1000px) {
  .arena {
    flex: 1;
    max-width: 20rem;
    min-width: 20rem;
    box-sizing: border-box;
  }
}
</style>