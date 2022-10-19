import React from 'react'
import HomeContent from '../components/home/HomeContent'
import NavbarContainer from '../components/layout/NavbarContainer'

export default function HomeContainer() {
  return (
    <div className="w-screen min-w-94 h-screen min-h-screen desktop:bg-background-white">
      <NavbarContainer />
      <HomeContent />
    </div>
  )
}
