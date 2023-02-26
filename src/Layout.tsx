import { Outlet } from 'react-router-dom'
import NavbarContainer from './components/layout/NavbarContainer'
import ArticleCategorySection from './components/shared/ArticleCategorySection'

export default function Layout() {
  return (
    <div className="w-screen pb-9 min-w-94 desktop:bg-background-white">
      <NavbarContainer />
      <div className="flex desktop:my-8 desktop:mx-16 desktop-lg:mx-36">
        <ArticleCategorySection />
        <Outlet />
      </div>
    </div>
  )
}
