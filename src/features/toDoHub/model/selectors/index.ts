import { createSelector } from '@reduxjs/toolkit'

import { StateSchema } from '@/app/providers/StoreProvider/types/state-schema'
import { ToDoFilterTypeEnum } from '@/entities/ToDo'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exhaustiveCheck = (__: never) => {}

export const selectAllToDos = (state: StateSchema) => state.toDoHub.itemsToDos

export const selectToDoHubFilterType =
(state: StateSchema) => state.toDoHub.toDoFilterType

export const selectFilteredToDos = createSelector(
  selectAllToDos,
  selectToDoHubFilterType,
  (toDos, toDoFilterType) => {
    switch (toDoFilterType) {
      case ToDoFilterTypeEnum.ALL: {
        return toDos
      }
      case ToDoFilterTypeEnum.CURRENT: {
        return toDos.filter((todo) => !todo.completed)
      }
      case ToDoFilterTypeEnum.COMPLETED: {
        return toDos.filter((todo) => todo.completed)
      }
      default: {
        exhaustiveCheck(toDoFilterType)
        return []
      }
    }
  },
)

export const selectAmountOfAllToDos =
(state: StateSchema) => state.toDoHub.itemsToDos.length

export const selectAmountOfCompletedToDos =
 (state: StateSchema) => {
   return state.toDoHub.itemsToDos.filter((todo) => todo.completed).length
 }

export const selectAmountOfUnCompletedToDos =
(state: StateSchema) => {
  return state.toDoHub.itemsToDos.filter((todo) => !todo.completed).length
}

export const selectPercentageOfCompletedToDos = createSelector(
  selectAmountOfAllToDos,
  selectAmountOfCompletedToDos,
  (all, completed) => Math.min(Math.round(completed / all * 100), 100),
)

export const selectShouldShowCompletionReport = createSelector(
  selectAmountOfAllToDos,
  selectToDoHubFilterType,
  (all, toDoHubFilterType) => {
    return Boolean(all && toDoHubFilterType === ToDoFilterTypeEnum.ALL)
  },
)
