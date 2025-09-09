import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Signup.css";

export function Signup(){
    const[formdata,setFormData]=useState({username:"",email:"",password:""});
    const handlechange=(e)=>{
        setFormData({...formdata,[e.target.name]:e.target.value})
    }
    const navigate=useNavigate();
    const handelSubmit=(e)=>{
        e.preventDefault();
        if(!formdata.username ||!formdata.email || !formdata.password ){
            Swal.fire("Error","Please fill all fields","error");
            return;
        }
        // Save in localStorage
        localStorage.setItem("signupData",JSON.stringify(formdata));
        console.log(formdata);
        
        Swal.fire("Success","Signup successfull!","success");
        setFormData({username:"",email:"",password:""});
        navigate("/login");
    };
    return(
        <>
        <div className="main">
        <h1>Signup</h1>
        <form onSubmit={handelSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={FormData.username} onChange={handlechange} placeholder="Enter Your Name"/> <br /><br />
        <label>Email</label>
        <input type="email" name="email" value={FormData.email} onChange={handlechange} placeholder="Enter Your Email"/> <br /><br />
        <label>Password</label>
        <input type="password" name="password" value={FormData.password} onChange={handlechange} placeholder="Enter Your Password"/> <br /><br />
        </form>
        <button onClick={handelSubmit} type="submit">Signup</button>
        </div>
        </>
    )
};
export default Signup;