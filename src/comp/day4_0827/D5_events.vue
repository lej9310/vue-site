<template>
    <div>        
        <input type="text" @input="inpCount++">
        <p>{{ inpCount }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const inpCount = ref(0)
</script>

<style scoped>

</style>