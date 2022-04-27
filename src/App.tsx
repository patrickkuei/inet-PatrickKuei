import React, { useState } from 'react'
import './App.css'
import HomeContainer from './components/HomeContainer'
import SidebarMobile from './components/SidebarMobile'

function App() {
  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const onMobileMenuClick = () => {
    setSideBarOpen((prev) => !prev)
  }

  return (
    <div className="App">
      <HomeContainer onMobileMenuClick={onMobileMenuClick} />
      {isSideBarOpen ? <SidebarMobile /> : null}
    </div>
  )
}

export default App
