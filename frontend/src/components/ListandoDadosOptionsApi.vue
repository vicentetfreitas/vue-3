<template>
  <div>
    <h1>#15 - Listando dados do backend com a options API</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }} - {{ user.title }} - {{ user.completed }}
      </li>
    </ul>
  </div>
</template>
<script>

import http from '../services/http.js';
export default {

  data() {
    return {
      users: []
    }
  },
  async mounted() {
    try {
      const { data } = await http.get('/todos/');
      this.users = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}


</script>