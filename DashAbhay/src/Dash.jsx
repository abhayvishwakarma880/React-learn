import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Sidebar = ({ open, setOpen, active, setActive }) => {
  const menuItems = ["Dashboard", "Users", "Orders", "Products", "Settings", "Logout"];

  return (
    <aside
      className={`fixed top-0 left-0 w-64 h-full bg-gradient-to-b from-indigo-500 to-purple-600 text-white p-6 z-40 transform transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      data-aos="fade-right"
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button className="md:hidden" onClick={() => setOpen(false)}>
          <XMarkIcon className="w-7 h-7" />
        </button>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            onClick={() => setActive(item)}
            className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 ${
              active === item ? "bg-white text-purple-700 font-semibold" : "hover:bg-purple-400"
            }`}
            data-aos="zoom-in"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const Navbar = ({ setOpen }) => (
  <header
    className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-4 bg-white shadow z-30 md:ml-64"
    data-aos="fade-down"
  >
    <button className="md:hidden" onClick={() => setOpen(true)}>
      <Bars3Icon className="w-7 h-7" />
    </button>
    <h1 className="text-xl font-bold">
      Welcome back, <span className="text-purple-700">Abhay</span>
    </h1>
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-lg px-3 py-2 text-sm"
      />
      <div className="hidden sm:block text-right">
        <p className="font-semibold">Abhay Vishwakarma</p>
        <p className="text-sm text-gray-500">abhay@gmail.com</p>
      </div>
      <div className="w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full">
        A
      </div>
    </div>
  </header>
);

const StatCard = ({ title, value, percent, positive }) => (
  <div
    className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
    data-aos="fade-up"
  >
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
    <span
      className={`text-sm px-2 py-1 rounded ${
        positive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
      }`}
    >
      {positive ? "+" : "-"}
      {percent}%
    </span>
  </div>
);

export default function Dash() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Dashboard");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} active={active} setActive={setActive} />

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-100 md:ml-64">
        <Navbar setOpen={setOpen} />

        {/* Scrollable content area */}
        <main className="pt-20 p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatCard title="Total Users" value="1,240" percent="4.2" positive />
            <StatCard title="Orders Today" value="320" percent="2.5" positive={false} />
            <StatCard title="Revenue" value="$12,400" percent="5.1" positive />
          </div>

          {/* Charts Section (dummy for now) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="bg-white p-6 rounded-xl shadow"
              data-aos="fade-up"
            >
              <h2 className="font-bold text-lg mb-4">Revenue Overview</h2>
              <div className="h-40 flex items-center justify-center text-gray-400">
                Chart will go here
              </div>
            </div>
            <div
              className="bg-white p-6 rounded-xl shadow"
              data-aos="fade-left"
            >
              <h2 className="font-bold text-lg mb-4">Activity</h2>
              <p className="text-gray-600">Some activity log here...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
