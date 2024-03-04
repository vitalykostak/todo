import { memo, type FC } from 'react'
import { useSelector } from 'react-redux'
import { Flex, Progress, Typography } from 'antd'

import { selectAmountOfAllToDos, selectAmountOfCompletedToDos, selectAmountOfUnCompletedToDos, selectPercentageOfCompletedToDos, selectShouldShowCompletionReport } from '../../model/selectors'

import styles from './TaskCompletionReport.module.scss'

const { Text } = Typography

interface TaskCompletionReportProps {
  className?: string
}

const TaskCompletionReport: FC<TaskCompletionReportProps> = memo(() => {
  const shouldShowCompletionReport = useSelector(selectShouldShowCompletionReport)
  const amountOfAllToDos = useSelector(selectAmountOfAllToDos)
  const amountOfCompletedToDos = useSelector(selectAmountOfCompletedToDos)
  const amountOfUncompletedToDos = useSelector(selectAmountOfUnCompletedToDos)
  const percentageOfCompletedToDos = useSelector(selectPercentageOfCompletedToDos)
  console.log({percentageOfCompletedToDos})
  if(!shouldShowCompletionReport){
    return null
  }

  return (
    <Flex vertical className={styles.container} gap={16}>
      <Flex className={styles.container} justify='space-between'>
        <Text 
          type={amountOfCompletedToDos !== amountOfAllToDos ? 'secondary' : 'success'}
        >
          {amountOfCompletedToDos}/{amountOfAllToDos}
        </Text>
        {
          amountOfUncompletedToDos 
            ? <Text type='warning'>
                To do - {amountOfUncompletedToDos}
            </Text>
            : 
            <Text type='success'>Great, you have done all the tasks!</Text>
        }
      </Flex>
      <Progress percent={percentageOfCompletedToDos} />
    </Flex>
  )
})

export default TaskCompletionReport
