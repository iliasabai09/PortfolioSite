import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../modules/home/view/HomeView.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView }
    ],
    scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((_to, _from) => {
    return true
})
