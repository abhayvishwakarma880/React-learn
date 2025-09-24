import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(){
    const [loginData,setLoginData]=useState({
        email:"",
        password:""
    })
    const navigate=useNavigate();
    
    const handleLogin=(e)=>{
        setLoginData({...loginData,[e.target.name]:e.target.value});
    }
    const handelsubmit=(e)=>{
        e.preventDefault();
        const storeData=JSON.parse(localStorage.getItem("loginData"));
        console.log(storeData);
        
        
        if(!storeData){
            alert("Error","No user found","Please signup first");
            return;
        }
        else if(storeData.useremail===loginData.email && storeData.userpassword===loginData.password){
            localStorage.setItem("LoginData",JSON.stringify(storeData));
            alert("Success","Login Succesfull","success");
            setLoginData({email:"",password:""});
            navigate("../dashboard");
            
        }
        else{
            alert("Error","invalid email or password","error");
        }
    };
    return(
        <>
        <div className="main-container">
            <label>Email</label><br /> <br />
            <input className="Lemail" type="text" name="email" value={loginData.email} onChange={handleLogin} placeholder="Enter Email"/><br /><br />
            <label>Password</label><br /><br />
            <input className="Lpass" type="text" name="password" value={loginData.password} onChange={handleLogin} placeholder="Enter password"/><br /><br />
            <button className="Lbtn" onClick={handelsubmit}>Login</button>
        </div>
        </>
    )
}