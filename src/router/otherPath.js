// import Main from '@/views/common/main.vue'
// 其他路由不在sidebar显示
export default [
  {
    path: '/home',
    name: '/home',
    meta: { name: '首页', icon: 'el-icon-setting', auth: true },
    component: () => import('@/views/home/home.vue')
  }
]
