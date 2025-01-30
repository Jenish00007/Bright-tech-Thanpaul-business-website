// src/components/Notifications.js
import React, { useState } from 'react';
import './Users.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New user registered", type: "success" },
    { id: 2, message: "Product stock is low", type: "warning" },
    { id: 3, message: "Order #1234 has been shipped", type: "info" },
  ]);

  return (
    <div className="main-content">
      <header>
        <h1>Notifications</h1>
      </header>

      <div className="notification-container">
        {notifications.map((notif) => (
          <div key={notif.id} className={`notification ${notif.type}`}>
            <p>{notif.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
