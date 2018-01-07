import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import index from '@/components/index'
import statistics from '@/components/statistics'
import book from '@/components/book'
import forget from '@/components/forget'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component:register
    },
    {
      path: '/index',
      name: 'index',
      component:index,
      children:[
        {
          path:'statistics',
          name:'statistics',
          component:statistics
        },
        {
          path:'book',
          name:'book',
          component:book
        }
      ]
    },
    {
      path:'/forget',
      name:'forget',
      component:forget
    }
  ]
})
