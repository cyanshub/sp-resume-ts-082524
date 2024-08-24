import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResumePage from './pages/ResumePage'
import HomePage from './pages/HomePage'

// 定義專案基礎路徑
const basename = import.meta.env.VITE_PUBLIC_URL

const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/resumes" element={<ResumePage />}></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
