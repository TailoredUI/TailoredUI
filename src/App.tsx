import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Outlet from './Outlet'
import NotFound from './pages/NotFound'

const Template = () => <div>Template Page</div>
const Docs = () => <div>Docs Page</div>
const Components = () => <div>Components Page</div>

const App = () => {
  return (
    <Router>
      <Outlet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/*" element={<Template />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/components" element={<Components />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Outlet>
    </Router>
  )
}

export default App
