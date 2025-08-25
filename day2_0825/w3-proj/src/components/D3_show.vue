<!-- vbase-3-setup -->
<template>
    <!-- elements hide/show -->
    <div v-show="showDiv">이 element는 감출 수 있어요~</div>
    <hr>

    <!-- 'if' vs 'show' -->
    <p>Set the 'showDiv' data property to 'false', and run the code again. Right click this green p element, choose
        'Inspect' or 'Inspect element' and you can see that the div element with v-show still exist, it is only the
        CSS display property that is set to 'none', and the div with v-if is destroyed.
    </p>
    <div v-show="showDiv">div tag show/hide</div>
    <div v-if="showDiv">div tag create/no-create</div>
</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(false)

</script>

<style scoped>
div {
    margin: 10px;
    padding: 10px;
    display: inline-block;
    border: solid black 1px;
    font-weight: bold;
}
</style>