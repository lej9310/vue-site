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

    <div>
        <figure v-for="x in FoodList3">
            <img v-bind:src="x.url">
            <figcaption>{{x.name}}</figcaption>
        </figure>
    </div>
    <hr>
</template>

<script setup>
import { ref } from 'vue';
import img_burrito from '../assets/img_pizza.svg'
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
    {name: img_burrito, url:'img_burrito'}   
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
</style>