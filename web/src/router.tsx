import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Login } from './pages/admin/login'
import { Home } from './pages/app/home'
import Menu from './pages/app/menu'
import { Orders } from './pages/app/orders'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/orders', element: <Orders /> },
      { path: '*', element: <Home /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])
