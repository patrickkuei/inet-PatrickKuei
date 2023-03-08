import { Outlet, useLocation } from 'react-router-dom'
import ArticleCategorySection from './components/layout/ArticleCategorySection'
import NavbarContainer from './components/layout/NavbarContainer'
import useConditionNavigate from './hooks/use-condition-navigate'

export default function Layout() {
  const location = useLocation()
  useConditionNavigate('/', 'category/popular')

  return (
    <div className="w-screen pb-9 min-w-94 desktop:bg-background-white">
      <NavbarContainer />
      <div className="flex desktop:my-8 desktop:mx-16 desktop-lg:mx-36">
        <ArticleCategorySection />
        <Outlet key={location.pathname} />
      </div>
    </div>
  )
}
