import { MouseEventHandler } from 'react'

import { IconName } from '@inet/icons'
import DropdownItem from './DropdownItem'

type Props = {
  icon: IconName
  className?: string
  title: string
  onClick?: MouseEventHandler
  linkTo?: string
}

export default function DropdownItemContainer({
  title,
  icon,
  className,
  onClick,
  linkTo = 'linkTo',
}: Props) {
  const defaultOnClick = () => {
    console.log(linkTo)
  }

  return (
    <DropdownItem
      title={title}
      icon={icon}
      className={className}
      onClick={onClick || defaultOnClick}
    />
  )
}
