import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import GalleryView from '../views/GalleryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{name:"Pocetna"}
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta:{name:"Usluge"}
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta:{name:"Kontakt"}
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView,
    meta:{name:"Galerija"}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
