<template>
  <div>
    <h1>#17 - Renderização condicional</h1>
    <div>
      <span v-if="showSpan">Este texto irá sumir se o valor de showSpan for false.vc </span>
    </div>
    <div>
      <span v-if="showSpan2">Este texto irá sumir se o valor de showSpan2 é falso!</span>
      <span v-else>Este texto apareceu pois so valor de showSpan2 é falso!</span>
    </div>
    <div>
      <h3>Exemplo de botão com v-if e v-else</h3>
      <span v-if="showSpan3">Clique para vê o que acontece</span>
      <span v-else>Clique novamente para vê o que acontece</span>
      <br>
      <button @click="showSpan3 = !showSpan3">Click</button>
    </div>
    <div>
      <h3>Exemplo de botão v-else-if</h3>
      <div v-if="showSpan4 === 'A'">
        A
      </div>
      <div v-else-if="showSpan4 === 'B'">
        B
      </div>
      <div v-else-if="showSpan4 === 'C'">
        C
      </div>
      <div v-else>
        Not A/B/C
      </div>
    </div>
    <div>
      <h1 v-show="ok">Hello!</h1>
    </div>
    <div v-show="ok">
      <h1>Hello!</h1>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const showSpan = ref(true);
const showSpan2 = ref(false);
const showSpan3 = ref(true);
const showSpan4 = ref(true);
const ok = ref(true);
</script>
