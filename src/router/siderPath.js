// import Main from '@/views/common/main.vue'

export default [
  {
    path: 'setting',
    name: 'setting',
    meta: { name: '管理设置', icon: 'el-icon-user', auth: true },
    component: () => import('@/views/setting/setting.vue')
  }
]
