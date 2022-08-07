<template>
  <div class="composition_wrapper">
    <h2>#14 - Listagem dinâmica com a diretiva v-for</h2>
    <h3>Usuários</h3>
    <ul>
      <li v-for="user in users">{{ user.id }} - {{ user.firstName }}</li>
    </ul>
    <ul>
      <template v-for="(usuario, key) in usuarios" :key="usuarios.id">
        <li v-if="usuario.is_admin === 1">
          {{ key }} - {{ usuario.firstName }}
        </li>
      </template>
    </ul>
  </div>
</template>
<script setup>

import { reactive } from '@vue/reactivity';

const usuarios = reactive([{ id: 1, firstName: 'Alexandre', age: 40, is_admin: 1 }, { id: 2, firstName: 'Maria', age: 40, is_admin: 0 }, { id: 3, firstName: 'João', age: 40, is_admin: 0 }]);

const users = reactive([{ id: 1, firstName: 'Alexandre', age: 40, is_admin: 1 }, { id: 2, firstName: 'Maria', age: 40, is_admin: 0 }, { id: 3, firstName: 'João', age: 40, is_admin: 0 }]);
</script>
