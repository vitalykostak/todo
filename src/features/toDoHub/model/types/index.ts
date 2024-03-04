import { ToDo, ToDoFilterTypeEnum } from '@/entities/ToDo'

export interface ToDoHubSchema {
  itemsToDos: ToDo[]
  toDoFilterType: ToDoFilterTypeEnum
}
