import React, { useState } from 'react'
import Navbar from './Navbar'

export default function NavbarContainer() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

  const handleSidebarToggle = () => {
    setIsSideBarOpen((prev) => !prev)
  }

  return (
    <Navbar
      isSideBarOpen={isSideBarOpen}
      onSidebarToggle={handleSidebarToggle}
    />
  )
}
