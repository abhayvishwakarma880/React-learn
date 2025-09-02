// import './App.css'
import Home from './Website/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Website/Login';
import Signup from './Website/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './Website/Service';
import Alerts from './Website/Alerts';





function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
          <Route path="service" element={<Service />}/>
          <Route path="alert" element={<Alerts />}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
