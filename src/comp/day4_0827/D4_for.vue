<template>
    <h3>List Rendering</h3>
    <div>
        <ol>
            <li v-for="foods in FoodList">
                {{ foods }}
            </li>
        </ol>
    </div>
    <hr>

    <!-- <h3>Loop Through an Array</h3>
    <div>
        <img v-for="foods in FoodList2" :src="foods" alt="Food List 2">
    </div>
    <hr> -->

    <!-- <h3>Loop Through Array of Objects</h3>
    <div></div>
    <hr>

    <h3>Get the index</h3>
    <div></div>
    <hr>

    <h3>Get the index</h3>
    <div></div>
    <hr> -->


</template>

<script setup>
import { ref } from 'vue';
// import 'burrito' from '../assets/img_burrito.svg'
// import 'salad' from '../assets/img_salad.svg'
// import 'cake' from '../assets/img_cake.svg'


// array는 수정이 빈번하기 때문에 name/src를 적용하는 것이 좋음
const FoodList = ref([
    'Burrito',
    'Salad',
    'Cake',
    'Soup',
    'Fish',
    'Pizza',
    'Rice'
])

</script>

<style scoped>
div {
    border: dashed greenyellow 1px;
    width: 90%;
    margin: 5px auto;
    display: flex;
    flex-wrap: wrap;
}
</style>