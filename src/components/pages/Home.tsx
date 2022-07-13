import React from 'react'
import HomeContent from './HomeContent'
import NavbarContainer from './NavbarContainer'

export default function Home() {
  return (
    <div className="w-screen min-w-94 h-screen min-h-screen desktop:bg-background-white">
      <NavbarContainer />
      <HomeContent />
    </div>
  )
}
