import { createApp } from 'vue'
import './styles/app.css'
import './styles/core.scss'
import { pages } from './pages'
import app from './app.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: pages.main },
    { path: '/5day/:key', component: pages._5day },
]

export const router = createRouter({
    history: createWebHashHistory(process.env.CLIENT_HOST),
    routes,
})

createApp(app).use(router).mount('#app')
