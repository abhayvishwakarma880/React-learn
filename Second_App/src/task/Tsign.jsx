import React from "react";
import "./Task1.css";
import { Link } from "react-router-dom";
let coder = "{Coders}";
function Tsign(){
  return (
    <div>
      <h1 className="digi">Digi<span>{coder}</span> </h1>
      <div className="main">
        <span className="h1">Sign Up Here</span>
        <form className="form"> <br />
          <input type="text" placeholder="Enter Name" /> <br /> <br /> 
          <input type="text" placeholder="Username" /> <br /> <br /> 
          <input type="text" placeholder="Enter Email" /> <br /> <br /> 
          <input type="password" placeholder="Enter Password" /> <br /> <br />
          <button className="btn btn-danger">Login</button>
          <Link to="/task1" > <p className="error">Already an Account </p></Link>
        </form>
      </div>
    </div>
  );
}
export default Tsign;