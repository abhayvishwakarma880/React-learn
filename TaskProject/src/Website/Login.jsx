import React from "react";
import { Link } from "react-router-dom";

function Login(){
  return(
    <div>
      <h1>Login</h1>
      <form action="">
        Email : <input type="text" /><br /><br />
        Password : <input type="password" /><br /><br />
        <button>Log in</button>
        <p>if you have not account <button> <Link to='/signup' > signup</Link> </button> </p>
      </form>
    </div>
  )
}
export default Login;