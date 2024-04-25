import { NavLink } from 'react-router-dom'

import { TaskStatus } from '@/types'

import scss from './Header.module.scss'

import HomeIcon from '@assets/icons/icon-home.svg?react'
import ActiveIcon from '@assets/icons/icon-active.svg?react'
import CompletedIcon from '@assets/icons/icon-completed.svg?react'
import DeletedIcon from '@assets/icons/icon-deleted.svg?react'
import { useAppSelector } from '@/hooks'
import { selectTasksCounts } from '@/redux'

export const Header: React.FC = () => {
  const icons = [ActiveIcon, CompletedIcon, DeletedIcon]
  const counts = useAppSelector(selectTasksCounts)

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
          <span className={scss.homeLabel}>Home Page</span>
        </NavLink>

        <nav>
          <ul className={scss.navList}>
            {Object.values(TaskStatus).map((page, idx) => {
              const Icon = icons[idx]
              const path = page.toLowerCase()
              const count = counts[path as keyof typeof counts]
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
                  {count !== undefined && (
                    <span className={scss.badge}>{count}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
