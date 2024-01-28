import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Outlet from "./components/Outlet"

const Template = () => <div>Template Page</div>
const Docs = () => <div>Docs Page</div>

const App = () => {
  return (
    <Router>
      <Outlet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Template />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
      </Outlet>
    </Router>
  )
}

export default App
