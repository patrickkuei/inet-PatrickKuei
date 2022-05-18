import React, { MouseEventHandler } from 'react'
import DropdownItem from './DropdownItem'

type Props = {
  icon: 'login' | 'signup'
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
