import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  // const [to, setTo] = useState([])

  const increament=useCallback(()=>{
    setCount((prev)=>prev+1);
  },[]);

  // const add = () =>{
  //   setTo([...to, text])
  //   setText("")
    // to.push(text)
  // }
  // setUserData([...userData, users]); 
  //   setUsers({ name: "", age: "" }); 

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increament}>Increament</button>
      <br />
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Typing Somethings..."
      />
      {/* <button onClick={add}>Add</button> */}
      <p>You type: {text}</p>
      {/* {to.map((a,index)=>{
        <h1>{a}</h1>
      })} */}
    </>
  );
}

export default App;
