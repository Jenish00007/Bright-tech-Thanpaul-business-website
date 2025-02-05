import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import './Orders.css';
import OrderModal from './OrderModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
const Orders = () => {
  const [orders, setOrders] = useState();
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalType, setModalType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrders, setSelectedOrders] = useState([]); // Multi-Select
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const ordersPerPage = 5;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // const response = await axios.get('/orders');
        setOrders([
          { id: 1, customerName: 'John Doe', date: '2021-09-01', paymentMethod: 'Credit Card', status: 'Pending', total: 100 },
          { id: 2, customerName: 'Jane Doe', date: '2021-09-02', paymentMethod: 'PayPal', status: 'Shipped', total: 150 },
          { id: 3, customerName: 'Alice', date: '2021-09-03', paymentMethod: 'Credit Card', status: 'Delivered', total: 200 },
          { id: 4, customerName: 'Bob', date: '2021-09-04', paymentMethod: 'Cash', status: 'Pending', total: 250 }
        ]);
        // setFilteredOrders(response.data);
        setFilteredOrders([
          { id: 1, customerName: 'John Doe', date: '2021-09-01', paymentMethod: 'Credit Card', status: 'Pending', total: 100 },
          { id: 2, customerName: 'Jane Doe', date: '2021-09-02', paymentMethod: 'PayPal', status: 'Shipped', total: 150 },
          { id: 3, customerName: 'Alice', date: '2021-09-03', paymentMethod: 'Credit Card', status: 'Delivered', total: 200 },
          { id: 4, customerName: 'Bob', date: '2021-09-04', paymentMethod: 'Cash', status: 'Pending', total: 250 }
        ]);

      } catch (err) {
        console.error("Error fetching orders", err);
      }
    };

    fetchOrders();
  }, []);

  // Handle search input

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = orders.filter(order =>
      order.id.toString().includes(query) ||
      order.customerName.toLowerCase().includes(query) ||
      order.status.toLowerCase().includes(query)
    );

    setFilteredOrders(filtered);
    setCurrentPage(1);
  };

  // Sorting function
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);

    const sortedOrders = [...filteredOrders].sort((a, b) => {
      if (field === 'total') {
        return order === 'asc' ? a.total - b.total : b.total - a.total;
      }
      if (field === 'date') {
        return order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
      }
      return order === 'asc' ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
    });

    setFilteredOrders(sortedOrders);
  };

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredOrders.length / ordersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Multi-Select Feature
  const handleSelectOrder = (id) => {
    setSelectedOrders(prevSelected =>
      prevSelected.includes(id) ? prevSelected.filter(orderId => orderId !== id) : [...prevSelected, id]
    );
  };

  // Handle delete of selected orders
  const handleDeleteSelected = async () => {
    if (selectedOrders.length === 0) {
      alert("No orders selected.");
      return;
    }

    if (window.confirm("Are you sure you want to delete the selected orders?")) {
      try {
        await Promise.all(selectedOrders.map(id => axios.delete(`/orders/${id}`)));
        setOrders(orders.filter(order => !selectedOrders.includes(order.id)));
        setFilteredOrders(filteredOrders.filter(order => !selectedOrders.includes(order.id)));
        setSelectedOrders([]);
      } catch (err) {
        console.error("Error deleting orders", err);
      }
    }
  };

  const handleEdit = (order) => {
    // Logic for editing an order
    setSelectedOrder(order);
    setModalType('edit');  // You can modify this to show a modal for editing the order
  };

  // Handle deleting an order
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        await axios.delete(`/orders/${id}`);
        setOrders(orders.filter(order => order.id !== id));
        setFilteredOrders(filteredOrders.filter(order => order.id !== id));
      } catch (err) {
        console.error("Error deleting the order", err);
      }
    }
  };

  return (
    <div>
      <h2>Orders Management</h2>

      {/* Search Input */}
      
      <div className="search-bar-container">
        <div>
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-bar"
          />
        </div>

        <div>
          <h6 className="view-icon" onClick={handleDeleteSelected}>

            Delete Selected ({selectedOrders.length})
          </h6>
        </div>
        <div >
        <CSVLink data={filteredOrders} filename={"orders.csv"} >
          <FontAwesomeIcon
            icon={faDownload}
            className="view-icon"

          />

        </CSVLink>
      </div>
      </div>
      <div>



      </div>
      {/* Export & Multi-Delete */}
      <div className="top-buttons">


      </div>

      {/* Orders Table */}
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" onChange={(e) => setSelectedOrders(e.target.checked ? filteredOrders.map(order => order.id) : [])} /></th>
            <th onClick={() => handleSort('id')}>Order ID</th>
            <th onClick={() => handleSort('customerName')}>Customer</th>
            <th onClick={() => handleSort('date')}>Date</th>
            <th onClick={() => handleSort('paymentMethod')}>Payment</th>
            <th onClick={() => handleSort('status')}>Status</th>
            <th onClick={() => handleSort('total')}>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.length > 0 ? (
            currentOrders.map(order => (
              <tr key={order.id}>
                <td><input type="checkbox" checked={selectedOrders.includes(order.id)} onChange={() => handleSelectOrder(order.id)} /></td>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.date}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.status}</td>
                <td>${order.total}</td>
                <td>

                  <FontAwesomeIcon
                    icon={faEye}
                    className="view-icon"
                    onClick={() => {
                      setSelectedOrder(order);
                      setModalType('view');
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faPen}
                    className="view-icon"
                    onClick={() => handleEdit(order)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="view-icon"
                    onClick={() => handleDelete(order.id)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
        <h6>Page {currentPage} of {Math.ceil(filteredOrders.length / ordersPerPage)}</h6>
        <button onClick={nextPage} disabled={currentPage >= Math.ceil(filteredOrders.length / ordersPerPage)}>Next</button>
      </div>

      {/* Modal for View */}
      {
        selectedOrder && (
          <OrderModal
            order={selectedOrder}
            type={modalType}
            onClose={() => setSelectedOrder(null)}
          />
        )
      }
    </div >
  );
};

export default Orders;
