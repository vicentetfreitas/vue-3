<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="header_wrapper">
      <nav class="nav_wrapper">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/options">Options</RouterLink>
        <RouterLink to="/composition">Composition</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />

</template>
<style>
@import '@/assets/base.css';

body {
  font-family: 'Open Sans', sans-serif;
  font-family: 'Roboto', sans-serif;
}

.header_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
}

.nav_wrapper>a {
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  color: #313131;
  font-weight: 600;
  list-style: none;
  text-decoration: none;
}

.nav_wrapper>a:hover {
  background-color: mediumslateblue;
  color: white;
  transition: 0.3s;
}
</style>

