<script setup>
const hello = 'VueJS'
console.log(hello)

const object = {
  name: 'John',
  age: 30
}
</script>

<template>
  <h1>This is {{ object.name }} {{ object.age }}</h1>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
