import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import HomeFE from '@/views/HomeFE.vue'
import HomePub from '@/views/HomePub.vue'
import WorkView from '@/views/WorkView.vue'
import PubResumeView from '@/views/PubResumeView.vue'

const router = createRouter({
  // GitHub Pages 정적 호스팅 유지를 위해 해시 라우팅 사용
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
      children: [
        {
          path: '',
          component: HomeFE,
        },
        {
          path: 'publish',
          component: HomePub,
        },
      ],
    },
    {
      path: '/work',
      name: 'WorkView',
      component: WorkView,
    },
    {
      path: '/resume/pub',
      name: 'PubResumeView',
      component: PubResumeView,
    },
  ],
})

export default router
