import toast from 'react-hot-toast'

import { useAppDispatch } from '@/hooks'
import { deleteTask, removeToDeleted, toggleCompleted } from '@/redux'

import { TaskActionsProps } from './types'
import scss from './TaskActions.module.scss'

import CheckIcon from '@assets/icons/icon-check.svg?react'
import DeleteIcon from '@assets/icons/icon-plus.svg?react'

export const TaskActions: React.FC<TaskActionsProps> = ({
  id,
  isDeleted,
  isCompleted,
}) => {
  const dispatch = useAppDispatch()

  const handleTaskStatus = (): void => {
    dispatch(toggleCompleted(id))
    toast.success("Task's status was changed")
  }

  const handleTaskDelete = (): void => {
    if (isDeleted) {
      dispatch(deleteTask(id))
      return
    }

    dispatch(removeToDeleted(id))
    toast.error('Task was removed')
  }

  return (
    <ul className={scss.list}>
      <li>
        <button
          type="button"
          aria-label="change task's status"
          title="change task's status"
          onClick={handleTaskStatus}
          className={`${scss.completedButton} 
          ${isCompleted ? scss.completed : ''}`}
        >
          <CheckIcon />
        </button>
      </li>

      <li>
        <button
          type="button"
          aria-label="delete the task"
          title="delete the task"
          onClick={handleTaskDelete}
          className={`${scss.deletedButton} ${isDeleted ? scss.deleted : ''}`}
        >
          <DeleteIcon />
        </button>
      </li>
    </ul>
  )
}
