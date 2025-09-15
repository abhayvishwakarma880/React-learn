
import Dashboard from './Admin/Dashboard';
import DashBySir from './Admin/DashBySir';
import Login from './Admin/Login';
import Signup from './Admin/Signup'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashBySir" element={<DashBySir />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
