import React, { useState } from 'react'
import { ReactComponent as UserIcon } from '../../icons/userIcon.svg'
import Navbar from './Navbar'

const getUserInfo = () => ({
  id: 1,
  name: 'giant p holder',
  avatar: <UserIcon />,
})

export default function NavbarContainer() {
  const [isLoging, setIsLoging] = useState(false)
  const user = isLoging
    ? getUserInfo()
    : { id: 0, name: 'anonymous', avatar: <UserIcon /> }

  const handleDropdownItemClick = () => {
    console.log('dropdown item click')
  }

  return <Navbar user={user} onDropdownItemClick={handleDropdownItemClick} />
}
