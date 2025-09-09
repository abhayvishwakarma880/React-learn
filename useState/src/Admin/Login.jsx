import React, { useState } from "react";
import './Signup.css'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



function Login() {
  const [loginData, setLoginData] = useState({
    emal: "",
    password: ""
  });

  const handlechange = (e) =>{
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  const navigate=useNavigate();
  const handleLogin = (e) =>{
    e.preventDefault();
    console.log(loginData);
    const storeData = JSON.parse(localStorage.getItem("signupData"));
    if(!storeData){
      Swal.fire("Error", "No User found! Please Signup first");
      return;
    }
    if(storeData.email === loginData.email && storeData.password === loginData.password){
      localStorage.setItem("LoginData", JSON.stringify(storeData));
      Swal.fire("Success", "Login Successfull");
      navigate("/dashboard");
    
    }
    else{
      Swal.fire("Error", "Invalid Email or Password");
    }
    
  }
  return (
    <div className="main">
      <h1>Login</h1>
      <form>
      <label htmlFor="">Email</label>
      <br />
      <input
        type="text"
        name="email"
        onChange={handlechange}
        value={loginData.email}
        placeholder="Enter Your Email"
      /> <br /><br />
      <label htmlFor="">Email</label>
      <br />
      <input
        type="password"
        name="password"
        onChange={handlechange}
        value={loginData.password}
        placeholder="Enter Your password"
      />
      <button onClick={handleLogin} type="submit">Login</button>
      </form>
    </div>
  );
}
export default Login;