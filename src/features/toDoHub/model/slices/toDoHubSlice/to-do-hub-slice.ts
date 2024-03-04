import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ToDoFilterTypeEnum } from '@/entities/ToDo'

import { ToDoHubSchema } from '../../types'

const initialState: ToDoHubSchema = {
  'itemsToDos': [],
  'toDoFilterType': ToDoFilterTypeEnum.ALL,
}

export const toDoHubSlice = createSlice({
  'name': 'toDoHub',
  initialState,
  'reducers': {
    'addToDo': (state, action: PayloadAction<string>) => {
      state.itemsToDos = [
        {
          'id': String(Date.now() + Math.random()),
          'text': action.payload,
          'completed': false,
        },
        ...state.itemsToDos,
      ]
    },
    'toggleToDo': (state, action: PayloadAction<string>) => {
      state.itemsToDos = state.itemsToDos.map(
        (todo) => {
          const modified = { ...todo, 'completed': !todo.completed }
          return todo.id === action.payload ? modified : todo
        },
      )
    },
    'setToDoFilterType': (state, action: PayloadAction<ToDoFilterTypeEnum>) => {
      state.toDoFilterType = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const toDoHubActions = toDoHubSlice.actions
export const toDoHubReducer = toDoHubSlice.reducer
