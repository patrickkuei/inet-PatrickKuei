import React, { useState } from 'react'
import { AnonymIcon } from '../../icons'
import { ReactComponent as UserImage } from '../../images/MR BIGBIRD.svg'
import Navbar from './Navbar'

const getUserInfo = () => ({
  id: 1,
  name: 'giant p holder',
  avatar: <UserImage />,
})

export default function NavbarContainer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = isLoggedIn
    ? getUserInfo()
    : { id: 0, name: 'anonymous', avatar: <AnonymIcon /> }

  const handleDropdownItemClick = () => {
    console.log('dropdown item click')
  }

  return <Navbar user={user} onDropdownItemClick={handleDropdownItemClick} />
}
