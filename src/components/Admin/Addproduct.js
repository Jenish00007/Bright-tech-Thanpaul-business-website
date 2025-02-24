import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./Products.css";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    weight: "",
    description: "",
    image: null,
  });
  const [successMessage, setSuccessMessage] = useState("");  
  const [errorMessage, setErrorMessage] = useState("");  
  const [uploadProgress, setUploadProgress] = useState(0); 
  const [imageName, setImageName] = useState(""); 
  const [isUploading, setIsUploading] = useState(false); 
  
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProduct((prev) => ({ ...prev, image: file }));
    setImageName(file.name); 
  };

  const handleSave = async () => {
    try {
      setIsUploading(true); 

      const formData = new FormData();
      Object.keys(newProduct).forEach((key) => {
        if (key === "image" && newProduct[key]) {
          formData.append(key, newProduct[key]); 
        } else {
          formData.append(key, newProduct[key]);
        }
      });

      await axios.post("https://thbackend-lqde.onrender.com/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentage);
        },
      });

      setSuccessMessage("Product added successfully!");
      setErrorMessage(""); 
      setIsUploading(false); 

      setNewProduct({ name: "", category: "", price: "", weight: "", description: "", image: null });
      setImageName(""); 
      setUploadProgress(0); 

      setTimeout(() => {
        window.location.reload(); 
      }, 1500); 

    } catch (error) {
      setErrorMessage("❌ Error saving product, please try again.");
      setSuccessMessage(""); 
      setIsUploading(false); 
    }
  };

  return (
    <div>
      <div className="add-product-section">
        <h3>Add Product</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={newProduct.weight}
          onChange={handleInputChange}
        />
        <input type="file" onChange={handleImageChange} />
        {imageName && <p className="image-name">{`Selected File: ${imageName}`}</p>}
        
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
          </div>
        )}

        {isUploading && !successMessage && !errorMessage && (
          <p className="uploading-message">Product uploading, please wait...</p>
        )}

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button onClick={handleSave}>Save Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
