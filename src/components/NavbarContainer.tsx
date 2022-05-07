import React, { useState } from 'react'
import Navbar from './Navbar'

export default function NavbarContainer() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

  const handleSidebarToggle = () => {
    setIsSideBarOpen((prev) => !prev)
  }
  const [isNavMenuOpen, setIsNavMenyOpen] = useState<boolean>(false)

  const handleNavbarButtonClick = () => {
    setIsNavMenyOpen((prev) => !prev)
  }
  return (
    <Navbar
      isSideBarOpen={isSideBarOpen}
      onSidebarToggle={handleSidebarToggle}
      isNavMenuOpen={isNavMenuOpen}
      onNavbarButtonClick={handleNavbarButtonClick}
    />
  )
}
