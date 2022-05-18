import React, { MouseEventHandler, ReactElement } from 'react'
import { ReactComponent as LoginIcon } from '../../icons/loginIcon.svg'
import { ReactComponent as SignUpIcon } from '../../icons/signupIcon.svg'
import Button from './Button'

type Props = {
  icon: 'login' | 'signup'
  className?: string
  title: string
  onClick: MouseEventHandler
}

type IIconMap<ReactElement> = {
  [key: string]: ReactElement
}

export default function DropdownItem({
  icon,
  className: customClassName = '',
  title,
  onClick,
}: Props) {
  const className = `w-full p-3 flex items-center gap-3 whitespace-nowrap ${customClassName}`

  const iconMap: IIconMap<ReactElement> = {
    login: <LoginIcon />,
    signup: <SignUpIcon />,
  }

  return (
    <li>
      <Button
        variant="custom"
        title={title}
        icon={iconMap[icon]}
        className={className}
        onClick={onClick}
      />
    </li>
  )
}
