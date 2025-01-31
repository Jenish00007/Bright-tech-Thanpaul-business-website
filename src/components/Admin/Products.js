// src/components/Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
        {products.length > 0 ? (
          products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))
          ): (
          <tr>
            <td colSpan="4">No recent products available</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
