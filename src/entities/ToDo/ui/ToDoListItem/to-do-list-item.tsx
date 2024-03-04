import { memo, type FC } from 'react'
import { Checkbox, Flex, Typography, List } from 'antd'

import { ToDo } from '../../model/types'

import styles from './to-do-list-item.module.scss'

const { Text } = Typography

interface ToDoListItemProps {
  todo: ToDo
  onChange: ()=>void
}

const ToDoListItem: FC<ToDoListItemProps> = memo((props) => {
  const { todo, onChange } = props

  return (
    <List.Item>
      <Flex justify='space-between' align='center' className={styles.container}>
        <Text
          onClick={onChange}
          type={todo.completed ? 'success' : 'secondary'}
          className={styles.text}
        >
          {todo.text}
        </Text>
        <Checkbox
          onChange={onChange}
          checked={todo.completed}
        />
      </Flex>
    </List.Item>
  )
})

export default ToDoListItem
