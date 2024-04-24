import { createSlice } from '@reduxjs/toolkit'

import { TUserTask } from '@/types'

type TasksState = {
  tasks: TUserTask[]
}

const initialState: TasksState = { tasks: [] }

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        ...action.payload,
        id: Date.now(),
        completed: false,
        deleted: false,
      })
    },

    deleteTask: (state, action) => {
      const index = state.tasks.findIndex(todo => todo.id === action.payload)
      state.tasks.splice(index, 1, action.payload)
    },

    removeToDeleted: (state, action) => {
      const index = state.tasks.findIndex(todo => todo.id === action.payload)
      const task = state.tasks[index]
      state.tasks.splice(index, 1, { ...task, deleted: true })
    },

    toggleCompleted: (state, action) => {
      const index = state.tasks.findIndex(todo => todo.id === action.payload)
      const task = state.tasks[index]
      state.tasks.splice(index, 1, { ...task, completed: !task.completed })
    },
  },
})

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer
