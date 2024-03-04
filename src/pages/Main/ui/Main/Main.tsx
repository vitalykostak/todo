import { memo, type FC } from 'react'
import classnames from 'classnames'

import { Page } from '@/widgets/Page'

interface MainProps {
    className?: string
}

const Main: FC<MainProps> = memo((props) => {
    const { className } = props

    return <Page className={classnames(className)}>MainPage</Page>
})

export default Main
