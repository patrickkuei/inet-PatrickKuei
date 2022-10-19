import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="w-screen min-w-94 h-screen min-h-screen desktop:bg-background-white">
      <Outlet />
    </div>
  )
}
