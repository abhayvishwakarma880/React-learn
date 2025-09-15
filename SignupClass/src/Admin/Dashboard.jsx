import React, { useState } from 'react';
import mai from './mai.jpg'

const Dashboard = () => {
  // const [dash, setDash] = useState({
  //   fname:"",
  //   lname:"",
  //   email:"",
  //   password:"",
  // })
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      {/* <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-lg font-medium text-gray-900">
              Welcome back, Alex Johnson
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm">
                  AJ
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}

      <div className="h-min w-full flex items-center bg-white shadow">
        <div>
          <h1 className="p-5 w-full pr-20 text-white bg-blue-600 text-2xl font-bold">
            Dashboard
          </h1>
        </div>
        <div>
          <h1 className="pl-5 text-2xl font-bold md:text-red-500">Welcome Back, Abhay</h1>
          <p className="pl-5 text-gray-500 ">
            Here's what's happening with your store today.
          </p>
        </div>
        <input
          type="text"
          className="border rounded-md h-min p-1 pl-2 bg-white mx-auto w-72"
          placeholder="Search Here..."
        />
        <div className="pr-5">
          <p className="text-lg font-semibold">Abhay Vishwakarma</p>
          <p>Administartor</p>
        </div>
        <div
          className="h-16 w-16 rounded-full bg-blue-400 pr-10"
          style={{ backgroundImage: `url(${mai})`, backgroundSize: "cover" }}
          classNamepr-10
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;