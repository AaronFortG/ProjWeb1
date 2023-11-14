<script>
export default {
  props: {
    placeHolder: String,
    type: String
  }
}
</script>

<template>
  <input :type="this.type" required :placeholder="this.placeHolder" />
</template>

<style scoped>

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);
  }
</style>
