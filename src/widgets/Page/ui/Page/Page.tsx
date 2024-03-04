import { type FC, type ReactNode } from 'react'
import classnames from 'classnames'

import styles from './Page.module.scss'

interface PageProps {
    className?: string
    children?: ReactNode
}

const Page: FC<PageProps> = (props) => {
    const { className, children } = props

    return <main className={classnames(styles.Page, className)}>{children}</main>
}

export default Page
