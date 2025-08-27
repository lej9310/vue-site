<template>
    <div class="bg">
        <h4>Range Watcher</h4>
        <input type="range" min="0" max="100" step="1" v-model="rangeVal">
        <p>{{ rangeVal }}</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const rangeVal = ref(70)

// watch(감시할 변수, (구현부))
watch(rangeVal, (val) => {
    // 20에서 40까지는 20으로 보내고
    if (val > 20 && val < 40) {
        rangeVal.value = 20
        // 40에서 60까지는 60으로 보내기
    } else if (val >= 40 && val < 60) {
        rangeVal.value = 60
    }
})


</script>

<style scoped>
.bg {
    width: 90%;
    min-height: 50px;
    padding: 5px;
    margin: 10px auto;
    display: inline-block;
    border: 3px double purple;
    background-color: lightgoldenrodyellow;
    line-height: 1.5;
    font-weight: bold;
}

p {
    font-size: large;
    font-weight: bold;
    text-align: center;
}
</style>0