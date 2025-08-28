<template>
    <div class="bg">
        <p>중요 항목 여부
                <label>
                    <input type="checkbox" v-model="chVal">
                    {{ IsImportant }}
                </label>
            </p>        
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const chVal = ref(false)
const IsImportant = computed(
    () => {
        if (chVal.value) {
            return '중요'
        } else {
            return '보통'
        }
    }
)
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

label {
    padding: 5px;
}

label:hover {
    cursor: pointer;
    background-color: lightgray;
    border-radius: 5px;
}
</style>