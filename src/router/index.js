import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    
    component: () => import('../views/Login.vue')
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    
    component: () => import('../views/CadastroView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
