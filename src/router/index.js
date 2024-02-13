import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import ResumeView from '../views/ResumeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/work',
    name: 'WorkView',
    component: WorkView
  },
  {
    path: '/resume',
    name: 'ResumeView',
    component: ResumeView
  },
]

const router = new VueRouter({
  routes
})

export default router
