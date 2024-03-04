import { memo, type FC, useState, useCallback } from 'react'
import { Button, Flex, Input, Space, Typography } from 'antd'

import styles from './create-to-do-form.module.scss'

const { Text } = Typography

interface CreateToDoFormProps {
  onCreate: (todo:string)=>void
  maxLength?:number
  className?: string
}

const CreateToDoForm: FC<CreateToDoFormProps> = memo((props) => {
  const { onCreate, maxLength = 50 } = props

  const [value, setValue] = useState<string>('')

  const currentValueLength = value.length
  const availableLength = Math.max(maxLength - currentValueLength, 0)

  const isButtonDisabled =
  currentValueLength > maxLength || value.trim().length === 0

  const clickHandler = useCallback(() => {
    onCreate(value)
    setValue('')
  }, [onCreate, value])

  return (
    <Flex vertical gap={16} className={styles.container}>
      <Space.Compact className={styles.container}>
        <Input
          placeholder="Type ToDo"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button
          type="primary"
          onClick={clickHandler}
          disabled={isButtonDisabled}>
           Create
        </Button>
      </Space.Compact>
      <Flex justify='flex-end'>
        <Text type={availableLength ? 'secondary' : 'danger'}>
          {availableLength}/{maxLength}
        </Text>
      </Flex>
    </Flex>
  )
})

export default CreateToDoForm
