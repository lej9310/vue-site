<script setup>
import router from './router';

</script>

<template>
  <p>경로: {{ $route.fullPath }}</p>

  <nav>
    <ul>
      <RouterLink to="/">
        <li>Home</li>
      </RouterLink>
      <RouterLink to="/about">
        <li>About</li>
      </RouterLink>
      <RouterLink to="/study">
        <li>Study</li>
      </RouterLink>
      <RouterLink to="/wd">
        <li>WebDesign</li>
      </RouterLink>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
li {
  display: inline-block;
  width: 120px;
  list-style: none;
  font-weight: bold;  
  padding: 10px;
  margin: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 5px 2px 2px 2px gray;
  color: black;
}

li:hover {
  color: rgb(200, 0, 0);
  background-color: rgb(0, 94, 217);
  color: white;
}
</style>
