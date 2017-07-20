import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import order from '@/pages/order'
import tours from '@/pages/tours'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/tours',
      name: 'tours',
      component: tours
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
