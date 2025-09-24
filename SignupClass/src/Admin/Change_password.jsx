import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Change_password = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) =>{
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("signupData"))
    if(!storedData){
      // alert('No data')
      Swal.fire("Error", "No data", "error")
      return;
    }else if(loginData.email !== storedData.email){
      // alert('Email is Wrong')
      Swal.fire("Error", "Email is wrong", "error")
    }else if(loginData.password !== storedData.password){
      // alert('Password is wrong')
      Swal.fire("Error", "Password is wrong", "error")
    }
    else if( loginData.email === storedData.email && loginData.password === storedData.password ){
      // alert('login success')
      Swal.fire("Success", "Login Successfull", "success")
      navigate("/dashboard");
    }
  }
  return (
    <div className="m-auto">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-center text-2xl font-bold text-gray-800 ">
          Change password
        </h1>
        {/* <p className="text-center text-gray-500 text-sm">
          Change password 
        </p> */}

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Old Password:
            </label>
            <input
              type="password"
              placeholder="Your Old Password"
              className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              New Password:
            </label>
            <input
              type="password"
              placeholder="Your New Password"
              className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between items-center gap-2">
          </div>

          <div>
            <button
              onClick={handleSubmit}
              className="w-full  py-2 bg-gradient-to-r from-blue-500 to-purple-500  text-white font-semibold rounded-md cursor-pointer hover:opacity-90 transition duration-200 ease-in-out"
            >
              Update Password
            </button>
          </div>

          {/* <div>
            <p className="text-sm text-gray-700 text-center py-2">
              You have an account?{" "}
              <Link to="/login" className="text-blue-500 underline">
                Login Here
              </Link>{" "}
            </p>
            <p className="text-sm text-gray-700 text-center py-2">
              Don't have an account?{" "}
              <Link to="/" className="text-blue-500 underline">
                Sign up
              </Link>{" "}
            </p>
          </div> */}

          {/* <div>
            <p className="text-center text-gray-500 text-sm">
              Or countinue with
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <button className="rounded-md border w-full p-2 hover:bg-gray-100 cursor-pointer">
                Google
              </button>
              <button className="rounded-md border w-full p-2 hover:bg-gray-100 cursor-pointer">
                Facebook
              </button>
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Change_password;
