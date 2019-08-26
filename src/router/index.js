import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/views/layout/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { name: '登录', auth: false },
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/',
      name: 'Layout',
      meta: { name: 'admin', auth: true },
      component: Layout
    }
  ]
})
