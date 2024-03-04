import { ToDo, ToDoFilterTypeEnum } from "@/entities/ToDo"

export interface ToDoHubSchema {
  items: ToDo[]
  toDoFilterType: ToDoFilterTypeEnum
}
