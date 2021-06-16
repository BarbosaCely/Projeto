import Vue from 'vue'
import VueRouter from 'vue-router'
import Comments from '../views/Comments.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Comments',
    component: Comments
  },
  {
    path: '/Comments',
    name: 'Comments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Comments.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
