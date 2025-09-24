import React, { useRef, useState } from 'react'

const Counter = () => {
  const countRef = useRef(0);
  // console.log("Ref Count", countRef.current)
  const [renderCount, setRenderCount] = useState(0);
  console.log("useState is : ", renderCount)
  const handleClick = () =>{
    countRef.current+=1;  
    console.log("Ref Count", countRef.current)
  }

  return (
    <div>
      <h2>Hello Counter</h2>
      <p>Render Count: {renderCount}</p>
      <button onClick={handleClick}>Increase Ref Count (No Re-render)</button>
      <button onClick={()=>setRenderCount(renderCount+1)}>Force Re-render</button>
    </div>
  )
}

export default Counter

// Render : In react a "Render" refer to a process of react rendring (or updating) the components UI base on its current state or props when the state (renderCount) in this case changes;
// Using setRenderCount react re-render the component updating the new state 

// Re-render: 
// clicking increase ref count (no - re-render)
// increament count ref does'n trigger re-render when value changees

// Clicking force to re-render 
// Updates renderCount using setRenderCount causing the components render and update the display the renderCount