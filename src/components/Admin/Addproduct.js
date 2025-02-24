import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
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
  const [successMessage, setSuccessMessage] = useState("");  // Track success message
  const [errorMessage, setErrorMessage] = useState("");  // Track error message
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
  const [imageName, setImageName] = useState(""); // Track image file name
  const [isUploading, setIsUploading] = useState(false); // Track if uploading is in progress
  const navigate = useNavigate(); // Initialize the navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProduct((prev) => ({ ...prev, image: file }));
    setImageName(file.name); // Set image file name when file is selected
  };

  const handleSave = async () => {
    try {
      setIsUploading(true); // Set uploading to true when the upload starts

      const formData = new FormData();
      Object.keys(newProduct).forEach((key) => {
        if (key === "image" && newProduct[key]) {
          formData.append(key, newProduct[key]); // Append image file separately
        } else {
          formData.append(key, newProduct[key]);
        }
      });

      await axios.post("https://thbackend-lqde.onrender.com/api/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          // Calculate and set upload progress percentage
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentage);
        },
      });

      setSuccessMessage("Product added successfully!");
      setErrorMessage(""); // Clear error message if product is successfully added
      setIsUploading(false); // Stop the "Uploading..." message after success

      // Reset form after successful save
      setNewProduct({ name: "", category: "", price: "", weight: "", description: "", image: null });
      setImageName(""); // Clear image name after successful save
      setUploadProgress(0); // Reset upload progress
  // Refresh the page after success
  setTimeout(() => {
    window.location.reload(); // Refresh the current page
  }, 1500); // Delay for success message display
     
    } catch (error) {
      // Set error message if the request fails
      setErrorMessage("❌ Error saving product, please try again.");
      setSuccessMessage(""); // Clear success message in case of error
      setIsUploading(false); // Stop the "Uploading..." message on error
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
        {imageName && <p className="image-name">{`Selected File: ${imageName}`}</p>} {/* Display image name */}
        
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
          </div>
        )}

        {/* Show uploading message while uploading */}
        {isUploading && !successMessage && !errorMessage && (
          <p className="uploading-message">Product uploading, please wait...</p>
        )}

        {/* Success or error message */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button onClick={handleSave}>Save Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
