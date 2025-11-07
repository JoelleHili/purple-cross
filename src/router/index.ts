import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Employee Index',
    component: () => import('@/views/IndexPage.vue')
  },
  {
    path: '/form',
    name: 'Employee Form',
    component: () => import('@/views/EmployeePage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
