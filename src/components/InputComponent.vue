<script>
export default {
  props: {
    placeHolder: String,
    type: String
  }
}
</script>

<template>

  <input
      :type="this.type"
      required
      :placeholder="this.placeHolder"
      @input="$emit('data', $event.target.value)"
  />

</template>

<style scoped>

  input {
    width: 100%;
    padding: 10px;
    border: inset 1px  #ccc;
    border-radius: 0;
    background-color: #4e4a4e;
    color: #fff;
  }
  input:focus {
    outline: none;
    box-shadow: inset 0 0 5px black;
    border: 1px solid black;
  }
  ::placeholder {
    color: #b2b2b2;
  }
</style>
