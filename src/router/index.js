import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home-view.vue'

Vue.use(VueRouter)

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
    component: () => import(/* webpackChunkName: "about" */ '../views/contact-view.vue')
  },
  {
    path: '/book/:id',
    name: 'BookDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/book-details-view.vue')
  },
  {
    path: '/create-book',
    name: 'CreateBook',
    component: () => import(/* webpackChunkName: "about" */ '../views/create-book-view.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
