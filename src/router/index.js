import { createRouter, createWebHistory } from 'vue-router'

import Home from '../view/HomePage.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router