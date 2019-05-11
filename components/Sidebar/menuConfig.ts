import { MenuConfig } from './typings'

const menuConfig: MenuConfig = [
  {
    path: '/',
    icon: 'dashboard',
    name: 'menu.home',
  },
  {
    path: '/reports',
    icon: 'read',
    name: '资源审查',
    children: [
      {
        path: '/reports/:id/detail',
        icon: 'file',
        name: '详情',
      },
      // {
      //   path: '/reports/:id/stats',
      //   icon: 'line-chart',
      //   name: '统计',
      // },
    ],
  },
]

export default menuConfig
