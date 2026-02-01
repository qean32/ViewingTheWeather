import { createApp } from 'vue'
import './styles/app.css'
import './styles/import.scss'
import { pages } from './pages'
import app from './app.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

const routes = [
    { path: '/', component: pages.main },
    { path: '/about', component: pages.detail },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(app).use(router).mount('#app')
