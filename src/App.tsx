import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import ProjectDetail from './pages/ProjectDetails'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/proyecto/:id" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App