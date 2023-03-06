import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomeContainer from './pages/HomeContainer'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeContainer />} />
        <Route>
          <Route path="category/:currentCategory" element={<HomeContainer />} />
        </Route>
        <Route path="edit" element={<>edit</>} />
        <Route path="setting" element={<>setting</>} />
      </Route>
    </Routes>
  )
}
