<template>
    <div>
        <button @click="gotoPages('a1')">A1 웹디자인기능사</button>
        <button @click="gotoPages('a2')">A2 웹디자인기능사</button>
        <button @click="gotoPages('b1')">B1 웹디자인기능사</button>        
      <router-view />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const $router = useRouter()

const gotoPages = (id) => {
    $router.push({ path: `/wd/${id}` })
}
</script>

<style scoped>
button {
    border: 1px solid gray;
    display: block;
    margin: 15px auto;
    font-weight: bold;
    background-color: rgb(129, 194, 0);
}
</style>