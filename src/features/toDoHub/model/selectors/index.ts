import { createSelector } from "@reduxjs/toolkit"

import { StateSchema } from "@/app/providers/StoreProvider/types/StateSchema"
import { ToDoFilterTypeEnum } from "@/entities/ToDo"


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exhaustiveCheck = (_:never)=> {}

export const selectAllToDos = (state:StateSchema)=> state.toDoHub.items

export const selectToDoHubFilterType = (state:StateSchema)=> state.toDoHub.toDoFilterType

export const selectFilteredToDos = createSelector(selectAllToDos, selectToDoHubFilterType, (toDos, toDoFilterType)=> {
  switch(toDoFilterType){
    case ToDoFilterTypeEnum.ALL:
      return toDos
    case ToDoFilterTypeEnum.CURRENT:
      return toDos.filter(t=>!t.completed)
    case ToDoFilterTypeEnum.COMPLETED:
      return toDos.filter(t=>t.completed)
    default:
      exhaustiveCheck(toDoFilterType)
      return []
  }

})


