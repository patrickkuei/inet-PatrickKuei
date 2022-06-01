import React, { MouseEventHandler } from 'react'
import { IconName } from '../../icons'
import DropdownItem from './DropdownItem'

type Props = {
  icon: IconName
  className?: string
  title: string
  onClick: MouseEventHandler
}

export default function DropdownItemContainer({
  title,
  icon,
  className,
  onClick,
  ...others
}: Props) {
  return (
    <DropdownItem
      title={title}
      icon={icon}
      className={className}
      onClick={onClick}
      {...others}
    />
  )
}
