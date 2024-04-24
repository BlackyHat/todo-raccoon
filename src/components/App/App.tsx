import React from 'react'
import { Toaster } from 'react-hot-toast'

import { Router } from '@/routesConfig'

export const App: React.FC = () => {
  return (
    <>
      <Router />
      <Toaster />
    </>
  )
}
