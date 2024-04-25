import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Modal } from '@/components'

import { TaskStatus } from '@/types'

import scss from './Header.module.scss'

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)

  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <p>Organize your time</p>
        <button onClick={onOpen}>MODAL</button>
        {open && (
          <Modal isOpen={open} onClose={onClose}>
            <h2>MODAL OPEN</h2>
          </Modal>
        )}
        <nav>
          <ul className={scss.navList}>
            <li key="new-task">
              <NavLink
                className={({ isActive }) =>
                  isActive ? scss.activeLink : scss.link
                }
                to="tasks/new-task"
              >
                New task
              </NavLink>
            </li>
            {Object.values(TaskStatus).map(page => (
              <li key={page}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? scss.activeLink : scss.link
                  }
                  to={`tasks/${page.toLowerCase()}`}
                >
                  {page.toLowerCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
