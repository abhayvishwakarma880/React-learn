import React from "react";
import { Link } from "react-router-dom";

function Signup(){
  return(
    <div>
      <h1>Sign Up</h1>
      <form action="">
        Username : <input type="text" /><br /><br />
        Email : <input type="text" /><br /><br />
        Password : <input type="password" /><br /><br />
        <button>Sign Up</button>
        
        {/* <p>if you have not account <button> <Link to='login' /> Login </button> </p> */}
        <p> Already account <button> <Link to="/login">login</Link></button></p>
      </form><br />
      
    </div>
  )
}
export default Signup;