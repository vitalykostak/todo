export interface ToDo {
  id:string
  text:string
  completed: boolean
}

export enum ToDoFilterTypeEnum  {
  ALL = "ALL",
  COMPLETED = "COMPLETED",
  CURRENT = "CURRENT"
}
