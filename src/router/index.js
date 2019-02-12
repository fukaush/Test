import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Fractions from '@/pages/Fractions'
import Comments from '@/pages/Comments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/fractions',
      name: 'Fractions',
      component: Fractions
    },
    {
      path: '/comments',
      name: 'comments',
      component: Comments
    }
  ]
})
