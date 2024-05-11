import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Outlet from './Outlet'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Components from './pages/Components'
import Collections from './pages/Collections'

const Docs = () => <div>Docs Page</div>
const Components = () => <div>Components Page</div>

const App = () => {
  return (
    <Router>
      <Outlet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:type" element={<Components />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/components" element={<Components />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Outlet>
    </Router>
  )
}

export default App
