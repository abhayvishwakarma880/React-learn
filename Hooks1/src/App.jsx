import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./website/Home";
import User from './website/User';
import Lead from './website/Lead';
;
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/lead" element={<Lead />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
