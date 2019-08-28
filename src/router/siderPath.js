import Main from '@/views/common/main.vue'
// 在sidebar显示的路由《layout设置》
export default [
  {
    path: '/setting',
    name: '/setting',
    meta: { name: '管理员设置', icon: 'el-icon-setting', auth: true },
    component: () => import('@/views/setting/setting.vue')
  },
  {
    path: '/logs',
    name: '/logs',
    meta: { name: '日志', icon: 'el-icon-help', auth: true },
    component: Main,
    children: [
      {
        path: '/logs/logon',
        name: '/logs/logon',
        meta: { name: '登录日志', auth: true },
        component: () => import('@/views/logs/logon.vue')
      },
      {
        path: '/logs/operation',
        name: '/logs/operation',
        meta: { name: '操作日志', auth: true },
        component: () => import('@/views/logs/operation.vue')
      }
    ]
  }
]
