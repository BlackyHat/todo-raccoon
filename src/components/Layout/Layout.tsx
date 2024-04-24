import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../Header'

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>TODO APP 2024</h1>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default Layout
