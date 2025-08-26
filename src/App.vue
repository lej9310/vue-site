<script setup>
import { ref } from 'vue';
import Ex1 from './day2_0825/components/D1_bind.vue';
import Ex2 from './day2_0825/components/D2_if.vue';
import Ex3 from './day2_0825/components/D3_show.vue';
import Ex4 from './day2_0825/components/D4_for.vue';
import Ex5 from './day2_0825/components/D5_event.vue';
import Ex6 from './day2_0825/components/D6_methods.vue';

const pages = { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6}
const activeComp = ref("Ex6")
</script>

<template>
  <!-- day2_0825 -->
  <button @click="activeComp = 'Ex1'">v-bind</button>
  <button @click="activeComp = 'Ex2'">v-if</button>
  <button @click="activeComp = 'Ex3'">v-show</button>
  <button @click="activeComp = 'Ex4'">v-for</button>
  <button @click="activeComp = 'Ex5'">Events/v-on</button>
  <button @click="activeComp = 'Ex6'">methods</button>

  <div id="comp_view">
    <KeepAlive>
      <component :is="pages[activeComp]"></component>
    </KeepAlive>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
  filter: drop-shadow(0 0 1.5px grey);
}

#comp_view {
  width: 100%;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
}
</style>
