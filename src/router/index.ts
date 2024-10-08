import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: () => import('@/pages/home/Index.vue') },
  { path: '/about', name: 'About', component: () => import('@/pages/about/Index.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
