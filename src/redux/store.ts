import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { tasksReducer } from './tasks/tasks-slice'

const persistConfig = {
  key: 'tasks',
  storage,
}
const persistedTasksReducer = persistReducer(persistConfig, tasksReducer)

const store = configureStore({
  reducer: {
    tasks: persistedTasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

export default store
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
