<template>
    <h4>@click 이벤트: text 바꾸기</h4>
    <div class="bg" @click="changeText">
        {{ text }}
    </div>

    <h4>@mousemove 이벤트: 위치 속성 삽입</h4>
    <div class="bg" @mousemove="mousePos1">
        <p>xPos{{ xPos }} --- ypos{{ yPos }}</p>
    </div>

    <h4>Passing Arguments</h4>
    <div class="bg">
        <img src="../assets/img_moose.jpg" alt="img_moose">
        <p>{{ "Moose count: " + count }}</p>
        <button @click="addCount(1)">+1 증가</button>
        <button @click="addCount(5)">+5 증가</button>
        <button @click="addCount(-1)">-1 감소</button>
    </div>

    <h4>아래 호랑이 그림을 눌러보세요~</h4>
    <div class="bg">
        <img id="tiger" @click="myMethod($event, '안녕')" :src="tiger" alt="img_tiger">
        <p>{{ msgAndId }}</p>
    </div>
    <hr>

    <div class="bg">
        <p>method를 실행하려면 박스를 클릭하세요!</p>
        <div class="box" @click="chgTxt">
            {{ text }}
        </div>
    </div>
    <hr>

    <div class="bg">
        <p>마우스 포인터를 박스 위에서 움직여 보세요!<br>현재 위치 정보가 나옵니다~</p>
        <div class="box" @mousemove="mousePos" ref="boxRef">
            xPos: {{ xPos }} <br>
            yPos: {{ yPos }}
        </div>
    </div>
    <hr>

    <div class="bg">
        <p>마우스 포인터를 박스 위에서 움직여 보세요!<br>현재 위치에 따라 배경색이 바뀝니다~</p>
        <div class="box" @mousemove="mousePos" :style="{ backgroundColor: 'hsl(' + xPos + ',80%,80%)' }" ref="boxRef">
            xPos: {{ xPos }} <br>
            yPos: {{ yPos }}
        </div>
        <h4>backgroundColor:`hsl(<strong>{{ xPos }}</strong>, 80%, , 80%)`</h4>
        <p>CSS에서 'hsl()'을 이용하여 색상 설정하는 법을 알고 싶다면 <a href="https://www.w3schools.com/css/css_colors_hsl.asp"
                target="_blank">이 페이지</a>를 참조하세요.</p>
    </div>
    <hr>

    <div class="bg">
        <p>박스 안에 텍스트를 작성해 보세요.</p>
        <p>공책에 입력한 텍스트가 작성됩니다~</p>
        <textarea @input="writeText" rows="8" cols="30" placeholder="여기에 작성을 시작해보세요..."></textarea>
        <div class="note">
            <span>{{ text }}</span>
        </div>
    </div>
    <hr>

</template>

<script setup>
import { ref } from 'vue';
import tiger from "../assets/img_tiger.jpeg";

const text = ref('')
const changeText = () => {
    text.value = 'Hello World!'
}
const xPos = ref(0)
const yPos = ref(0)
const mousePos1 = (e) => {
    xPos.value = e.offsetX
    yPos.value = e.offsetY
}
const boxRef = ref(null)
const count = ref(0)
const addCount = (num) => {
    count.value += num
}
const msgAndId = ref('')
const myMethod = (e, msg) => {
    msgAndId.value = `${e.target.id}야, ${msg} 좋은 하루~!`
}


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

function writeText(e) {
    text.value = e.target.value
}
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

.bg>img {
    width: 150px;
    height: auto;
}

p {
    background-color: rgba(159, 183, 244, 0.759);
    font-weight: bold;
    margin: 0;
}

button {
    border: 1px solid gray;    
    width: 100px;
    margin: 5px 15px;
    align-items: center;
    font-weight: bold;
    background-color: darkgreen;
    color: white;
    box-shadow: 0 0 1.5px grey;
}

.box {
    width: 250px;
    border: black dotted 1px;
    padding: 0 20px 20px 20px;
    margin: 5px auto;
    align-items: center;
    cursor: pointer;
    height: 60px;
    background-color: lightgreen;
    padding: 10px;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;

}

.note {
    width: 100%;
    position: relative;
    margin-top: 10px;
    aspect-ratio: 1;
    background-image: url("../assets/img_notebook.jpg");
    background-size: 300%;
    background-position: -500px 0;
    overflow: hidden;
}

span {
    width: 80%;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    line-height: 1.2em;
    transform-origin: 0 0;
    rotate: 33deg;
    position: absolute;
    top: 50px;
    left: 70px;
}
</style>