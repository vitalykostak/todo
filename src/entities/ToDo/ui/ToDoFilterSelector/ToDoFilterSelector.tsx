import { memo, type FC } from 'react'
import { Select } from 'antd'

import { ToDoFilterTypeEnum } from '../../model/types'

import styles from './ToDoFilterSelector.modules.scss'

interface ToDoFilterSelectorProps {
  onSelect:(filterType:ToDoFilterTypeEnum)=>void
  filter: ToDoFilterTypeEnum
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exhaustiveCheck = (_:never)=> {}

const getFiltersMappedTypes = ()=> Object.values(ToDoFilterTypeEnum).map(f=>{
  switch(f){
    case ToDoFilterTypeEnum.ALL:
      return {label:'All', value:ToDoFilterTypeEnum.ALL }
    case ToDoFilterTypeEnum.CURRENT:
      return {label:'Current', value:ToDoFilterTypeEnum.CURRENT }
    case ToDoFilterTypeEnum.COMPLETED:
      return {label:'Completed', value:ToDoFilterTypeEnum.COMPLETED }
    default:
      exhaustiveCheck(f)
      return {label:'', value:''}
  }
})

const mappedFiltersTypes= getFiltersMappedTypes()

const ToDoFilterSelector: FC<ToDoFilterSelectorProps> = memo((props) => {
  const { onSelect, filter } = props

  return (
    <Select
      className={styles.container}
      onChange={onSelect}
      options={mappedFiltersTypes}
      value={filter}
      placeholder={'Choose filter'}
    />
  )
})

export default ToDoFilterSelector
