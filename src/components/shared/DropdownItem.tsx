import React, { MouseEventHandler, ReactElement } from 'react'
import { ReactComponent as AnonymIcon } from '../../icons/anonymIcon.svg'
import { ReactComponent as BookmarkIcon } from '../../icons/bookmarkIcon.svg'
import { ReactComponent as EditIcon } from '../../icons/editIcon.svg'
import { ReactComponent as HistoryIcon } from '../../icons/historyIcon.svg'
import { ReactComponent as LoginIcon } from '../../icons/loginIcon.svg'
import { ReactComponent as LogOutIcon } from '../../icons/logOutIcon.svg'
import { ReactComponent as SettingIcon } from '../../icons/settingIcon.svg'
import { ReactComponent as SignUpIcon } from '../../icons/signupIcon.svg'
import Button from './Button'

type Props = {
  icon:
    | 'login'
    | 'signup'
    | 'edit'
    | 'user'
    | 'bookmark'
    | 'history'
    | 'setting'
    | 'setting'
    | 'logOut'
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
    setting: <SettingIcon />,
    bookmark: <BookmarkIcon />,
    edit: <EditIcon />,
    history: <HistoryIcon />,
    logOut: <LogOutIcon />,
    user: <AnonymIcon />,
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
