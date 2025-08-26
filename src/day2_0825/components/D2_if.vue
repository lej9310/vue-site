<!-- vbase-3-setup -->
<template>
    <p v-if="typewriterInStock">재고 있음</p>
    <p v-else>재고 없음</p>
    <hr>
    <p v-if="typewriterCount">재고 있음</p>
    <p v-else>재고 없음</p>
    <hr>
    <p v-if="typewriterCount2 > 3">재고 있음{{ " (재고: " + typewriterCount2 + ")" }}</p>
    <p v-else-if="typewriterCount2 > 0">재고 조금 남음{{ " (재고: " + typewriterCount2 + ")" }}</p>
    <p v-else-if="typewriterCount2 == 0">재고 없음{{ " (재고: " + typewriterCount2 + ")" }}</p>
    <p v-else>선불/예약 있음</p>
    <hr>
    
    <p v-if="text.includes('pizza')">text에 'pizza'를 포함</p>
    <p v-else>'pizza'를 찾지 못함</p>
    <hr>
    
    <div>
        <div v-if="text2.includes('pizza')">
            <p>text에 'pizza'를 포함</p>
            <img src="../assets/img_pizza.svg" alt="img_pizza">
        </div>
        <div v-else>
            <p>'pizza'를 찾지 못함</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const typewriterInStock = ref(false)
const typewriterCount = ref(0)
const typewriterCount2 = ref(5)

const text = ref('I like taco, pizaza, Thai beef salad, pho soup and tagine.')
const text2 = ref('I like taco, pizza, Thai beef salad, pho soup and tagine.')
</script>

<style scoped>
img {
    width: 200px;
    height: 100px;
}
</style>
