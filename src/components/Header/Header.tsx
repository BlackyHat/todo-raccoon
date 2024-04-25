import { NavLink } from 'react-router-dom'

import { TaskStatus } from '@/types'

import scss from './Header.module.scss'

import HomeIcon from '@assets/icons/icon-home.svg?react'
import ActiveIcon from '@assets/icons/icon-active.svg?react'
import CompletedIcon from '@assets/icons/icon-completed.svg?react'
import DeletedIcon from '@assets/icons/icon-deleted.svg?react'

export const Header: React.FC = () => {
  const icons = [ActiveIcon, CompletedIcon, DeletedIcon]

  return (
    <header className={scss.header}>
      <div className={`container ${scss.container}`}>
        <NavLink
          className={scss.homeLink}
          to={`tasks/`}
          title="Home page"
          aria-label="Home page"
        >
          <HomeIcon />
          <span>Home Page</span>
        </NavLink>

        <nav>
          <ul className={scss.navList}>
            {Object.values(TaskStatus).map((page, idx) => {
              const Icon = icons[idx]
              const path = page.toLowerCase()
              return (
                <li key={path}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? scss.activeLink : scss.link
                    }
                    title={`${path} tasks`}
                    aria-label={`${path} tasks`}
                    to={`tasks/${path}`}
                  >
                    <Icon />
                    <span>{path}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
