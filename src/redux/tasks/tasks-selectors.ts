import type { RootState } from '../store'

import { TFilterStatus, TUserTask } from '@/types'

export const selectAllTasks = (state: RootState): TUserTask[] =>
  state.tasks.tasks.filter(task => !task.deleted)

export const selectFilteredTodos = (
  filter: TFilterStatus,
  state: RootState
): TUserTask[] => {
  const allTasks = state.tasks.tasks

  switch (filter) {
    case TFilterStatus.Active: {
      return allTasks.filter(task => !task.completed)
    }
    case TFilterStatus.Completed: {
      return allTasks.filter(task => task.completed)
    }
    case TFilterStatus.Deleted: {
      return allTasks.filter(task => task.deleted)
    }
    default: {
      return allTasks
    }
  }
}
