import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistroView from '@/views/RegistroView.vue'
import LoginView from '@/views/LoginView.vue'
import store from "@/store/index.js";



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
    component: RegistroView,
   },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//router.beforeEach(to,from,next){...}
/* Protección de rutas => GUARDIAN */
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.login)) {
    if (!store.state.loggedUser) {
      next("/login"); //Te redirigo a la ruta raiz si no hay usuario logueado
    } else {
      next(); //Si en el estado global hay un usuario logueado, te envío a la ruta deseada
    }
  } else {
    next(); // si la ruta a la que voy, no tiene meta login, voy a esa ruta sin problemas
  }
});


export default router
