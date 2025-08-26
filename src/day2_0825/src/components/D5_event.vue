<template>
    <div>
        <p>{{ cnt }}</p>
        <button v-on:click="cnt++">++씩 증가 버튼</button>
        <hr>
    </div>

    <!-- 전구불 -->
    <div>
        <img :src="lightOn ? pic_bulbon : pic_bulboff" alt="pic_bulboff">
        <p>전구 상태: {{ lightOn }}</p>
        <button @click="lightOn = !lightOn">ON/OFF 버튼</button>
    </div>
    <hr>

    <!-- 키입력 -->
    <div>
        <input type="text" @input="inpCount++">
        <p>{{ inpCount }}번째 키를 다운하고 있습니다.</p>
    </div>
    <hr>

    <!-- 색상값 -->
    <div class="bg" @mousemove="colorVal = Math.floor(Math.random() * 360)"
        :style="{ backgroundColor: `hsl(${colorVal}, 60%, 60%)` }">
        색상값 : {{ colorVal }}
    </div>
    <hr>

    <!-- 메뉴판 -->
    <div class="menu">
        <ol>
            <li v-for="food in FoodList" @click="imgUrl = food.src">
                {{ food.name }}
            </li>
        </ol>
        <img :src="imgUrl" alt="test">
    </div>
    <hr>

    <p>이미지와 설명(캡션)</p>
    <div class="menu">
        <figure v-for="food in FoodList" :key="food.name">
            <img :src="food.url" alt="Food List">
            <figcaption>{{ food.name }}</figcaption>
        </figure>
    </div>

</template>

<script setup>
import { ref } from 'vue';

import pic_bulbon from '../assets/pic_bulbon.gif'
import pic_bulboff from '../assets/pic_bulboff.gif'

import img_burrito from '../assets/img_burrito.svg'
import img_salad from '../assets/img_salad.svg'
import img_cake from '../assets/img_cake.svg'
import img_soup from '../assets/img_soup.svg'
import img_fish from '../assets/img_fish.svg'
import img_pizza from '../assets/img_pizza.svg'
import img_rice from '../assets/img_rice.svg'

const cnt = ref(0)
const lightOn = ref(false)
const inpCount = ref(0)
const colorVal = ref(50)
const imgUrl = ref(img_burrito)

const FoodList = ref([
    { name: 'burrito', url: img_burrito },
    { name: 'salad', url: img_salad },
    { name: 'cake', url: img_cake },
    { name: 'soup', url: img_soup },
    { name: 'fish', url: img_fish },
    { name: 'pizza', url: img_pizza },
    { name: 'rice', url: img_rice }
])

</script>

<style scoped>
img {
    display: inline-block;
    width: 100px;
    height: auto;
    margin: 10px;
    padding: 10px;
    align-items: center;
}

.bg {
    width: 200px;
    height: 50px;
    background-color: aqua;
    align-items: center;
}


.menu {
    border: dashed greenyellow 1px;
    width: 90%;
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>