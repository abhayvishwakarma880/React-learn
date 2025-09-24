import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // user form state (object hi rakho, array nahi)
  const [users, setUsers] = useState({
    fname: "",
    lname: "",
    date: "",
    mob: "",
    email: "",
    pass: "",
    adds: "",
    remark: "",
  });

  const handleChange = (e) => {
    setUsers((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [userData, setUserData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      users.fname &&
      users.lname &&
      users.date &&
      users.mob &&
      users.email &&
      users.pass &&
      users.adds &&
      users.remark
    ) {
      setUserData([...userData, users]);
      setUsers({
        fname: "",
        lname: "",
        date: "",
        mob: "",
        email: "",
        pass: "",
        adds: "",
        remark: "",
      });
      toast.success("User added successfully!");
      setIsModalOpen(false); 
    } else {
      toast.error("please fill all fields !");
    }
  };

  const handleDelete = (index) => {
    const updatedData = userData.filter((_, i) => i !== index);
    setUserData(updatedData);
    toast.success("User Deleted !");
  };

  return (
    <div className="p-4">
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Search
        </button>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Add User
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background Blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Box */}
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative z-10 transform transition-all duration-300 scale-95 animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={users.fname}
                  name="fname"
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="text"
                  value={users.lname}
                  name="lname"
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <input
                type="date"
                value={users.date}
                name="date"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="tel"
                value={users.mob}
                name="mob"
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="email"
                value={users.email}
                name="email"
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="password"
                value={users.pass}
                name="pass"
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="text"
                value={users.adds}
                name="adds"
                onChange={handleChange}
                placeholder="Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <textarea
                placeholder="Remarks"
                value={users.remark}
                name="remark"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Add User
                </button>
              </div>
            </form>

            {/* Close X button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <h1 className="font-bold text-4xl mb-4">Users</h1>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}
      </style>

      {/* table start */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">First Name</th>
              <th className="px-4 py-2 text-left font-semibold">Last Name</th>
              <th className="px-4 py-2 text-left font-semibold">DOB</th>
              <th className="px-4 py-2 text-left font-semibold">Phone</th>
              <th className="px-4 py-2 text-left font-semibold">Email</th>
              <th className="px-4 py-2 text-left font-semibold">Address</th>
              <th className="px-4 py-2 text-left font-semibold">Remarks</th>
              <th className="px-4 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((a, index) => (
              <tr className="border-t" key={index}>
                <td className="px-4 py-2">{a.fname}</td>
                <td className="px-4 py-2">{a.lname}</td>
                <td className="px-4 py-2">{a.date}</td>
                <td className="px-4 py-2">{a.mob}</td>
                <td className="px-4 py-2">{a.email}</td>
                <td className="px-4 py-2">{a.adds}</td>
                <td className="px-4 py-2">{a.remark}</td>
                <td className="px-4 py-2">
                  <button
                    className="cursor-pointer"
                    onClick={() => handleDelete(index)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* table end */}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Users;
