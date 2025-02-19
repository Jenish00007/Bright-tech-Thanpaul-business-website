import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CSVLink } from "react-csv";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
 
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://thbackend.onrender.com/api/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("❌ Error fetching products:", error);
    }
  };

 
 

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://thbackend.onrender.com/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("❌ Error deleting product:", error);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const displayedProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      
      

      <div className="actionsbuttons">
        <CSVLink data={filteredProducts} filename={"products.csv"}>
          <FontAwesomeIcon icon={faDownload} className="view-icon" /> Export CSV
        </CSVLink>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.weight}</td>
                <td>
                  {product.image ? (
                    <img src={product.image} alt={product.name} width="50" height="50" />
                  ) : (
                    <img src="/placeholder.png" alt="placeholder" width="50" height="50" />
                  )}
                </td>
                <td>
                  <FontAwesomeIcon icon={faTrash} className="view-icon" onClick={() => handleDelete(product.id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No products found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>Prev</button>
        <h6>
          Page {currentPage} of {Math.ceil(filteredProducts.length / productsPerPage)}
        </h6>
        <button onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage >= Math.ceil(filteredProducts.length / productsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
