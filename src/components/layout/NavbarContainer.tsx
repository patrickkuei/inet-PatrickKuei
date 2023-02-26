import { useState } from 'react'

import { AnonymIcon } from '@inet/icons'
import UserImage from '@inet/images/MR BIGBIRD.jpg'
import Navbar from './Navbar'

const getUserInfo = () => ({
  id: 1,
  name: 'giant p holder',
  avatar: <img src={UserImage} className="rounded-full" alt="giant p holder" />,
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
