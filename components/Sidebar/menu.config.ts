import { MenuConfig } from './typings'

const menuConfig: MenuConfig = [
  {
    path: '/',
    icon: 'dashboard',
    name: 'Home',
  },
  {
    path: '/todo',
    icon: 'read',
    name: 'Todo',
    children: [
      {
        path: '/list',
        icon: 'file',
        name: 'List',
      },
      {
        path: '/item',
        icon: 'line-chart',
        name: 'Item',
      },
    ],
  },
]

export default menuConfig
