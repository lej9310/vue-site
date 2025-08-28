<template>
    <div class="wrapper">
        <!-- v-for: FoodItem 배열을 순회하며 각 요소를 item 변수에 할당, key로 고유 식별자 지정 -->
        <div v-for="(item, index) in FoodItem" :key="index">
            <h2>
                {{ item.foodName }}
                <!-- v-show: item 변수의 IsFavorite이 True 인 것에만 img 보여주기-->
                <img src="./assets/img_quality.svg" v-show="item.IsFavorite" alt="img_quality">
            </h2>
            <p>{{ item.foodDesc }}</p>
            <button @click="toggleFavorite(index)">Favorite</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const IsFavorite = ref(false)

const FoodItem = ref([
    { foodName: '사과', foodDesc: "사과는 나무에서 나는 과일이다.", IsFavorite: "true" },
    { foodName: '피자', foodDesc: "피자는 토마토 소스, 치즈, 토핑들을 뿌린 빵이다.", IsFavorite: "false" },
    { foodName: '쌀', foodDesc: "쌀은 사람들이 좋아하는 곡물이다.", IsFavorite: "false" }
])

function toggleFavorite(index) {
    FoodItem.value[index].IsFavorite = !FoodItem.value[index].IsFavorite
}
</script>

<style scoped>
.bg {
    width: 90%;
    min-height: 50px;
    padding: 5px;
    margin: 10px auto;
    display: inline-block;
    border: 3px double darkkhaki;
    background-color: lightgoldenrodyellow;
    line-height: 1.5;
    font-weight: bold;
}

img {
    height: 1.5em;
    float: right;
}

p{
    height: 100px;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
}

.wrapper>div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
}

</style>