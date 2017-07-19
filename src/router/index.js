import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import order from '@/pages/order'
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
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
