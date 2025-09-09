import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Counter from './Counter';


function App() {

  return (
      
      <Router>
        <Routes>
          <Route path='/' element={<Counter />} />
        </Routes>
      </Router>
 
  )
}

export default App
