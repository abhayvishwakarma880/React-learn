import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Signup } from './Admin/Signup'
import './App.css'
import { Login } from './Admin/Login'
import { Dash } from './Admin/Dashboard'
import { Dashboard2 } from './Admin/Dashboard2'

function App() {
  

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard2/>} />
      </Routes>
    </Router>
  )
}

export default App
