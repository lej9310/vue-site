<template>
    <div id="app">
        <!-- 1. 헤더영역 ================================================ -->
        <header>
            <div class="logo">
                <a href="#">Green<br>복지재단</a>
            </div>
            <!-- 메뉴영역 -->
            <nav class="menu">
                <ul class="main-menu">
                    <li v-for="menu in menus" :key="menu.name" @mouseenter="showSubMenu(menu.name)"
                        :class="{ active: activeMenu === menu.name }">
                        <a href="#" class="main-menu-link">{{ menu.name }}</a>
                    </li>
                </ul>

                <div v-if="activeMenu" @mouseenter="showSubMenu(activeMenu)" @mouseleave="hideSubMenu(activeMenu)">
                    <div v-for="menu in menus" :key="menu.name" class="sub-menu-column"
                        :class="{ highlighted: activeMenu === menu.name }">
                        <ul>
                            <li v-for="sub in menu.submenus" :key="sub" class="sub-menu-item">
                                {{ sub }}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <!-- 2. 슬라이드 영역 ================================================ -->
        <section class="slide-container">
            <ul class="slide-list" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <li v-for="(slide, index) in slides" :key="index" class="slide-item">
                    <img :src="slide.image" :alt="slide.text" />
                    <div class="slide-text">{{ slide.text }}</div>
                </li>
            </ul>
        </section>
        <!-- 3. 컨텐츠 영역 ================================================ -->
        <section class="contents-grid">

            <!-- 1번째 그리드: 공지사항 -->
            <div class="notice">
                <h2>공지사항</h2>
                <div class="notice-content">
                    <ul>
                        <li @click="openPopup">첫 번째 공지사항 내용 (클릭 시 레이어 팝업)</li>
                        <li>두 번째 공지사항 내용</li>
                        <li>세 번째 공지사항 내용</li>
                    </ul>
                </div>

                <!-- 팝업 레이어 -->
                <div v-if="popupVisible" class="popup-layer">
                    <div class="popup-content">
                        <h3>공지사항 상세 내용</h3>
                        <p>여기에 상세 공지사항 내용을 작성하세요.</p>
                        <button @click="closePopup">닫기×</button>
                    </div>
                </div>
            </div>

            <!-- 2번째 그리드: 갤러리 -->
            <div class="gallery">
                <h2>갤러리</h2>
                <div class="gallery-tab">
                    <img v-for="(img, index) in galleryImages" :key="index" :src="img"
                        alt="`gallery Image ${index + 1}`" />
                </div>

            </div>

            <!-- 3번째 그리드: 배너 -->
            <div class="banner">
                <h2>바로가기</h2>
                <ul>
                    <li><a href="#">신상품</a></li>
                    <li><a href="#">베스트셀러</a></li>
                    <li><a href="#">이벤트</a></li>
                    <li><a href="#">고객센터</a></li>
                </ul>
            </div>
        </section>

        <!-- 4. footer 영역 ===============================  -->
        <footer class="site-footer">
            <div class="footer-inner">

                <!-- 로고 -->
                <div class="footer-logo">
                    <a href="#">Green 복지재단</a>
                </div>
                <!-- 저작권 -->
                <div class="copy-rights">
                    <p>© 2025 YourCompany. All rights reserved.</p>
                </div>

                <!-- SNS 3개 -->
                <nav class="sns" aria-label="소셜 미디어 링크">
                    <ul>
                        <li>
                            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener" aria-label="페이스북">
                                <img src="../assets/facebook.png" alt="Facebook 아이콘" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/yourpage" target="_blank" rel="noopener" aria-label="트위터">
                                <img src="../assets/twitter.gif" alt="Twitter 아이콘" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener" aria-label="인스타그램">
                                <img src="../assets/instagram.png" alt="Instagram 아이콘" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>

    </div>

</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import gallery1 from '../assets/welfare-gallery/welfare1.jpg'
import gallery2 from '../assets/welfare-gallery/welfare2.jpg'
import gallery3 from '../assets/welfare-gallery/welfare3.jpg'


// 메뉴 영역 ======================= 
const activeMenu = ref(null)

const menus = [
    { name: '재단소개', submenus: ['설립취지', '연력', '찾아오시는길'] },
    { name: '후원하기', submenus: ['국내후원', '국외후원', '맞춤후원'] },
    { name: '자료실', submenus: ['서식자료실', '사진자료실', '후원양식'] },
    { name: '스토리', submenus: ['웹진', '보고서', '나의 후원'] },
]

function showSubMenu(name) {
    activeMenu.value = name
}

function hideSubMenu(name) {
    if (activeMenu.value === name) {
        activeMenu.value = null
    }
}

// 슬라이드 영역 ===================
const currentIndex = ref(0)
const autoSlideInterval = ref(null)

const slides = [
    { image: new URL('../assets/welfare1.jpg', import.meta.url).href, text: '어머니의 품, 나눔의손길 복지재단' },
    { image: new URL('../assets/welfare2.jpg', import.meta.url).href, text: '큰 산과 같은 투철한 봉사정신, 남양주시 복지재단' },
    { image: new URL('../assets/welfare3.jpg', import.meta.url).href, text: '따뜻함과 희망의 상징, 서울시 복지재단' },
]

function nextSlide() {
    currentIndex.value = (currentIndex.value + 1) % slides.length
}

onMounted(() => {
    autoSlideInterval.value = setInterval(() => {
        nextSlide()
    }, 2000)
})

onBeforeUnmount(() => {
    clearInterval(autoSlideInterval.value)
})

// 갤러리 & 공지사항 ================
const galleryImgs = import.meta.glob('../assets/welfare-gallery/*.jpg', { eager: true })
const galleryImages = Object.values(galleryImgs).map(module => module.default)

const galleryTabs = ref([
    { title: 'gallery 1', image: gallery1 },
    { title: 'gallery 2', image: gallery2 },
    { title: 'gallery 3', image: gallery3 },
])

const activeTab = ref(0)

const popupVisible = ref(false)

function openPopup() {
    popupVisible.value = true
}

function closePopup() {
    popupVisible.value = false
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

<style scoped>

/* 전체 기본 설정 =================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    color: #333333;
}

/* 헤더 ====================================================================== */
header {
    width: 1200px;
    height: 100px;
    background-color: #333333;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    /* display: flex;
    justify-content: center; */
    display: grid;
    grid-template-columns: 1.5fr 5fr;
    align-items: center;
    z-index: 10;
}

.logo a {
    width: 200px;
    height: 40px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffee00;
    display: inline-block;
    line-height: 40px;
    margin-right: 40px;
    text-decoration: none;
}

/* 메뉴 ====================================================================== */
.menu {
    position: relative;
    flex-grow: 1;
}

.main-menu {
    list-style: none;
    display: flex;
    gap: 50px;
    margin: 0;
    padding-left: 30px;
}

.main-menu a {
    padding: 10px 50px;
}

.main-menu>li {
    position: relative;
    cursor: pointer;
}

.main-menu-link {
    text-decoration: none;
    font-weight: bold;
    color: #ffffff;
    padding: 10px 5px;
    display: inline-block;
    transition: color 0.3s;
}

.menu li.active>.main-menu-link,
.menu li:hover>.main-menu-link {
    color: #ffee00;
    border-bottom: 2px solid #ffee00;
}

.menu>div {
    position: absolute;
    top: 160%;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    gap: 20px;
    padding: 20px 10px;
    z-index: 9999;
    border-top: 1px solid #ddd;
}

.sub-menu-column {
    min-width: 120px;
}

.sub-menu-column.highlighted {
    font-weight: 700;
    color: #000000;
    background-color: #d4d4d494;
}

.sub-menu-column ul {
    list-style: none;
    margin: 0 5px;
    padding: 0 50px;
}

.sub-menu-item {
    padding: 6px 0;
    cursor: pointer;
    color: #555;
    transition: color 0.2s;
}

.sub-menu-item:hover {
    color: #000000;
    border-bottom: 2px solid #000000;
}

/* 슬라이드 =================================================*/
.slide-container {
    position: relative;
    width: 1200px;
    height: 300px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    background: #333333;
    user-select: none;
    z-index: 1;
}

.slide-list {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
}

.slide-item {
    min-width: 100%;
    height: 100%;
    position: relative;
}

.slide-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 8px;
}

.slide-text {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 28px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    background: rgba(0, 0, 0, 0.3);
    padding: 12px 20px;
    border-radius: 6px;
    max-width: 85%;
    text-align: center;
    pointer-events: none;
    font-family: inherit;
    width: 60%;
}

.nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.7);
    border: none;
    padding: 10px 18px;
    font-size: 32px;
    color: #333333;
    cursor: pointer;
    border-radius: 50%;
    user-select: none;
    transition: background-color 0.3s ease;
    z-index: 10;
}

.nav:hover {
    background: rgba(255, 255, 255, 1);
}

.prev {
    left: 20px;
}

.next {
    right: 20px;
}

/* 컨텐츠 영역 ==========================================================  */
.contents-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 1200px;
    height: 200px;
    margin: 40px auto;
    /* overflow-y: auto; */
}

.notice,
.gallery,
.banner {
    background: #f9f9f9;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 2px 2px 6px #333333;
    height: 100%;
    width: 100%;
}

.contents-grid>h2 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    font-weight: 700;
}

/* 1번째 그리드: 공지사항 ============= */
.notice-content ul {
    list-style-type: none;
    cursor: pointer;
    text-align: justify;
    margin: 5px;
    padding: 5px;
}

.notice-content li {
    border: 1px solid #333333;
    border-radius: 15px;
    background-color: #333333;
    padding: 10px 15px;
    margin-bottom: 10px;
    color: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3)
}

.notice-content li:hover {
    color: #ffee00;
}

/* 팝업 레이어 스타일 */
.popup-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.popup-content {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    width: 400px;
    max-width: 90%;
    position: relative;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.popup-content>button {
    font-size: 15px;
    cursor: pointer;
    border: 1px solid #333333;
    background-color: #00326b;
    color: #ffffff;
    margin-top: 20px;
    padding: 5px 15px;
}

/* 갤러리 ============= */
.gallery-tab {
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    overflow-x: auto;
    align-items: center;
}

.gallery-tab img {
    max-height: 150px;
    object-fit: cover;
    cursor: pointer;
    flex-shrink: 0;
}

/* 배너 ============== */
.banner ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    cursor: pointer;
    margin: 10px;
    padding: 0;
    gap: 10px;
}

.banner ul li {
    flex: 0 0 calc(50% - 10px);
}

.banner li a {
    display: block;
    width: 100%;
    border: 1px solid #333333;
    border-radius: 15px;
    background-color: #00326b;
    padding: 15px;
    margin: 10px 0;
    color: #ffffff;
    box-sizing: border-box;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3)
}

.banner li a:hover {
    color: #ffee00;
}

/* Footer =================================== */
.site-footer {
    margin-top: 20px;
    background-color: #222;
    color: #ccc;
    padding: 20px 40px;
    font-size: 1rem;
}

.footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
}

.footer-logo a {    
    font-weight: bold;
    color: #ffee00;    
}

.copy-rights p {
    margin: 0;
}

.sns ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 15px;
}

/* SNS 아이콘 링크 */
.sns a {
    display: inline-block;
    width: 32px;
    height: 32px;
}

.sns a img {
    width: 100%;
    height: 100%;
    transition: filter 0.3s ease;
}

.sns a:hover img,
.sns a:focus img {
    filter: brightness(1.2);
    outline: none;
}
</style>