import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'

import { toDoHubReducer } from '@/features/toDoHub'

import { type StateSchema } from '../types/state-schema'

export const createReduxStore = () => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    'toDoHub': toDoHubReducer,
  }

  return configureStore<StateSchema>({
    'reducer': rootReducer,
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
