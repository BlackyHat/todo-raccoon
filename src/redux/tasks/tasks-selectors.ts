import type { RootState } from '../store'

import { TaskStatus, TUserTask } from '@/types'

export const selectAllTasks = (state: RootState): TUserTask[] =>
  state.tasks.tasks.filter(task => !task.deleted)

export const selectFilteredTodos = (
  filter: TaskStatus,
  state: RootState
): TUserTask[] => {
  const allTasks = state.tasks.tasks

  switch (filter) {
    case TaskStatus.Active: {
      return allTasks.filter(task => !task.completed)
    }
    case TaskStatus.Completed: {
      return allTasks.filter(task => task.completed)
    }
    case TaskStatus.Deleted: {
      return allTasks.filter(task => task.deleted)
    }
    default: {
      return allTasks
    }
  }
}
