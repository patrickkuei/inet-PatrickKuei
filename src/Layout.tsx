import { Outlet } from 'react-router-dom'
import NavbarContainer from './components/layout/NavbarContainer'

export default function Layout() {
  return (
    <div className="w-screen pb-9 min-w-94 desktop:bg-background-white">
      <NavbarContainer />
      <Outlet />
    </div>
  )
}
