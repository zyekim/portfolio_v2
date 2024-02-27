import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeFE from '../views/HomeFE.vue'
import HomePub from '../views/HomePub.vue'
import WorkView from '../views/WorkView.vue'
import ResumeView from '../views/ResumeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      {
        path: '/',
        component: HomeFE
      },
      {
        path: '/publish',
        component: HomePub
      },
    ]
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
  mode: 'history',
  routes
})

export default router
