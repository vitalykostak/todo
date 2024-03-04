import { memo, type FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Flex } from 'antd'

import { CreateToDoForm, ToDoFilterSelector, ToDoFilterTypeEnum, ToDoList, ToDoListItem } from '@/entities/ToDo'
import { useAppDispatch } from '@/shared/lib/hooks'

import { selectFilteredToDos, selectToDoHubFilterType } from '../../model/selectors'
import { toDoHubActions } from '../../model/slices/toDoHubSlice/toDoHubSlice'
import TaskCompletionReport from '../TaskCompletionReport/TaskCompletionReport'

import styles from './ToDoHub.module.scss'

const ToDoHub: FC = memo(() => {
  const dispatch = useAppDispatch()

  const toDos = useSelector(selectFilteredToDos)
  const toDoHubFilterType = useSelector(selectToDoHubFilterType)

  const onCreateToDo = useCallback((todo:string)=>dispatch(toDoHubActions.addToDo(todo)), [dispatch])
  const onToggleToDo = (todoId:string)=>()=> dispatch(toDoHubActions.toggleToDo(todoId))
  const onSelectToDoFilterType = useCallback((tDoFilterType:ToDoFilterTypeEnum)=>dispatch(toDoHubActions.setToDoFilterType(tDoFilterType)), [dispatch])

  return (
    <ToDoList 
      header={
        <Flex vertical align='flex-end' gap={16} className={styles['header-container']}>
          <ToDoFilterSelector filter={toDoHubFilterType} onSelect={onSelectToDoFilterType}/>
          <CreateToDoForm onCreate={onCreateToDo} />
        </Flex>}
      footer={<TaskCompletionReport/>}
      items={toDos}
      renderItem={
        (todo)=>
          <ToDoListItem
            key={todo.id} 
            todo={todo}
            onChange={onToggleToDo(todo.id)}
          />
      }
    />
  )
})

export default ToDoHub
