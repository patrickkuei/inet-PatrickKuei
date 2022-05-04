import React, { useState } from 'react'
import Home from './Home'

export default function HomeContainer() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

  const handleSidebarToggle = () => {
    setIsSideBarOpen((prev) => !prev)
  }
  const [isNavMenuOpen, setIsNavMenyOpen] = useState<boolean>(false)

  const handleNavbarButtonClick = () => {
    setIsNavMenyOpen((prev) => !prev)
  }
  return (
    <Home
      isSideBarOpen={isSideBarOpen}
      onSidebarToggle={handleSidebarToggle}
      isNavMenuOpen={isNavMenuOpen}
      onNavbarButtonClick={handleNavbarButtonClick}
    />
  )
}
