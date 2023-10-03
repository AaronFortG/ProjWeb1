<template>
  <div class="item">
    <h2>My Second Component content</h2>
    <img src="@/assets/images/Focus_tools_wireframe_wikipage.png" alt="A photo" width="200" />
  </div>
</template>

<style scoped>
.item {
  border: 1px solid #ccc;
  border-radius: 4px;
  /* https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units */
  padding: 1rem;
  margin: 1rem;
  /* transforme to 50% of scale */
  transform: scale(0.5);
  /* make sure the transition animates smoothly */
  transition: transform 1s ease;
  /* on hover item reset scale */
  &:hover {
    transform: scale(1);
  }
}
</style>
