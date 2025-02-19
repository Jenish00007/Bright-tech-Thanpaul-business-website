import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CSVLink } from "react-csv";

const AddProduct = () => {

  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "", weight: "", description: "", image: null });
 


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

      await axios.post("https://thbackend.onrender.com/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
   
      setNewProduct({ name: "", category: "", price: "", weight: "", description: "", image: null });
    } catch (error) {
      console.error("❌ Error saving product:", error);
    }
  };



 
  return (
    <div>
      
      <div className="add-product-section">
        <h3>Add Product</h3>
        <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleInputChange} />
        {/* <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleInputChange} /> */}
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
        <input type="text" name="weight" placeholder="Weight" value={newProduct.weight} onChange={handleInputChange} />
        {/* <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} /> */}
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleSave}>Save Product</button>
      </div>


      
    </div>
  );
};

export default AddProduct;
