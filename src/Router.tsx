import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import ArticleDirectoryPage from './pages/ArticleDirectoryPage'
import GlobalSearchResultPage from './pages/GlobalSearchResultPage'
import HomePage from './pages/HomePage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<Navigate to="/popular" />} />
        <Route index element={<Navigate to="/popular" />} />
        <Route path="popular" element={<HomePage />} />
        <Route
          path="category/:categoryCode"
          element={<ArticleDirectoryPage />}
        />
        <Route path="search" element={<GlobalSearchResultPage />} />
        <Route path="edit" element={<>edit</>} />
        <Route path="setting" element={<>setting</>} />
      </Route>
    </Routes>
  )
}
