import routes from '@/router/routes'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
