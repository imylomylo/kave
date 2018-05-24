import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppBlocks from '@/components/AppBlocks'
import AppLogin from '@/components/AppLogin'
import AppContact from '@/components/AppContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/blocks',
      name: 'AppBlocks',
      component: AppBlocks
    },
    {
      path: '/login',
      name: 'AppLogin',
      component: AppLogin
    },
    {
      path: '/contact',
      name: 'AppContact',
      component: AppContact
    }
  ]
})
