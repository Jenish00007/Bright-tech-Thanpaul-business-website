import React, { useState, useEffect } from 'react';
import './OrderModal.css';

const OrderModal = ({ order, type, onClose }) => {
  const [formData, setFormData] = useState({
    id: order.id,
    customerName: order.customerName,
    paymentMethod: order.paymentMethod,
    status: order.status,
    total: order.total,
    date: order.date,
  });

  useEffect(() => {
    if (type === 'edit') {
      setFormData({
        id: order.id,
        customerName: order.customerName,
        paymentMethod: order.paymentMethod,
        status: order.status,
        total: order.total,
        date: order.date,
      });
    }
  }, [order, type]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'edit') {
      // Make an API call to update the order (you'll need to define the update API logic)
      console.log('Order updated', formData);
    } else if (type === 'view') {
      // Handle viewing logic if needed
      console.log('Viewing order', formData);
    }

    onClose(); // Close the modal
  };

  return (
    <div className="order-modal-overlay">
      <div className="order-modal">
        <h2>{type === 'edit' ? 'Edit Order' : 'View Order'}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="customerName">Customer Name:</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              disabled={type === 'view'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="paymentMethod">Payment Method:</label>
            <input
              type="text"
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              disabled={type === 'view'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled={type === 'view'}
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="total">Total:</label>
            <input
              type="number"
              id="total"
              name="total"
              value={formData.total}
              onChange={handleChange}
              disabled={type === 'view'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              disabled={type === 'view'}
            />
          </div>

          <div className="modal-actions">
          {type === 'edit' ? (
            <button type="submit" disabled={type === 'view'}>
              Save Changes
            </button>) : 'Close'}
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
