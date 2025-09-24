import { useRef } from 'react'
import './App.css'

function App() {

  const inputFocus = useRef(null); // create useRef
  const handleFocus = () =>{
    inputFocus.current.focus(); // access DOM elements
  }
  return (
    <>
      <h2>useRef Examplem - Focus Input</h2>
      <input type="text" ref={inputFocus} placeholder='Click button to focus' />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  )
}

export default App
