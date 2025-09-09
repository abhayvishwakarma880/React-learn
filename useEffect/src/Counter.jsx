import React, { useEffect, useState } from 'react'
import Demo from './Demo';
// import Timer from './Timer';

export default function Counter() {
  const [Count, setCount] = useState(0);
  // Runs only once when the component is lods
  useEffect(()=>{
    console.log("Component Mounted")
  }, [])
  // useEffect(()=>{
  //   console.log("Component Mounted")
  // })

  // runs whenever count change 
  useEffect(()=>{
    console.log(`Count Updated :${Count}`)
  },[Count])
  return (
    <div>
      <h1>Conter: {Count}</h1>
      <button onClick={()=>{setCount(Count+1)}}>Increase</button>
      <Demo />
      {/* <Timer /> */}
    </div>
  )
}
