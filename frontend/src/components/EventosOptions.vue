<template>
  <div>
    <h1>19. Vue 3 para iniciantes#19 - Eventos
    </h1>
    <button v-on:click="">Clique Evento</button>
    <br>
    <br>
    <button @click="count++">Click {{ count }}</button>
    <br>
    <br>
    <button @mouseover="count2++">Mouseover {{ count2 }}</button>
    <br>
    <br>
    <button @click="add">Click methods {{ count3 }}</button>
    <br>
    <br>
    <button @click="remove('decrementRemove')">Click methods params {{ decrement }} </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      count2: 0,
      count3: 0,
      decrement: 0
    }
  },
  methods: {
    add() {
      this.count3++
    },
    remove(decrementRemove) {
      console.log(decrementRemove);
      this.decrement--
    }
  }
}
</script>