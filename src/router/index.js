import Vue from 'vue'
import Router from 'vue-router'
import mintui from '@/pages/mint-ui'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mint-ui',
      component: mintui
    }
  ]
})
