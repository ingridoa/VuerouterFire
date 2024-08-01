import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistroVue from '@/views/RegistroVue.vue'
import LoginView from '@/views/LoginView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      login: true
   },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
   },
  
  {
    path: '/registro',
    name: 'registro',
    component: RegistroVue,
   },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//router.beforeEach(to,from,next){...}

export default router