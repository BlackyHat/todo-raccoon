import { useState } from 'react'

import { Modal, TodoForm } from '@/components'

export const TaskModal: React.FC = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)

  return (
    <>
      <button onClick={onOpen}>New Task</button>

      {open && (
        <Modal isOpen={open} onClose={onClose}>
          <TodoForm onClose={onClose} />
        </Modal>
      )}
    </>
  )
}
