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
  {
    path: '/detalhes',
    name: 'detalhes',
    
    component: () => import('../views/DetalhesView.vue')
  },
  {
    path: '/teste',
    name: 'teste',
    
    component: () => import('../views/teste.vue')
  },
  {
    path: '/transacao',
    name: 'transacao',
    
    component: () => import('../views/TransacaoView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
