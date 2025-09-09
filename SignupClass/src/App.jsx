
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
        </Routes>
      </Router>
      
    </>
  )
}

export default App
