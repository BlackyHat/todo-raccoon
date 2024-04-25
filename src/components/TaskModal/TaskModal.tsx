import { useState } from 'react'

import { Modal, TaskForm } from '@/components'

import scss from './TaskModal.module.scss'

import PlusIcon from '@assets/icons/icon-plus.svg?react'

export const TaskModal: React.FC = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)

  return (
    <>
      <button onClick={onOpen} type="button" className={scss.modalButton}>
        <PlusIcon /> <span>Add Task</span>
      </button>

      {open && (
        <Modal isOpen={open} onClose={onClose}>
          <TaskForm onClose={onClose} />
        </Modal>
      )}
    </>
  )
}
