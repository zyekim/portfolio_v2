import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/work',
    name: 'workView',
    component: WorkView
  },
]

const router = new VueRouter({
  routes
})

export default router
