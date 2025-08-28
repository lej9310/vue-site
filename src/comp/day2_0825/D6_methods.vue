<template>
    <div>
        <p>method를 실행하려면 박스를 클릭하세요!</p>
        <div class="box" @click="chgTxt">
            {{ text }}
        </div>
    </div>
    <hr>

    <div>
        <p>마우스 포인터를 박스 위에서 움직여 보세요!<br>현재 위치 정보가 나옵니다~</p>
        <div class="box" @mousemove="mousePos" ref="boxRef">
            xPos: {{ xPos }} <br>
            yPos: {{ yPos }}
        </div>
    </div>
    <hr>

    <div>
        <p>마우스 포인터를 박스 위에서 움직여 보세요!<br>현재 위치에 따라 배경색이 바뀝니다~</p>
        <div class="box" @mousemove="mousePos" :style="{ backgroundColor: 'hsl(' + xPos + ',80%,80%)' }" ref="boxRef">
            xPos: {{ xPos }} <br>
            yPos: {{ yPos }}
        </div>
        <p>backgroundColor:`hsl(<strong>{{ xPos }}</strong>, 80%, , 80%)`</p>
        <p>CSS에서 'hsl()'을 이용하여 색상 설정하는 법을 알고 싶다면 <a href="https://www.w3schools.com/css/css_colors_hsl.asp"
                target="_blank">이 페이지</a>를 참조하세요.</p>
    </div>
    <hr>

    <div>
        <p></p>
    </div>
    <hr>

</template>

<script setup>
import { ref } from 'vue';

const text = ref('')
const boxRef = ref(null)
const xPos = ref(0)
const yPos = ref(0)

function chgTxt() {
    text.value = 'Hello World!'
}

function mousePos(event) {
    // 박스 요소의 뷰포트 기준 위치(왼쪽, 위, 너비, 높이)를 반환
    const box = boxRef.value.getBoundingClientRect()
    // event.clientX: 뷰포트 기준 마우스 현재 위치
    // 박스 좌측 상단 좌표 가져오기
    // florr(): 좌표 정수로 변환(소수점 버림)
    xPos.value = Math.floor(event.clientX - box.left)
    yPos.value = Math.floor(event.clientY - box.top)
    // 음수 0으로 보정
    if (xPos.value < 0) xPos.value = 0
    if (yPos.value < 0) yPos.value = 0
}
</script>

<style scoped>
div {
    border: dashed greenyellow 1px;
    width: 90%;
    padding: 5px;
    margin: 10px auto;
}

p {
    background-color: rgba(159, 183, 244, 0.759);
    line-height: 1.5;
    font-weight: bold;
}

span {
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    margin: 20px;
}

.box {
    border: black dotted 1px;
    padding: 0 20px 20px 20px;
    margin: 5px auto;
    align-items: center;
    cursor: pointer;
    width: 180px;
    height: 60px;
    background-color: lightgreen;
    padding: 10px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;

}
</style>