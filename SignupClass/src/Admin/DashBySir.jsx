import React, { useState } from "react";
import "./Dash.css";

// mock data for the dashboard
const userData = {
  name: "Abhay Vishwakarma",
  email: "av96514290@gmal.com",
  role: "Administrator",
};
const storeData = [
  { title: "Total Users", value: "2,278", change: "+12%" },
  { title: "Total Revenue", value: "$24,322", change: "+20%" },
  { title: "New Orders", value: "1,439", change: "-2%" },
  { title: "Support Tickets", value: "59", change: "+4%" },
];
const DashBySir = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activepage, setActivepage] = useState("dashboard");
  const toggleSidebar = () => {
    setActivepage(!sidebarOpen);
  };
  return (
    <div
      className={`dashboard-container ${
        sidebarOpen ? "sidebar-open" : "sidebar-collapsed"
      }`}
    >
      <div className="sidebar  bg-gradient-to-b from-blue-900 to-blue-500">
        <div className="sidebar-header">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={activepage === "dashboard" ? "active" : ""}>
              <a href="#dashboard" onClick={() => setActivepage("dashboard")}>
                Dashboard
              </a>
            </li>
            <li className={activepage === "users" ? "active" : ""}>
              <a href="#users" onClick={() => setActivepage("users")}>
                Users
              </a>
            </li>
            <li className={activepage === "orders" ? "active" : ""}>
              <a href="#orders" onClick={() => setActivepage("orders")}>
                Orders
              </a>
            </li>
            <li className={activepage === "products" ? "active" : ""}>
              <a href="#products" onClick={() => setActivepage("products")}>
                Products
              </a>
            </li>
            <li className={activepage === "setting" ? "active" : ""}>
              <a href="#setting" onClick={() => setActivepage("setting")}>
                Setting
              </a>
            </li>
            <li className={activepage === "setting" ? "active" : ""}>
              <a href="/login " onClick={() => setActivepage("logout")}>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* main Content start  */}

      <div className="main-content">
        {/* Header start  */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1 className="text-2xl font-bold">
              Welcome back,{" "}
              <span className="text-blue-700">{userData.name}</span>
            </h1>
            <p>Here's what's happing with your store today</p>
          </div>
          <div className="header-right">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-md bg-white"
              />
            </div>
            <div className="user-menu">
              <div className="user-info">
                <span className="user-name">{userData.name}</span>
                <span className="user-role">{userData.email}</span>
              </div>
              <div className="user-avtar bg-gradient-to-b from-blue-900 to-blue-500">
                {userData.name.charAt(0)}
              </div>
            </div>
          </div>
        </header>
        {/* Header end  */}

        {/* Stats Card start  */}
        <div className="stats-grid flex justify-around">
          {storeData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-info">
                <h3 className="font-bold text-2xl">{stat.value}</h3>
                <p className="pt-2">{stat.title}</p>
              </div>
              <div
                className={`stat-change ${
                  stat.change.includes("+") ? "positive" : "negative"
                }`}
              >
                {stat.change}
              </div>
            </div>
          ))}
        </div>
        {/* Stats Card end  */}


        

        {/* main Content end  */}

        {/* Additional section start */}

        <div className="additional-section">
          <div className="quick-actions">
            <h3 className="text-2xl font-semibold">Quick Actions</h3>
            <div className="action-buttons">
              <button className="action-btn">Add Product</button>
              <button className="action-btn">Generate Report</button>
              <button className="action-btn">Send Message</button>
              <button className="action-btn">Manage Users</button>
            </div>
          </div>

          <div className="upcoming-events">
            <h3 className="text-2xl font-semibold">Upcoming Events</h3>
            <div className="event-item">
              <div className="event-date">
                <span className="event-day">15</span>
                <span className="event-month">Sep</span>
              </div>
              <div className="event-details">
                <p>Team Meeting</p>
                <span>10:00 AM-Conference Room</span>
              </div>
            </div>
            <div className="event-item">
              <div className="event-date">
                <span className="event-day">18</span>
                <span className="event-month">Sep</span>
              </div>
              <div className="event-details">
                <p>Product Launch</p>
                <span>2:00-Main Hall</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional section end */}
      </div>
    </div>
  );
};

export default DashBySir;
