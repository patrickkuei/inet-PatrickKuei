import React, { useState } from 'react'
import { ReactComponent as AnonymIcon } from '../../icons/anonymIcon.svg'
import { ReactComponent as UserImage } from '../../images/MR BIGBIRD.svg'
import Navbar from './Navbar'

const getUserInfo = () => ({
  id: 1,
  name: 'giant p holder',
  avatar: <UserImage />,
})

export default function NavbarContainer() {
  const [isLogin, setIsLogin] = useState(true)
  const user = isLogin
    ? getUserInfo()
    : {
        id: 0,
        name: 'anonymous',
        avatar: <AnonymIcon />,
      }

  const handleDropdownItemClick = () => {
    console.log('dropdown item click')
  }

  return (
    <Navbar
      isLogin={isLogin}
      user={user}
      onDropdownItemClick={handleDropdownItemClick}
    />
  )
}
