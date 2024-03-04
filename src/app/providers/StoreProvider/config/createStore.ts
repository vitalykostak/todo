import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { toDoHubReducer } from '@/features/toDoHub'

import { type StateSchema } from '../types/StateSchema'

export const createReduxStore = () => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    toDoHub: toDoHubReducer
  }

  const store = configureStore<StateSchema>({
    reducer: rootReducer
  })

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
