import { createMemoryHistory, createRouter } from 'vue-router'
import AboutView from './pages/AboutView.vue'
import Ex_webDesign from './pages/Ex_webDesign.vue'
import HomeView from './pages/HomeView.vue'
import StudyView from './pages/StudyView.vue'
import Ex_A1 from './pages/Ex_A1.vue'
import Ex_B1 from './pages/Ex_B1.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/study/', component: StudyView },
    {
        path: '/wd/',
        component: Ex_webDesign,
        children: [
            {
                path: '/wd/a1',
                component: Ex_A1,
            },
            {
                path: '/wd/b1',
                component: Ex_B1,
            },
        ],
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router