import { Outlet } from 'react-router-dom'
import ArticleCategoryNavsContainer from './components/layout/ArticleCategoryNavsContainer'
import NavbarContainer from './components/layout/NavbarContainer'

export default function Layout() {
  return (
    <div className="w-screen pb-9 min-w-94 desktop:bg-background-white">
      <NavbarContainer />
      <div className="flex desktop:my-8 desktop:mx-16 desktop-lg:mx-36">
        <ArticleCategoryNavsContainer />
        <Outlet />
      </div>
    </div>
  )
}
