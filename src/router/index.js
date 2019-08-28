import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import siderPath from './siderPath.js'
import otherPath from './otherPath.js'

Vue.use(Router)

// 多路由文件合并
let allRoutes = new Set([...siderPath, ...otherPath])

export default new Router({
  mode: 'history',
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
      redirect: '/home',
      meta: { name: 'admin', auth: true },
      component: Layout,
      children: allRoutes
    },
    {
      path: '/500',
      name: '500',
      mate: { name: '500', auth: false },
      component: () => import('@/views/common/error/500.vue')
    },
    {
      path: '/404',
      name: '/404',
      mate: { name: '404', auth: false },
      component: () => import('@/views/common/error/404.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
