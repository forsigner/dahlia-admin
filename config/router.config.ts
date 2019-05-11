import BasicLayout from '@layouts/BasicLayout'
import Index from '@pages/index'
import TodoList from '@pages/TodoList'

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        component: Index,
      },
    ],
  },
  {
    path: '/todo',
    component: BasicLayout,
    children: [
      {
        path: '/list',
        component: TodoList,
      },
    ],
  },
]

export default routes
