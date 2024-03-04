import { List } from 'antd'
import { memo, type FC, ReactNode } from 'react'

import { ToDo } from '../../model/types'

interface ToDoListProps {
  items: ToDo[]
  renderItem: (todo:ToDo)=>ReactNode
  header: ReactNode
}

const ToDoList: FC<ToDoListProps> = memo((props) => {
  const { renderItem, items, header } = props

  return (
    <List
      size="large"
      header={header}
      bordered
      dataSource={items}
      renderItem={renderItem}
    />
  )
})

export default ToDoList
