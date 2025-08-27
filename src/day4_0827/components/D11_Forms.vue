<template>
    <div class="bg">
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r1" value="HTML" name="radio" />
            HTML
        </label>
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r2" value="CSS" name="radio" />
            CSS
        </label>
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r3" value="JS" name="radio" />
            JS
        </label>
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r4" value="React" name="radio" />
            React
        </label>
        <label>
            <input @change="handleChange" v-model="selected" type="radio" id="r5" value="Vue" name="radio" />
            Vue
        </label>
        <p>선택된 값: {{ selected }}</p>
        <p>선택된 ID값: {{ selectedID }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selected = ref('HTML')
const selectedID = ref('')

const handleChange = (e) => {
    selectedID.value = e.target.id
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
</style>