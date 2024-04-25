import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import Layout from '@/components'

const Home = lazy(() => import('@/pages/Home'))
const TaskList = lazy(() => import('@/pages/TaskList'))
const ErrorPage = lazy(() => import('@/pages/Error'))
const NotFoundPage = lazy(() => import('@/pages/NotFound'))

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/tasks',
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/tasks/:taskStatus',
        element: <TaskList />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/',
        element: <Navigate to="/tasks" />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]
