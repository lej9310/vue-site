<template>
    <!-- 이미지 import -->
    <img v-bind:src="img_beach3" alt="img_beach3">
    <hr>

    <!-- Vue v-bind:style 글자값-->
    <div v-bind:style="{ fontsize: size }">
        너는 v-bind: 글자크기 속성이야
    </div>

    <div v-bind:style="{ fontsize: size2 + 'px' }">
        너는 v-bind: 글자값 속성이야
    </div>

    <div v-bind:style="{ 'font-size': size3 + 'px' }">
        너는 v-bind:css 글자크기 속성이야
    </div>
    <hr>

    <!-- v-bind:style 색상값 -->
    <div v-bind:style="{ backgroundColor: `rgb(${bgVal}, 100, 100)`, color: `${fontCol}` }">
        백그라운드 색상값을 변수로 적용
    </div>
    <div v-bind:style="{ backgroundColor: isImportant ? 'lightcoral' : 'lightgray' }">
        백그라운드 색상값을 조건에 따라 다르게 설정
    </div>
    <hr>

    <!-- v-bind:class -->
    <div v-bind:class="className">
        클래스 바인드
    </div>
    <div v-bind:class="{ myClass: true }">
        클래스 true false 바인드
    </div>
    <div :class="{ myClass: isImportant }">
        클래스 Important 속성 여부
    </div>
</template>

<script setup>
import { ref } from "vue";
import img_beach3 from "./assets/img_beach3.jpg"

// 안 뜨면 import 했는지 확인하자
const size = ref("20px")
const size2 = ref("30")
const size3 = ref("40")
const bgVal = ref("180")
const fontCol = ref("white")
const isImportant = ref(true)
const className = ref("impClass")
</script>

<style scoped>
.myClass {
    background-color: yellow;
}

.impClass {
    background-color: aqua;
    border: 3px dashed purple;
}

img {
    width: 100px;
    height: 100px;
}
</style>