import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Navigate to="category/popular" />} />
        <Route path="category/:currentCategory" element={<HomePage />} />
        <Route path="edit" element={<>edit</>} />
        <Route path="setting" element={<>setting</>} />
      </Route>
    </Routes>
  )
}
