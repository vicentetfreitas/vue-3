<template>
  <div>
    <h1>#18 - Diretiva v-bind e classes com condição</h1>
    <img :src="imgSrc" :class="{ 'my-class': is_admin, 'my-other-class': !is_admin }">
  </div>
</template>
<script setup>
import { ref } from 'vue';

const imgSrc = ref('https://picsum.photos/200/300');
const is_admin = ref(false);

</script>

<style scoped>
.my-class {
  border: 5px solid tomato;
}

.my-other-class {
  border: 5px solid violet;
}
</style>