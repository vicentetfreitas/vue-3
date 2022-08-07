<template>
  <div>
    <h1>#16 - Listando dados do backend com a composition API</h1>
    <ul>
      <li v-for="user in users.users" :key="user.id">
        {{ user.id }} - {{ user.title }} - {{ user.completed }}
      </li>
    </ul>
  </div>
</template>
<script setup>

import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import http from '../services/http.js';

let users = reactive({ users: [] });

onMounted(async () => {

  try {
    // desconstrução
    const { data } = await http.get('/todos/');
    users.users = data;

  } catch (error) {
    console.log(error);
  }
})

</script>