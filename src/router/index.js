import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

import Home from '../views/Home.vue'


Vue.use(VueRouter);


const router = new VueRouter({
    mode:"history",
    routes:[
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})

export default router
