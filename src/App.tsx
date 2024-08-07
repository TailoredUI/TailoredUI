import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Outlet from './Outlet'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Components from './pages/Components'
import Collections from './pages/Collections'

// Placeholder pages
const Docs = () => <div>Docs Page</div>
const Template = () => <div>Template Page</div>

const App = () => {
  return (
    <Router>
      <Outlet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:type" element={<Components />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/template" element={<Template />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Outlet>
    </Router>
  )
}

export default App
