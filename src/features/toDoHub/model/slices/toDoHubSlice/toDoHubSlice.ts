import {  PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ToDoFilterTypeEnum } from '@/entities/ToDo'

import { ToDoHubSchema } from '../../types'

const initialState: ToDoHubSchema = {
  items:[],
  toDoFilterType: ToDoFilterTypeEnum.ALL
}


export const toDoHubSlice = createSlice({
  name: 'toDoHub',
  initialState: initialState,
  reducers: {
    addToDo:(state, action: PayloadAction<string>)=>{
      state.items = [
        {
          id:String(Date.now() + Math.random()),
          text:action.payload, 
          completed: false
        }
        , ...state.items
      ]
    },
    toggleToDo: (state, action:PayloadAction<string>)=>{
      state.items = state.items.map(todo => todo.id === action.payload ? 
        {...todo, completed: !todo.completed}
        :
        todo
      )
    },
    setToDoFilterType:(state, action:PayloadAction<ToDoFilterTypeEnum>)=>{
      state.toDoFilterType = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const toDoHubActions = toDoHubSlice.actions
export const toDoHubReducer = toDoHubSlice.reducer
