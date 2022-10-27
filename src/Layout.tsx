import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarContainer from './components/layout/NavbarContainer'

export default function Layout() {
  return (
    <div className="w-screen min-w-94 h-screen min-h-screen desktop:bg-background-white">
      <NavbarContainer />
      <Outlet />
    </div>
  )
}
