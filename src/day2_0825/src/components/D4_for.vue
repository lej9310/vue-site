<!-- vbase-3-setup -->
<template>
    <div>
        <ol>
            <li v-for="x in FoodList">{{ x }}</li>
        </ol>
    </div>
    <hr>

    <div class="menu">
        <img v-for="(src, x) in FoodList2" :src="src" :key="x" alt="Food List">
    </div>
    <hr>

    <p>이미지와 설명(캡션)</p>
    <div class="menu">
        <figure v-for="x in FoodList3" :key="x.name">
            <img :src="x.url" alt="Food List 3">
            <figcaption>{{ x.name }}</figcaption>
        </figure>
    </div>
    <hr>
</template>

<script setup>
import { ref } from 'vue';
import img_burrito from '../assets/img_burrito.svg'
import img_salad from '../assets/img_salad.svg'
import img_cake from '../assets/img_cake.svg'
import img_soup from '../assets/img_soup.svg'
import img_fish from '../assets/img_fish.svg'
import img_pizza from '../assets/img_pizza.svg'
import img_rice from '../assets/img_rice.svg'

const FoodList = ref([
    'Burrito',
    'Salad',
    'Cake',
    'Soup',
    'Fish',
    'Pizza',
    'Rice'])

const FoodList2 = ref([
    img_burrito,
    img_salad,
    img_cake,
    img_soup,
    img_fish,
    img_pizza,
    img_rice
])

const FoodList3 = ref([
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
    width: 100px;
    height: 50px;
    margin: 10px;
    padding: 10px;
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

figure img {
  display: inline-block;
  max-width: 50%;
  height: auto;
}

figure {
    width: 100px;
    padding: 10px;
    margin: 10px;
    background-color: lightskyblue;
    border-radius: 5px;
    text-align: center;
}

figcaption {
    text-align: center;
}
</style>