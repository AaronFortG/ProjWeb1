<script>
export default {
  props: {
    placeHolder: String,
    type: String,
    min: Number,
    max: Number,
  },
  methods: {
    // Function to check if the value of the input is negative
    negativeValueCheck(event, min) {
      const input = event.target
      const numericValue = parseInt(input.value)

      if (numericValue < Number(min)) {
        input.value = Number(min)
      }
    },
    // Function to check the value of the input
    maxLengthCheck(event, min, max) {
      const input = event.target
      const numericValue = parseInt(input.value)

      this.negativeValueCheck(event, min)

      if (numericValue > max) {
        input.value = max
      }
    }
  }
}
</script>

<template>

  <input
      :type="this.type"
      required
      :placeholder="this.placeHolder"
      @change="maxLengthCheck($event, min, max)"
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
