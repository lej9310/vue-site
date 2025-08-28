<template>
  <!-- 1단계: day 버튼 -->
  <div class="btn">
    <button v-show="activeDay === 'day2' || !activeDay" @click="selectDay('day2')">day2_08.25</button>
    <button v-show="activeDay === 'day3' || !activeDay" @click="selectDay('day3')">day3_08.26</button>
    <button v-show="activeDay === 'day4' || !activeDay" @click="selectDay('day4')">day4_08.27</button>
    <button v-if="activeDay" @click="activeDay = null; activeComp = null" id="backBtn">뒤로가기</button>
  </div>

  <!-- 2단계: 선택한 day 에 따른 Ex 버튼 목록 -->
  <div class="comp-btn">
    <button v-for="ex in pages[activeDay]" :key="ex.label" @click="selectEx(ex)">
      {{ ex.label }}
    </button>
  </div>

  <!-- 3단계: 선택한 Ex 컴포넌트 표시 -->
  <div v-if="activeComp" id="comp_view">
    <KeepAlive>
      <component :is="activeComp" />
    </KeepAlive>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Ex1 from '../comp/day2_0825/D1_bind.vue';
import Ex2 from '../comp/day2_0825/D2_if.vue';
import Ex3 from '../comp/day2_0825/D3_show.vue';
import Ex4 from '../comp/day2_0825/D4_for.vue';
import Ex5 from '../comp/day2_0825/D5_event.vue';
import Ex6 from '../comp/day2_0825/D6_methods.vue';
import Ex4_2 from '../comp/day4_0827/D4_for.vue';
import Ex5_2 from '../comp/day4_0827/D5_events.vue';
import Ex6_2 from '../comp/day4_0827/D6_methods.vue';
import Ex7 from '../comp/day4_0827/D7_model.vue';
import Ex8 from '../comp/day4_0827/D8_computed.vue';
import Ex9 from '../comp/day4_0827/D9_watchers.vue';
import Ex10 from '../comp/day4_0827/D10_props.vue';

const pages = {
  day2: [
    { label: 'v-bind', comp: Ex1 },
    { label: 'v-if', comp: Ex2 },
    { label: 'v-show', comp: Ex3 },
    { label: 'v-for', comp: Ex4 },
    { label: 'Events/v-on', comp: Ex5 },
    { label: 'methods', comp: Ex6 },
  ],
  day4: [
    { label: 'v-for', comp: Ex4_2 },
    { label: 'Events/v-on', comp: Ex5_2 },
    { label: 'methods', comp: Ex6_2 },
    { label: 'Model', comp: Ex7 },
    { label: 'computed', comp: Ex8 },
    { label: 'watchers', comp: Ex9 },
    { label: 'props', comp: Ex10 },
  ],
}

const activeDay = ref(null)
const activeComp = ref(null)

// day 버튼 클릭 시 해당 day 선택, Ex 컴포넌트 초기화
function selectDay(dayKey) {
  activeDay.value = dayKey
  activeComp.value = null
}

// Ex 버튼 클릭 시 컴포넌트 선택
function selectEx(ex) {
  activeComp.value = ex.comp
}
</script>

<style scoped>
button {
  border-radius: 10px;
  cursor: pointer;
  margin: 15px auto;
  width: 140px;
  font-weight: bold;
  box-shadow: 3px 2px 2px 2px gray;
}

.btn>button {
  display: block;
  border: 1px solid green;
  background-color: rgb(146, 244, 0);
}

#backBtn {
  display: block;
  border: 1px solid rgb(0, 0, 187);
  border-radius: 30px;
  background-color: rgb(0, 94, 217);
  color: white;
}

.comp-btn {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.comp-btn>button {
  gap: 50px;
  background-color: lightpink;
  border: 1px solid darkred;
}

#comp_view {
  width: 100%;
  margin-top: 20px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
}
</style>