import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductModal from "./ProductModal";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye, faPlus, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CSVLink } from "react-csv";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = () => {
    setSelectedProduct({ name: "", category: "", price: "", weight: "", description: "", image: "" });
    setModalType("add");
  };

  // const handleEdit = (product) => {
  //   setSelectedProduct(product);
  //   setModalType("edit");
  // };

  const handleView = (product) => {
    setSelectedProduct(product);
    setModalType("view");
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalType(null);
  };

  const handleSave = async (product) => {
    try {
      if (modalType === "add") {
        const response = await axios.post("http://localhost:5000/api/products", product);
        setProducts([...products, response.data]);
        setFilteredProducts([...filteredProducts, response.data]);
      } else if (modalType === "edit") {
        await axios.put(`http://localhost:5000/api/products/${product.id}`, product);
        const updatedProducts = products.map((p) => (p.id === product.id ? product : p));
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Pagination
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
        <p>
          <span className="view-icon-container" onClick={handleAddProduct}>
            <FontAwesomeIcon icon={faPlus} className="view-icon" />
            <span className="icon-text">Add</span>
          </span>
        </p>

        <CSVLink data={filteredProducts} filename={"products.csv"}>
          <FontAwesomeIcon icon={faDownload} className="view-icon" />
        </CSVLink>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Weight</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
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
                  <FontAwesomeIcon icon={faEye} className="view-icon" onClick={() => handleView(product)} />
                  {/* <FontAwesomeIcon icon={faPen} className="view-icon" onClick={() => handleEdit(product)} /> */}
                  <FontAwesomeIcon icon={faTrash} className="view-icon" onClick={() => handleDelete(product.id)} />
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
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
        <h6>Page {currentPage} of {Math.ceil(filteredProducts.length / productsPerPage)}</h6>
        <button onClick={nextPage} disabled={currentPage >= Math.ceil(filteredProducts.length / productsPerPage)}>Next</button>
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} type={modalType} onClose={handleCloseModal} onSave={handleSave} />}
    </div>
  );
};

export default Product;
