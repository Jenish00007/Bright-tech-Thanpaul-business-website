import React, { useState } from "react";
import axios from "axios";
import "./Products.css";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", weight: "", description: "", image: null });
  const [successMessage, setSuccessMessage] = useState("");  // Track success message
  const [errorMessage, setErrorMessage] = useState("");  // Track error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setNewProduct((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      Object.keys(newProduct).forEach((key) => {
        formData.append(key, newProduct[key]);
      });

      await axios.post("https://thbackend-lqde.onrender.com/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Set success message
      setSuccessMessage("Product added successfully!");
      setErrorMessage(""); // Clear error message if product is successfully added

      // Reset form after successful save
      setNewProduct({ name: "", category: "", price: "", weight: "", description: "", image: null });
    } catch (error) {
      // Set error message if the request fails
      setErrorMessage("❌ Error saving product, please try again.");
      setSuccessMessage(""); // Clear success message in case of error
    }
  };

  return (
    <div>
      <div className="add-product-section">
        <h3>Add Product</h3>
        <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleInputChange} />
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
        <input type="text" name="weight" placeholder="Weight" value={newProduct.weight} onChange={handleInputChange} />
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleSave}>Save Product</button>

        {/* Success or error message */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default AddProduct;
