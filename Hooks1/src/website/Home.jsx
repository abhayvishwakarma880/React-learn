import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home(){
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Increament</button> <br /> <br />
      <Link to="/user">User</Link> <br /> <br />
      <Link to="/lead">Lead</Link><br /> <br />
    </>
  );
}
export default Home;