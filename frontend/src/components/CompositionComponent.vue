<template>
  <div class="composition_wrapper">
    <h1>Composition API</h1>
    <section>
      <h3>Entenda a diferença entre Options e Composition API</h3>
      <button v-on:click="add">Add {{ count }}</button>
    </section>
    <hr>
    <section>
      <h2>#11 - Ciclo de vida de um componente - Teoria</h2>
    </section>
    <hr>
    <section>
      <h2>#12 - Ciclo de vida de um componente - Prática</h2>
      {{ contador2 }}
      <button v-on:click="contador2++">Adicionar2</button>
    </section>
    <hr>
    <section>
      <h2>#13 - Reatividade</h2>
      Nome: {{ userName }}
      <br>
      Users: {{ users }}
      <br>
      Reatividade com array de objetos v-for
      <br>
      <ul>
        <li v-for="user in users">{{ user.firstName }} - {{ user.age }}</li>
      </ul>
    </section>

  </div>
</template>
<script setup>
import { onMounted, onUnmounted, onUpdated, reactive, ref } from 'vue';

const count = ref(0);
const contador2 = ref(0);
const userName = ref('Vicente');
const users = reactive([{
  firstName: 'Vicente',
  age: 30
},
{
  firstName: 'Jessica',
  age: 30
}])

function add() {
  count.value++;
}

onMounted(() => {
  console.log(`<p>The component is now mounted.</p>`);
  console.log(users);
  console.log(userName.value)
})

onUnmounted(() => {
  console.log(`<p>The component is now onUnmounted</p>`)
}
)

onUpdated(() => {
  console.log(`<p>The component is now onUpdated</p>`)
})
</script>