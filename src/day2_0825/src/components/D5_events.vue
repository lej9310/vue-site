<!-- vbase-3-setup -->
<template>
    <div>
        <img src="../assets/img_moose.jpg" alt="">
        <p>Moose count: {{ count }}</p>        
        <button type="button" @click="count++">Count moose</button>

    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0)
</script>

<style scoped>
div>img {
    width: 90%;
    height: auto;
}

div {
    border: dashed black 1px;
    width: 100%;
    padding: 20px;
}

button {
    border: solid black 1px;
    border-radius: 10ch;
    box-shadow: 1px;
}
</style>