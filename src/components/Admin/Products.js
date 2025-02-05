import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductModal from "./ProductModal";
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye, faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CSVLink } from 'react-csv';

const Product = () => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const productsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [errors,setErrors] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        console.log("Fetched products:", response);
        setProducts(response.data);
      } catch (error) {
        console.log("There was an error fetching the products:", error);
        setErrors(error);
      }
    };

    fetchProducts();
}, []);


const handleAddProduct = () => {
  setSelectedProduct({ id: null, name: "", category: "", price: "", weight: "", description: "", image: "" });
  setModalType("add");
};

const handleEdit = (product) => {
  setSelectedProduct(product);
  setModalType("edit");
};

const handleView = (product) => {
  setSelectedProduct(product);
  setModalType("view");
};

const handleCloseModal = () => {
  setSelectedProduct(null);
  setModalType(null);
};

const handleSort = (field) => {
  const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
  setSortField(field);
  setSortOrder(order);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (typeof a[field] === "number") {
      return order === 'asc' ? a[field] - b[field] : b[field] - a[field];
    }
    return order === 'asc' ? a[field].localeCompare(b[field]) : b[field].localeCompare(a[field]);
  });

  setFilteredProducts(sortedProducts);
};

const handleDelete = (id) => {
  axios.delete(`http://localhost:5000/api/products/${id}`)
    .then(() => {
      setProducts(products.filter(product => product.id !== id));
      setFilteredProducts(filteredProducts.filter(product => product.id !== id));
    })
    .catch(error => {
      console.error('Error deleting product:', error);
    });
};

const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

const nextPage = () => {
  if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
    setCurrentPage(currentPage + 1);
  }
};

const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

return (
  <div>
    <h2>Product Management</h2>
    <div className="actionsbuttons">
      <FontAwesomeIcon
        icon={faPlus}
        className="view-icon"
        onClick={handleAddProduct}
      />
      <CSVLink data={filteredProducts} filename={"products.csv"}>
        <FontAwesomeIcon icon={faDownload} className="view-icon" />
      </CSVLink>
    </div>

    <table border="1">
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Name {sortField === 'name' && (sortOrder === 'asc' ? "▲" : "▼")}</th>
          <th onClick={() => handleSort('category')}>Category {sortField === 'category' && (sortOrder === 'asc' ? "▲" : "▼")}</th>
          <th onClick={() => handleSort('price')}>Price {sortField === 'price' && (sortOrder === 'asc' ? "▲" : "▼")}</th>
          <th onClick={() => handleSort('weight')}>Weight {sortField === 'weight' && (sortOrder === 'asc' ? "▲" : "▼")}</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.weight}</td>
              <td>{product.description}</td>
              <td>
                <img src={product.image} alt={product.name} width="50" height="50" />
              </td>
              <td>
                <FontAwesomeIcon
                  icon={faEye}
                  className="view-icon"
                  onClick={() => handleView(product)}
                />
                <FontAwesomeIcon
                  icon={faPen}
                  className="view-icon"
                  onClick={() => handleEdit(product)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="view-icon"
                  onClick={() => handleDelete(product.id)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7">No products found</td>
          </tr>
        )}
      </tbody>
    </table>

    {/* Pagination */}
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
      <h6>Page {currentPage} of {Math.ceil(filteredProducts.length / productsPerPage)}</h6>
      <button onClick={nextPage} disabled={currentPage >= Math.ceil(filteredProducts.length / productsPerPage)}>Next</button>
    </div>

    {selectedProduct && (
      <ProductModal
        product={selectedProduct}
        type={modalType}
        onClose={handleCloseModal}
      />
    )}
  </div>
);
};

export default Product;
