import { MouseEventHandler } from 'react'
import { IconMap, IconName } from '../../icons'
import Button from './Button'

type Props = {
  icon: IconName
  className?: string
  title: string
  onClick: MouseEventHandler
}

export default function DropdownItem({
  icon,
  className: customClassName = '',
  title,
  onClick,
}: Props) {
  const className = `w-full p-3 flex items-center gap-3 whitespace-nowrap ${customClassName}`
  const Icon = IconMap[icon]

  return (
    <li>
      <Button
        variant="custom"
        title={title}
        icon={<Icon />}
        className={className}
        onClick={onClick}
      />
    </li>
  )
}
