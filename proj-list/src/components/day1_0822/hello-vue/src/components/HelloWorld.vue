<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const text = ref('')

function onInput(e){
  text.value=e.target.value
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<!-- <style scoped>
.read-the-docs {
  color: #888;
}
</style> -->
