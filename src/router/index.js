import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import order from '@/pages/order'
import tours from '@/pages/tours'
import visa from '@/pages/visa'
import rv from '@/pages/rv'
import vehicle from '@/pages/vehicle'
import activity from '@/pages/activity'
import aboutus from '@/pages/aboutus'
import login from '@/pages/login'
import reg from '@/pages/reg'
import my from '@/pages/my'
import orderList from '@/pages/orderList'
import memberInfo from '@/pages/memberInfo'
import modifyPwd from '@/pages/modifyPwd'

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
      path: '/visa',
      name: 'visa',
      component: visa
    },
    {
      path: '/rv',
      name: 'rv',
      component: rv
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/vehicle',
      name: 'vehicle',
      component: vehicle
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
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
    },
    {
      path: '/memberInfo',
      name: 'memberInfo',
      meta: {
        requireAuth: true,
      },
      component: memberInfo
    },
    {
      path: '/modifyPwd',
      name: 'modifyPwd',
      meta: {
        requireAuth: true,
      },
      component: modifyPwd
    }
  ]
})
