import React from 'react'
import Navbar from './Navbar'

export default function NavbarContainer() {
  const handleDropdownItemClick = () => {
    console.log('dropdown item click')
  }

  return <Navbar onDropdownItemClick={handleDropdownItemClick} />
}
