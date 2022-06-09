import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/home-view.vue'

const routes = [
{
  path: '/',
  name: 'Home',
  component: home
},
{
  path: '/contact',
  name: 'Contact',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "contact us" */ '../views/contact-view.vue')
},
{
  path: '/book/:id',
  name: 'BookDetails',
  component: () => import(/* webpackChunkName: "book's details " */ '../views/book-details-view.vue')
},
{
  path: '/create-book',
  name: 'CreateBook',
  component: () => import(/* webpackChunkName: "create a book" */ '../views/create-book-view.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
