import { type FC, memo } from 'react'
import classnames from 'classnames'

import { Page } from '@/widgets/Page'
import { ToDoHub } from '@/features/toDoHub'

interface MainProps {
  className?: string
}

const Main: FC<MainProps> = memo((props) => {
  const { className } = props

  return <Page className={classnames(className)}>
    <ToDoHub />
  </Page>
})

export default Main
