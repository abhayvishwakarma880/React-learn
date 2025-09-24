import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

function App() {
  // stopwatch state 

  const [time, setTime] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef  = useRef(null)

  // prime checker state
  
  const [number, setNumber] = useState("")
  // Stopwatch functionality

  useEffect(()=>{
    if(isRunning){
      intervalRef.current=setInterval(()=>{
        setTime((pre)=>pre+1);
      },500)
    }
    else{
      clearInterval(intervalRef.current);
    }
    return()=>clearInterval(intervalRef.current)
  },[isRunning])

  const startStopWatch = () =>setIsRunning(true);
  const stopStopWatch = () => setIsRunning(false)
  const resetStopwatch = () =>{
    setIsRunning(false)
    setTime(0);
  }

  // Prime Number Calculation using useMemo() 

  const isPrime=useMemo(()=>{
    const n = parseInt(number,10);
    if(isNaN(n) || n<2) return false;
    for(let i=2; i<=Math.sqrt(n); i++){
      console.log(i )
      if(n%i === 0) return false;
    }
    return true;
  },[number])



  return (
    <div className='App' style={{textAlign:"center",marginTop:"30px"}}>
      <h2>Stop Watch</h2>
      <h1>{time} s</h1>
      <button onClick={startStopWatch}>Start</button>
      <button onClick={stopStopWatch}>Stop</button>
      <button onClick={resetStopwatch}>Reset</button>
      <hr style={{margin:"20px 0"}}/>
      <h2>Prime Number Checker</h2>
      <input type="number" placeholder='Enter a number' value={number} onChange={(e)=>setNumber(e.target.value)} />
      {number && (
        <p>
          {number} is {isPrime ? "Prime": "not Prime"}
        </p>
      )}
    </div>
  )
}

export default App
