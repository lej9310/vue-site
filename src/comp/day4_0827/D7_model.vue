<template>
    <h4>Two-way Binding</h4>
    <div class="bg">
        <input type="text" v-model="inpText">
        <p>{{ inpText }}</p>
    </div>
    <hr>

    <h4>A Dynamic Checkbox</h4>
    <div class="bg">
        <form>
            <p>Important Item?
                <label>
                    <input type="checkbox" v-model="important">
                    {{ important }}
                </label>
            </p>
        </form>
    </div>
    <hr>

    <h4>Mark Found Items in The Shopping List</h4>
    <div class="bg">
        <form @submit.prevent="addItem">
            <p>구매 목록:
                <input type="text" required placeholder="품목 이름..." v-model="itemName"></input>
            </p>
            <p>품목 갯수:
                <input type="number" placeholder="품목 갯수..." v-model="itemNumber"></input>
            </p>
            <p>중요도 :
                <label>
                    <input type="checkbox" v-model="itemImportant">
                    {{ itemImportant }}
                </label>
            </p>
        </form>
        <button type="submit" @click="addItem">품목 추가</button>
        <hr>

        <p><strong>[ 쇼핑 목록 ]</strong></p>
        <ul id="ulToFind">
            <li v-for="item in shoppingList" v-bind:class="{ impClass: item.important }"
                @click="item.found = !item.found" v-show="!item.found">
                품목명:{{ item.name }},<br>
                갯수: {{ item.number }},<br>
                중요도: {{ item.important }}
            </li>
        </ul>
        <ul id="ulFound">
            <li v-for="item in shoppingList" v-bind:class="{ impClass: item.important }"
                @click="item.found = !item.found" v-show="item.found">
                품목명:{{ item.name }},<br>
                갯수: {{ item.number }},<br>
                중요도: {{ item.important }}
            </li>
        </ul>
    </div>
    <hr>

    <h4>Use v-model to make The Form Itself Dynamic</h4>
    <div class="bg">
        <form v-on:submit.prevent="addMenu">
            <p>
            <h4>[ 주문표 ]</h4>
            <label>
                <input type="radio" required value="Dinner" v-model="menuType" name="rgbType">
                Dinner
            </label><br>
            <label>
                <input type="radio" required value="Drink" v-model="menuType" name="rgbType">
                Drink
            </label><br>
            <label>
                <input typeof="radio" required value="Dessert" v-model="menuType" name="rgbType">
                Dessert
            </label><br>
            </p>
            <p v-show="itemType">
                <label>
                    <select required v-model="menuName" @change="newUrl">
                        <option value="" selected disabled>메뉴를 고르세요.</option>
                        <option v-for="menu in MenuList" v-bind:value="menu.name" v-show="menu.type === menuType"
                            v-bind:data-url="menu.imgUrl">
                            {{ menu.name }}
                        </option>
                    </select>
                </label>
            </p>
            <img v-bind:src="menuUrl">
            <p v-show="menuName">
                <input type="number" placeholder="수량을 입력하세요." v-model="menuNumber" required>
            </p>
            <button type="submit">주문하기</button>
        </form>
        <br>
        <hr>

        <div>
            <h4>[ 주문 내역 ]</h4>
            <ul id="ulToFind">
                <li v-for="menu in order">
                    메뉴명: {{ menu.name }},
                    수량: {{ menu.number }}
                    <img v-bind:src="menu.url" alt="menu">
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
// import img_burrito from '../assets/img_burrito.svg'
// import img_pizza from '../assets/img_pizza.svg'
// import img_soup from '../assets/img_soup.svg'
// import img_spaghetti from '../assets/img_spaghetti.svg'
// import img_fish from '../assets/img_fish.svg'
// import img_cake from '../assets/img_cake.svg'
// import img_rice from '../assets/img_rice.svg'
// import img_salad from '../assets/img_salad.svg'
// import img_soda from '../assets/img_soda.svg'
// import img_greenSoda from '../assets/img_greenSoda.svg'
// import img_doughnut from '../assets/img_doughnut.svg'
// import img_iceCream from '../assets/img_iceCream.svg'
// import img_lemonade from '../assets/img_lemonade.svg'
// import img_pancakes from '../assets/img_pancakes.svg'
// import img_water from '../assets/img_water.svg'

const inpText = ref('Initial Text')
const important = ref(false)

const itemName = ref(null)
const itemNumber = ref(null)
const itemImportant = ref(false)
const shoppingList = ref([
    {
        name: 'Tomatoes',
        number: 5,
        important: false
    },
    {
        name: 'Bread',
        number: 1,
        important: false
    },
    {
        name: 'Soap',
        number: 1,
        important: true,
        found: true
    }
])

const menuType = ref('')
const menuName = ref('')
const menuUrl = ref('')
const menuNumber = ref(null)
const MenuList = ref([
    { name: 'Burrito', type: 'Dinner', imgUrl: img_burrito },
    { name: 'Pizza', type: 'Dinner', imgUrl: img_pizza },
    { name: 'Pho Soup', type: 'Dinner', imgUrl: img_soup },
    { name: 'Spaghetti', type: 'Dinner', imgUrl: img_spaghetti },
    { name: 'Fish', type: 'Dinner', imgUrl: img_fish },
    { name: 'Cake', type: 'Dessert', imgUrl: img_cake },
    { name: 'Rice', type: 'Dinner', imgUrl: img_rice },
    { name: 'Salad', type: 'Dinner', imgUrl: img_salad },
    { name: 'Coke', type: 'Drink', imgUrl: img_soda },
    { name: 'Green Soda', type: 'Drink', imgUrl: img_greenSoda },
    { name: 'Doughnut', type: 'Dessert', imgUrl: img_doughnut },
    { name: 'Ice Cream', type: 'Dessert', imgUrl: img_iceCream },
    { name: 'Lemonade', type: 'Drink', imgUrl: img_lemonade },
    { name: 'Pancakes', type: 'Dessert', imgUrl: img_pancakes },
    { name: 'Water', type: 'Drink', imgUrl: img_water }
])

function addItem() {
    let item = {
        name: itemName.value,
        number: itemNumber.value,
        important: itemImportant.value,
        found: false
    }
    shoppingList.value.push(item)
    itemName.value = null
    itemNumber.value = null
    itemImportant.value = false
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

form {
    margin-left: 60px;
    text-align: left;
}

label {
    padding: 5px;
}

label:hover,
li:hover {
    cursor: pointer;
    background-color: lightgrey;
}

button {
    display: block;
    margin: 20px auto;
    border: 1px solid black;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 5px;
}

li {
    border: 2px dotted gray;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: rgba(128, 128, 128, 0.486);
    text-align: left;
}

.impClass {
    border: 2px dotted darkred;
    background-color: rgba(253, 139, 139, 0.61);
    font-weight: bold;
}

#ulFound li {
    text-decoration: line-through;
    background-color: lightgoldenrodyellow;
}
</style>