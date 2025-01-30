// src/components/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Home = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
    totalProducts: 0
  });

  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const statsResponse = await axios.get('/dashboard/stats');
        setStats(statsResponse.data);

        const ordersResponse = await axios.get('/orders?limit=5');
        setRecentOrders(ordersResponse.data);
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <h2>Welcome to the Admin Dashboard</h2>
      <p>Manage your store efficiently with real-time insights.</p>

      {/* Summary Cards */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Orders</h3>
          <p>{stats.totalOrders}</p>
        </div>
        <div className="card">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
        <div className="card">
          <h3>Total Revenue</h3>
          <p>{stats.totalRevenue}</p>
        </div>
        <div className="card">
          <h3>Total Products</h3>
          <p>{stats.totalProducts}</p>
        </div>
      </div>

      {/* Recent Orders Table */}
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.length > 0 ? (
            recentOrders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.status}</td>
                <td>${order.total}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No recent orders available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
