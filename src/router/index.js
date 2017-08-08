import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import order from '@/pages/order'
import tours from '@/pages/tours'
import login from '@/pages/login'
import reg from '@/pages/reg'
import my from '@/pages/my'
import orderList from '@/pages/orderList'

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
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/my',
      name: 'my',
      meta: {
        requireAuth: true,
      },
      component: my
    },
    {
      path: '/orderList',
      name: 'orderList',
      meta: {
        requireAuth: true,
      },
      component: orderList
    }
  ]
})
