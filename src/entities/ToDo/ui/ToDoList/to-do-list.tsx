import { List } from 'antd'
import { memo, type FC, ReactNode } from 'react'

import { ToDo } from '../../model/types'

interface ToDoListProps {
  toDos: ToDo[]
  renderItem: (todo:ToDo)=>ReactNode
  header: ReactNode
  footer?: ReactNode
}

const ToDoList: FC<ToDoListProps> = memo((props) => {
  const { renderItem, toDos, header, footer } = props

  return (
    <List
      renderItem={renderItem}
      dataSource={toDos}
      header={header}
      footer={footer}
      size="large"
      bordered
    />
  )
})

export default ToDoList
