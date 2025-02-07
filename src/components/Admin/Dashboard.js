// src/components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
// import Home from './Home';
// import Orders from './Orders';
// import Users from './Users';
import Products from './Products';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <nav>
        {/* <a 
            href="#" 
            className={activeTab === 'home' ? 'active' : ''} 
            onClick={() => setActiveTab('home')}
          >Home</a> */}
          {/* <a 
            href="#" 
            className={activeTab === 'orders' ? 'active' : ''} 
            onClick={() => setActiveTab('orders')}
          >Orders</a>

          <a 
            href="#" 
            className={activeTab === 'users' ? 'active' : ''} 
            onClick={() => setActiveTab('users')}
          >Users</a> */}

          <a 
            href="#" 
            className={activeTab === 'products' ? 'active' : ''} 
            onClick={() => setActiveTab('products')}
          >Products</a>
          {/* <a 
            href="#" 
            className={activeTab === 'products' ? 'active' : ''} 
            onClick={{handleAddProduct}}
          >Add New Product</a> */}

        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Render Active Component */}
        {/* {activeTab === 'home' && <Home />} */}
        {/* {activeTab === 'orders' && <Orders />}
        {activeTab === 'users' && <Users />} */}
        {activeTab === 'products' && <Products />}
      </div>
    </div>
  );
};

export default Dashboard;
