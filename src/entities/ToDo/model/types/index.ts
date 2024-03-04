export interface ToDo {
  id:string
  text:string
  completed: boolean
}

// eslint-disable-next-line no-shadow
export enum ToDoFilterTypeEnum {
  ALL = 'ALL',
  COMPLETED = 'COMPLETED',
  CURRENT = 'CURRENT'
}
