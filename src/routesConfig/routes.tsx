import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import Layout from '@/components'

const Home = lazy(() => import('@/pages/Home/Home'))
const Tasks = lazy(() => import('@/pages/Tasks'))
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
        element: <Tasks />,
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
