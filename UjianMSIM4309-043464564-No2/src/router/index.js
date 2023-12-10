import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/hitungtempuh',
      name: 'hitungtempuh',
      component: () => import('../views/HitungTempuh.vue')
    },
    {
      path: '/konversisuhu',
      name: 'konversisuhu',
      component: () => import('../views/KonversiSuhu.vue')
    },
    {
      path: '/daftarkendaraan',
      name: 'daftarkendaraan',
      component: () => import('../views/DaftarKendaraan.vue')
    }
  ]
})

export default router
