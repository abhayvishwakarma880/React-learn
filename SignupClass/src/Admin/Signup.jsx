import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.email ||
      !formData.password ||
      !formData.cpassword
    ) {
      // alert("please fill All fields");
      // Swal.fire("Error", "Please fill all fields", "error");
      toast.error("Please fill all fields");
      //   toast.success("Login Successful!", {
      //   position: "top-right",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      // }); // ✅ success
    } else if (formData.password !== formData.cpassword) {
      // alert("New Password and Confirm Password does not match");
      Swal.fire("Error", "New Password and Confirm Password does not match", "error");
    }else{
      localStorage.setItem("signupData", JSON.stringify(formData));
      // alert("data saved");
      Swal.fire("Success", "Data Saved Successfully!", "success");
      setFormData({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
      })
      navigate("/login");
    }
  };
  return (
    <div className="min-height flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* heading start */}
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Create Account
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Join our community and start your journey!
        </p>
        {/* heading end */}

        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                First Name{" "}
              </label>
              <input
                type="text"
                placeholder="First Name"
                onChange={handelChange}
                name="fname"
                value={formData.fname}
                className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                onChange={handelChange}
                name="lname"
                value={formData.lname}
                className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>
          {/* email  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your Email"
              onChange={handelChange}
              name="email"
              value={formData.email}
              className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outlne-none"
            />
          </div>

          {/* password  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Your Password"
              onChange={handelChange}
              name="password"
              value={formData.password}
              className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* confirm Password  */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={handelChange}
              name="cpassword"
              value={formData.cpassword}
              className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* terms  */}
          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 text-blue-600" />
            <p className="text-sm text-gray-600">
              I agree to This{" "}
              <a href="#" className="text-blue-500 underline">
                terms and conditions
              </a>
            </p>
          </div>
          <button
            // type="submit"
            onClick={handelSubmit}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition cursor-pointer"
          >
            Create Account
          </button>
          <p className="text-center text-gray-500">
            Already have an account?{" "}
            <Link className="text-blue-500 underline" to="login">
              login
            </Link>
          </p>

          {/* social signup  */}
          <div className="mt-6">
            <p className="text-center text-sm text-gray-500">Or signup with</p>
            <div className="flex justify-center gap-4 mt-3">
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100 cursor-pointer">
                Google
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100 cursor-pointer">
                Facebook
              </button>
              <button className="px-4 py-2 border rounded-md hover:bg-gray-100 cursor-pointer">
                Twitter
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

    </div>
  );
};

export default Signup;
