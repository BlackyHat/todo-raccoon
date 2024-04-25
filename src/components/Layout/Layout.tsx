import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components'

const Layout: React.FC = () => (
  <main>
    <Header />

    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  </main>
)

export default Layout
