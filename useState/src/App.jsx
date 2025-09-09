// import './App.css'
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './Admin/Signup.jsx'
import Login from './Admin/Login.jsx';
import Dashboard from './Admin/Dashboard.jsx';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
