import React, { useState } from "react";

import "./dash.css";

//mock data for dashboard

const userData = {
name: "jhon Doe",
email: "jhon1234@gmail.com",
role: "Administration",
};

const storeData = [
{ title: "Total Users", value: "2,842", change: "+12%" },
{ title: "Total Revenue", value: "$24,751", change: "+18%" },
{ title: "New Orders", value: "1,427", change: "-3%" },
{ title: "Support Tickets", value: "56", change: "+4%" },
];
const recentActivities = [
{ user: "Sarah connor", action: "placed a new older", time: "2 min ago" },
{ user: "john doe", action: "Uptade payment method", time: "15 min ago" },
{ user: "Dow Smitt", action: "Completed a purchase", time: "32 min ago" },
{
user: "Mike haisan",
action: "Submitted a support ticket",
time: "1 hour ago",
},
];

const Dashboard = () => {
const [sidebarOpen, setSidebarOpen] = useState(true);
const [activePage, setActivePage] = useState("dashboard");

const toggleSidebar = () => {
setSidebarOpen(!sidebarOpen);
};

return (
<div
className={`dashboard-container ${
        sidebarOpen ? "sidebar-open" : "sidebar-collapsed"
      }`} >
<div className="sidebar">
<div className="sidebar-header">
<h2>Dashboard</h2>
<button className="sidebar-toggle" onClick={toggleSidebar}>
☰
</button>
</div>

        <nav className="sidebar-nav">
          <ul>
            <li className={activePage === "dashboard" ? "active" : ""}>
              <a href="#dashboard" onClick={() => setActivePage("dashboard")}>
                Dashboard
              </a>
            </li>

            <li className={activePage === "users" ? "active" : ""}>
              <a href="#users" onClick={() => setActivePage("users")}>
                Users
              </a>
            </li>

            <li className={activePage === "orders" ? "active" : ""}>
              <a href="#orders" onClick={() => setActivePage("orders")}>
                Orders
              </a>
            </li>

            <li className={activePage === "products" ? "active" : ""}>
              <a href="#products" onClick={() => setActivePage("products")}>
                Products
              </a>
            </li>

            <li className={activePage === "setting" ? "active" : ""}>
              <a href="#setting" onClick={() => setActivePage("setting")}>
                Setting
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* main COntant*/}

      <div className="main-content">
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Welcome back, {userData.name}</h1>
            <p>Here's what's happing with your store today </p>
          </div>

          <div className="header-right">
            <div className="search-bar">
              <input type="text" placeholder="Search...." />
            </div>

            <div className="user-menu">
              <div className="user-info">
                <span className="user-name">{userData.name}</span>
                <span className="user-role">{userData.email}</span>
              </div>
              <div className="user-avtar">{userData.name.charAt(0)}</div>
            </div>
          </div>
        </header>

        {/* state card */}

        <div className="stats-grid">
          {storeData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-info">
                <h3>{stat.value}</h3>
                <p>{stat.title}</p>
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

        {/* chart and additionaln content */}
        <div className="content-grid">
          {/* chart section */}
          <div className="chart-container">
            <div className="chart-header">
              <h3>Revenue Overview</h3>
              <select defaultValue="last-week">
                <option value="last-week">Last week</option>
                <option value="last-month">Last month</option>
                <option value="last-year">Last year</option>
              </select>
            </div>
            <div className="chart-placeholder">
              <div className="chart-bars">
                <div className="bar" style={{ height: "60%" }}></div>
                <div className="bar" style={{ height: "45%" }}></div>
                <div className="bar" style={{ height: "75%" }}></div>
                <div className="bar" style={{ height: "50%" }}></div>
                <div className="bar" style={{ height: "65%" }}></div>
                <div className="bar" style={{ height: "80%" }}></div>
                <div className="bar" style={{ height: "70%" }}></div>
              </div>
            </div>
          </div>
          {/* Recent activity */}
          <div className="activity-container">
            <div className="activity-header">
              <h3>Recent Activity</h3>
              <a href="#view-all">View All</a>
            </div>

            <div className="activity-list">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-avatar">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="activity-details">
                    <p>
                      <span className="activity-user">
                        {activity.user} <br />
                        {activity.action}
                      </span>
                    </p>
                    <p>
                      <span className="activity-action">
                        {activity.item} <br />
                        {activity.action}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

);
};

export default Dashboard;



<div className="content-grid">
          {/* chart section */}
          <div className="chart-container">
            <div className="chart-header">
              <h3>Revenue Overview</h3>
              <select defaultValue="last-week">
                <option value="last-week">Last week</option>
                <option value="last-month">Last month</option>
                <option value="last-year">Last year</option>
              </select>
            </div>
            <div className="chart-placeholder">
              <div className="chart-bars">
                <div className="bar" style={{ height: "60%" }}></div>
                <div className="bar" style={{ height: "45%" }}></div>
                <div className="bar" style={{ height: "75%" }}></div>
                <div className="bar" style={{ height: "50%" }}></div>
                <div className="bar" style={{ height: "65%" }}></div>
                <div className="bar" style={{ height: "80%" }}></div>
                <div className="bar" style={{ height: "70%" }}></div>
              </div>
            </div>
          </div>
          {/* Recent activity */}
          <div className="activity-container">
            <div className="activity-header">
              <h3>Recent Activity</h3>
              <a href="#view-all">View All</a>
            </div>

            <div className="activity-list">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-avatar">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="activity-details">
                    <p>
                      <span className="activity-user">
                        {activity.user} <br />
                        {activity.action}
                      </span>
                    </p>
                    <p>
                      <span className="activity-action">
                        {activity.item} <br />
                        {activity.action}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>