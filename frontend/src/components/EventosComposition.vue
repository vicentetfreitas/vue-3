<template>
  <div>
    <h1>19. Vue 3 para iniciantes#19 - Eventos
    </h1>
    <button @click="count++">Count {{ count }}</button>
    <br>
    <br>
    <button @click="add()">Count2 {{ count2 }}</button>
    <br>
    <br>
    <button @click="remove('decrementRemove')">Click methods params {{ decrement }} </button>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const count = ref(0);
const count2 = ref(0);
const decrement = ref(0);

function add() {
  count2.value++;
}
function remove(decrementRemove) {
  console.log(decrementRemove);
  decrement.value--
}

</script>