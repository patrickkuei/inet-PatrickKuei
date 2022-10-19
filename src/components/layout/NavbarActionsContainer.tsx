import React, { ReactElement } from 'react'
import NavbarAction from './NavbarActions'

type Props = {
  isLogin: boolean
  avatar: ReactElement
}

export default function NavbarActionContainer({ isLogin, avatar }: Props) {
  const onLogOutClick = () => {
    console.log('log out')
  }

  return (
    <NavbarAction
      isLogin={isLogin}
      avatar={avatar}
      onLogOutClick={onLogOutClick}
    />
  )
}
