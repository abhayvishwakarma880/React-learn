import React, { useState } from "react";
import './Dashboard.css';
import './NewDashByJsSir.css';
import Users from "./Users"; // import your Users component
import Orders from "./Orders";

// mock data for the dashboard 
const userData = {
  name: "John Doe",
  email: "john123@gmail.com",
  role: "Administraion"
}
const storeData = [
  { title: 'Total Users', value: '2,842', change: '+12%'},
  { title: 'Total Revenue', value: '$24,751', change: '+18%' },
  { title: 'New Orders', value: '1,427', change: '-3%' },
  { title: 'Support Tickets', value: '56', change: '+4%' }
];
const recentActivities=[
  {user:'Sarah connor',action:'Placed a New Order',time:'2 min ago'},
  {user:'John Doe',action:'Updated Payment method',time:'15 min ago'},
  {user:'Dow Smitt',action:'Completed a purchase',time:'32 min ago'},
  {user:'Mike haisan',action:'Submitted a support ticket',time:'1 hours ago'}
];

const Dashbaord = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activepage, setActivePage] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const renderContent = () => {
    switch(activepage){
      case 'dashboard':
        return (
          <>
            {/* stats card */}
            <div className="stats-grid">
              {storeData.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-info">
                    <h3>{stat.value}</h3>
                    <p>{stat.title}</p>
                  </div>
                  <div className={`stat-change ${stat.change.includes('+') ? 'positive' : 'negative'}`}>
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>
            {/* charts and additional content */}
            <div className="content-grid">
              {/* chart section */}
              <div className="chart-container">
                <div className="chart-header">
                  <h3> Revenue Overview</h3>
                  <select defaultValue="last-week" >
                    <option value="last-week">Last Week</option>
                    <option value="last-month">Last Month</option>
                    <option value="last-year">Last Year</option>
                  </select>
                </div>
                <div className="chart-placeholder">
                  <div className="chart-bars">
                    <div className="bar" style={{height:'60%'}}></div>
                    <div className="bar" style={{height:'45%'}}></div>
                    <div className="bar" style={{height:'75%'}}></div>
                    <div className="bar" style={{height:'50%'}}></div>
                    <div className="bar" style={{height:'65%'}}></div>
                    <div className="bar" style={{height:'80%'}}></div>
                    <div className="bar" style={{height:'70%'}}></div>
                    <div className="bar" style={{height:'50%'}}></div>
                    <div className="bar" style={{height:'65%'}}></div>
                    <div className="bar" style={{height:'80%'}}></div>
                    <div className="bar" style={{height:'70%'}}></div>
                  </div>
                </div>
              </div>
              {/* Recent Activity */}
              <div className="activity-container">
                <div className="activity-header">
                  <h3>Recent Activity</h3>
                  <a href="#view-all">View All</a>
                </div>
                <div className="activity-list">
                  {recentActivities.map((activity,index)=>(
                    <div key={index} className="activity-item">
                      <div className="activity-avatar">
                        {activity.user.charAt(0)}
                      </div>
                      <div className="activity-details">
                        <p>
                          <span className="activity-user">{activity.user}</span>&nbsp;{activity.action}
                        </p>
                        <span className="activity-time">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Additional Section */}
            <div className="additional-section">
              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <button className="action-btn">Add Product</button>
                  <button className="action-btn">Generate Report</button>
                  <button className="action-btn">Send Message</button>
                  <button className="action-btn">Manage Users</button>
                </div>
              </div>
              <div className="upcoming-events">
                <h3>Upcoming Events</h3>
                <div className="event-item">
                  <div className="event-date">
                    <span className="event-day">15</span>
                    <span className="event-month">Sep</span>
                  </div>
                  <div className="event-details">
                    <p>Team Meeting</p>
                    <span>10:00 Am-Conference Room</span>
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
          </>
        );
      case 'users':
        return <Users />;
      case 'orders':
        return <Orders/>
      default:
        return <div><h1>Page Not Found</h1></div>;
    }
  }

  return (
    <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' :
      'sidebar-collapsed'}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={activepage === 'dashboard' ? 'active' : ''}>
              <a href="#dashboard" onClick={() => setActivePage('dashboard')}>
                Dashboard
              </a>
            </li>
            <li className={activepage === 'users' ? 'active' : ''}>
              <a href="#users" onClick={() => setActivePage('users')}>
                Users
              </a>
            </li> 
            <li className={activepage === 'orders' ? 'active' : ''}>
              <a href="#orders" onClick={() => setActivePage('orders')}>
                Orders
              </a>
            </li>
            <li className={activepage === 'products' ? 'active' : ''}>
              <a href="#products" onClick={() => setActivePage('products')}>
                Products
              </a>
            </li>
            <li className={activepage === 'setting' ? 'active' : ''}>
              <a href="#setting" onClick={() => setActivePage('setting')}>
                Setting
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Welcome back, {userData.name}</h1>
            <p>Here's what's happening with your store today</p>
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
              <div className="user-avtar">
                {userData.name.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        {/* Render page content based on active page */}
        {renderContent()}

      </div>
    </div>
  )
};

export default Dashbaord;