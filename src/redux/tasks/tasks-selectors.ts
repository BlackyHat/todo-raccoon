import { createSelector } from 'reselect'
import type { RootState } from '../store'

import { TaskStatus, TUserTask } from '@/types'

export const selectAllTasks = createSelector(
  (state: RootState) => state.tasks.tasks,
  (tasks: TUserTask[]): TUserTask[] => tasks.filter(task => !task.deleted)
)

export const selectTasksByStatus = createSelector(
  [state => state.tasks.tasks, (_, status) => status],
  (tasks, status): TUserTask[] => {
    switch (status.toUpperCase()) {
      case TaskStatus.Active: {
        return tasks.filter((task: TUserTask) => !task.completed)
      }
      case TaskStatus.Completed: {
        return tasks.filter((task: TUserTask) => task.completed)
      }
      case TaskStatus.Deleted: {
        return tasks.filter((task: TUserTask) => task.deleted)
      }
      default: {
        return tasks
      }
    }
  }
)

export const selectCountCompletedTasks = createSelector(
  (state: RootState) => state.tasks.tasks,
  (tasks: TUserTask[]): number => tasks.filter(task => task.completed).length
)

export const selectCountDeletedTasks = createSelector(
  (state: RootState) => state.tasks.tasks,
  (tasks: TUserTask[]): number => tasks.filter(task => task.deleted).length
)

export const selectCountAllTasks = createSelector(
  (state: RootState) => state.tasks.tasks,
  (tasks: TUserTask[]): number => tasks.filter(task => !task.deleted).length
)
