<template>
    <div id="app">
        <!-- 1. 헤더영역 ================================================ -->
        <header>
            <div class="header-inner">
                <div class="logo">
                    <a href="#">LEJ Mall</a>
                </div>

                <nav class="menu">
                    <ul>
                        <li v-for="menu in menus" :key="menu.name" @mouseenter="showSubMenu(menu.name)"
                            @mouseleave="hideSubMenu(menu.name)" :class="{ active: activeMenu === menu.name }">

                            <a href="#" class="main-menu-link">{{ menu.name }}</a>

                            <!-- 부드러운 서브메뉴 나오기 -->
                            <transition name="fade-slide">
                                <ul v-if="activeMenu === menu.name" class="sub-menu">
                                    <li v-for="sub in menu.submenus" :key="sub">
                                        {{ sub }}
                                    </li>
                                </ul>
                            </transition>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <!-- 2. 슬라이드 영역 ================================================ -->
        <section class="slide-container">
            <ul class="slide-list" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <li v-for="(slide, index) in slides" :key="index" class="slide-item">
                    <img :src="slide.image" :alt="slide.text" />
                    <div class="slide-text">{{ slide.text }}</div>
                </li>
            </ul>

            <button class="nav prev" @click="prevSlide" aria-label="이전 슬라이드">&#10094;</button>
            <button class="nav next" @click="nextSlide" aria-label="다음 슬라이드">&#10095;</button>
        </section>

        <!-- 3. 컨텐츠 영역 ================================================ -->
        <section class="contents-grid">

            <!-- 1번째 그리드: 공지사항 + 갤러리 -->
            <div class="grid-item notice-gallery">
                <!-- 공지사항 -->
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
                    <div v-if="popupVisible" class="popup-layer" @click.self="closePopup">
                        <div class="popup-content">
                            <button class="close-btn" @click="closePopup">×</button>
                            <h3>공지사항 상세 내용</h3>
                            <p>여기에 상세 공지사항 내용을 작성하세요.</p>
                        </div>
                    </div>
                </div>

                <!-- 갤러리 -->
                <div class="gallery">
                    <h2>갤러리</h2>
                    <div class="tabs">
                        <button v-for="(tab, index) in galleryTabs" :key="index"
                            :class="{ active: activeTab === index }" @click="activeTab = index">
                            {{ tab.title }}
                        </button>
                    </div>
                    <div class="tab-content">
                        <img :src="galleryTabs[activeTab].image" :alt="galleryTabs[activeTab].title" />
                    </div>
                </div>
            </div>

            <!-- 2번째 그리드: 배너 -->
            <div class="grid-item banner">
                <h2>배너</h2>
                <img src="../assets/shop4.jpg" alt="배너 이미지" />
            </div>

            <!-- 3번째 그리드: 바로가기 -->
            <div class="grid-item shortcut">
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
        <footer class="site-footer" role="contentinfo">
            <div class="footer-inner">

                <!-- 로고 -->
                <div class="footer-logo">
                    <div class="logo">
                        <a href="#">LEJ Mall</a>
                    </div>
                </div>

                <!-- 저작권 -->
                <div class="footer-info">
                    <p>© 2025 YourCompany. All rights reserved.</p>
                </div>

                <!-- SNS 3개 -->
                <nav class="footer-sns" aria-label="소셜 미디어 링크">
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
import { ref } from 'vue'
import gallery1 from '../assets/gallery/shop1.jpg'
import gallery2 from '../assets/gallery/shop2.jpg'
import gallery3 from '../assets/gallery/shop3.jpg'

// 헤더
const menus = [
    { name: '탑', submenus: ['블라우스', '티', '셔츠', '니트'] },
    { name: '아우터', submenus: ['자켓', '코트', '가디건', '머플러'] },
    { name: '팬츠', submenus: ['청바지', '짧은바지', '긴바지', '레깅스'] },
    { name: '악세서리', submenus: ['귀고리', '목걸이', '반지', '팔찌'] },
]

const activeMenu = ref(null)

function showSubMenu(name) {
    activeMenu.value = name
}

function hideSubMenu(name) {
    if (activeMenu.value === name) {
        activeMenu.value = null
    }
}

// 슬라이드
const slides = [
    { image: new URL('../assets/shop1.jpg', import.meta.url).href, text: '최신 트렌드, 쇼핑몰 신상품 소개' },
    { image: new URL('../assets/shop2.jpg', import.meta.url).href, text: '합리적인 가격과 풍성한 혜택' },
    { image: new URL('../assets/shop3.jpg', import.meta.url).href, text: '빠른 배송과 믿을 수 있는 서비스' }
]

const currentIndex = ref(0)

function prevSlide() {
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

function nextSlide() {
    currentIndex.value = (currentIndex.value + 1) % slides.length
}

const images = import.meta.glob('../assets/gallery/*.jpg', { eager: true })

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

/* 전체 기본 설정 =================================== */
#app {
    font-family: 'Noto Sans KR', sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
}

/* 헤더 ====================================================================== */
header {
    width: 1200px;
    height: 100px;
    background-color: #4f4f4f;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
}

.header-inner {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
}

/* 로고 사이즈 고정 */
.logo a {
    font-size: 32px;
    font-weight: bold;
    color: #ddff00;
    display: inline-block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    margin-right: 40px;
    text-decoration: none;
}

/* 메뉴 ====================================================================== */
.menu ul {
    list-style: none;
    display: flex;
}

.menu ul:first-child {
    padding-left: 100px;
    gap: 150px;
}

.menu li {
    position: relative;
}

.main-menu-link {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    padding: 10px 5px;
    display: inline-block;
    transition: color 0.3s;
}

/* 메뉴 활성, 호버 */
.menu li.active>.main-menu-link,
.menu li:hover>.main-menu-link {
    color: #0077ff;
}

/* 서브 메뉴 스타일 */
.sub-menu {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    min-width: 150px;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
}

.sub-menu li {
    padding: 10px;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 0.3s;
}

.sub-menu li:hover {
    background-color: #f0f0f0;
}

/* 서브 메뉴 애니메이션 (fade + slide down) */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
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
    background: #000;
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
}

.nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.7);
    border: none;
    padding: 10px 18px;
    font-size: 32px;
    color: #333;
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
    overflow-y: auto;
}

.grid-item {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    height: 100%;
}

/* 1번째 그리드: 공지사항 + 갤러리 세로 배치 */
.notice-gallery {
    gap: 30px;
    display: flex;
    flex-direction: column;
}

/* 공지사항 */
.notice h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 700;
}

.notice-content ul {
    list-style: disc inside;
    cursor: pointer;
}

.notice-content li {
    margin-bottom: 6px;
    color: #333;
}

.notice-content li:hover {
    color: #0077ff;
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

.close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    border: none;
    background: none;
    cursor: pointer;
    color: #333;
}

/* 갤러리 */
.gallery h2 {
    margin-bottom: 12px;
    font-size: 1.5rem;
    font-weight: 700;
}

.tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.tabs button {
    padding: 8px 16px;
    border: 1px solid #ccc;
    background: #eee;
    cursor: pointer;
    border-radius: 6px;
    font-weight: 600;
    transition: background-color 0.3s;
}

.tabs button.active,
.tabs button:hover {
    background-color: #0077ff;
    color: #fff;
    border-color: #0077ff;
}

.tab-content img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    display: block;
}

/* 2번째 그리드: 배너 */
.banner h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    text-align: center;
}

.banner img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

/* 3번째 그리드: 바로가기 */
.shortcut h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    text-align: center;
}

.shortcut ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}

.shortcut ul li {
    width: 100%;

}

.shortcut ul li a {
    display: block;
    text-decoration: none;
    font-size: 1.1rem;
    margin: 2px 0;
    padding: 20px 15px;
    color: #444;
    background-color: #e3e3e3;
    border-radius: 10px;
    box-sizing: border-box;
    text-align: center;
    transition: background-color 0.3s;
}

.shortcut ul li a:hover {
    background-color: #0077ff;
    color: white;
}

/* Footer =================================== */
.site-footer {
    background-color: #222;
    color: #ccc;
    padding: 20px 40px;
    font-size: 0.9rem;
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

/* 로고는 그레이스케일 처리 */
.footer-logo img {
    width: 120px;
    height: auto;
    filter: grayscale(100%);
}

/* 저작권 문구 */
.footer-info p {
    margin: 0;
}

/* SNS 리스트 초기화 */
.footer-sns ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 15px;
}

/* SNS 아이콘 링크 */
.footer-sns a {
    display: inline-block;
    width: 32px;
    height: 32px;
}

.footer-sns a img {
    width: 100%;
    height: 100%;
    transition: filter 0.3s ease;
}

.footer-sns a:hover img,
.footer-sns a:focus img {
    filter: brightness(1.2);
    outline: none;
}

/* 모바일 대응 */
@media (max-width: 600px) {
    .footer-inner {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-info,
    .footer-sns {
        order: 3;
    }

    .footer-logo {
        order: 1;
        margin-bottom: 10px;
    }
}
</style>