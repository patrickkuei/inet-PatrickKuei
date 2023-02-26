import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomeContainer from './pages/HomeContainer'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeContainer />} />
        <Route path="/edit" element={<></>} />
        <Route path="/setting" element={<></>} />
      </Route>
    </Routes>
  )
}
