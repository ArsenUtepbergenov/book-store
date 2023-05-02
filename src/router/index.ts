import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
  },
  {
    path: '/book/:id',
    name: 'BookDetails',
    component: () => import('@/views/bookDetails.vue'),
  },
  {
    path: '/create-book',
    name: 'CreateBook',
    component: () => import('@/views/createBook.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
