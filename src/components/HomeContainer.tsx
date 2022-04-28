import React, { MouseEventHandler, useState } from 'react'
import Home from './Home'

type Props = {}

// eslint-disable-next-line no-empty-pattern
export default function HomeContainer({}: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

  const handleMobileMenuClick: MouseEventHandler = () => {
    setIsSideBarOpen((prev) => !prev)
  }
  const [isNavMenuOpen, setIsNavMenyOpen] = useState<boolean>(false)

  const handleNavbarButtonClick: MouseEventHandler = () => {
    setIsNavMenyOpen((prev) => !prev)
  }
  return (
    <Home
      isSideBarOpen={isSideBarOpen}
      onMobileMenuClick={handleMobileMenuClick}
      isNavMenuOpen={isNavMenuOpen}
      onNavbarButtonClick={handleNavbarButtonClick}
    />
  )
}
