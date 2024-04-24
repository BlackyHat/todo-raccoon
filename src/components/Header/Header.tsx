import React from 'react'
import { NavLink } from 'react-router-dom'

import { TFilterStatus } from '@/types'

export const Header: React.FC = () => {
  return (
    <header className="">
      <ul className="navList">
        <li key="tasks">
          <NavLink
            className={({ isActive }) => (isActive ? 'active link' : 'link')}
            to="tasks"
          >
            New task
          </NavLink>
        </li>
        {Object.values(TFilterStatus).map(page => (
          <li key={page}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active link' : 'link')}
              to={`tasks/${page.toLowerCase()}`}
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  )
}
