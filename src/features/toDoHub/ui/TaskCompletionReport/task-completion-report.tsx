import { memo, type FC } from 'react'
import { useSelector } from 'react-redux'
import { Flex, Progress, Typography } from 'antd'

import {
  selectAmountOfAllToDos,
  selectAmountOfCompletedToDos,
  selectAmountOfUnCompletedToDos,
  selectPercentageOfCompletedToDos,
  selectShouldShowCompletionReport,
} from '../../model/selectors'

import styles from './task-completion-report.module.scss'

const { Text } = Typography

interface TaskCompletionReportProps {
  className?: string
}

const TaskCompletionReport: FC<TaskCompletionReportProps> = memo(() => {
  const shouldShowCompletionReport = useSelector(
    selectShouldShowCompletionReport,
  )
  const amountOfAllToDos = useSelector(selectAmountOfAllToDos)
  const amountOfCompletedToDos = useSelector(selectAmountOfCompletedToDos)
  const amountOfUncompletedToDos = useSelector(selectAmountOfUnCompletedToDos)
  const percentageOfCompletedToDos = useSelector(
    selectPercentageOfCompletedToDos,
  )

  if (!shouldShowCompletionReport) {
    // eslint-disable-next-line unicorn/no-useless-undefined
    return undefined
  }

  const type =
      amountOfCompletedToDos === amountOfAllToDos ? 'success' : 'secondary'

  const toDosWarning = <Text type="warning">
      To do - {amountOfUncompletedToDos}
  </Text>
  const toDosSuccess = <Text type="success">
      Great, you have done all the tasks!
  </Text>

  return (
    <Flex vertical className={styles.container} gap={16}>
      <Flex className={styles.container} justify="space-between">
        <Text type={type}>
          {amountOfCompletedToDos}/{amountOfAllToDos}
        </Text>
        {amountOfUncompletedToDos ? toDosWarning : toDosSuccess}
      </Flex>
      <Progress percent={percentageOfCompletedToDos} />
    </Flex>
  )
})

export default TaskCompletionReport
