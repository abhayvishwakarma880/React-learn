
import './App.css'
import Index from './Index';
import Nav from './Task/Nav'
import Home from './Task/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from './Task2/Home'

function App() {

  return (
    <>
      {/* <Link to="/task1">Task 1</Link> */}
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/task1" element={<Nav />} />
          <Route path="/task2" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
