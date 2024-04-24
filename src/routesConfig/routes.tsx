import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import Layout from '@/components'

const ActiveTasks = lazy(() => import('@/pages/ActiveTasks'))
const ErrorPage = lazy(() => import('@/pages/Error'))
const NotFoundPage = lazy(() => import('@/pages/NotFound'))

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/tasks',
        element: <ActiveTasks title="ALL" />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/tasks/new-task',
        element: <ActiveTasks title="Add New Task" />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/tasks/:taskStatus',
        element: <ActiveTasks title="active" />,
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
