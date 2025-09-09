import React, { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleIn = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.cpassword
    ) {
      alert("please fill all the fields");
      return;
    } else if (formData.password !== formData.cpassword) {
      alert("password does not match");
      return;
    }
    localStorage.setItem("signupData", JSON.stringify(formData));
    alert("data saved");
    setFormData({
      username: "",
      email: "",
      password: "",
      cpassword: "",
    });
  };
  return (
    <div className=" mx-auto md:w-6xl w-full  ">
      <h1>Signup Here</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={FormData.username}
            placeholder="Enter Your username"
            onChange={handleIn}
            className="py-1 border px-2 rounded "
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={FormData.email}
            placeholder="Enter Your Email"
            onChange={handleIn}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={FormData.password}
            placeholder="Enter Your Password"
            onChange={handleIn}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            value={FormData.cpassword}
            placeholder="Enter Your Confirm Password"
            onChange={handleIn}
          />
        </div>

        <button onClick={handleSubmit}>Signup</button>
      </div>
    </div>
  );
}
export default Signup;
