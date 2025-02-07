// import React, { useState, useEffect } from "react";
// import "./ProductModal.css";

// const ProductModal = ({ product, type, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     id: null,
//     name: "",
//     category: "",
//     price: "",
//     weight: "",
//     description: "",
//     image: "",
//   });

//   useEffect(() => {
//     if (product) {
//       setFormData(product);
//     }
//   }, [product]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     if (!formData.name || !formData.category || !formData.price) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     onSave(formData);
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <h2>{type === "edit" ? "Edit Product" : type === "add" ? "Add Product" : "Product Details"}</h2>

//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} disabled={type === "view"} />

//         <label>Category:</label>
//         <input type="text" name="category" value={formData.category} onChange={handleChange} disabled={type === "view"} />

//         <label>Price:</label>
//         <input type="number" name="price" value={formData.price} onChange={handleChange} disabled={type === "view"} />

//         <label>Weight:</label>
//         <input type="text" name="weight" value={formData.weight} onChange={handleChange} disabled={type === "view"} />

//         <label>Description:</label>
//         <textarea name="description" value={formData.description} onChange={handleChange} disabled={type === "view"}></textarea>

//         <label>Image URL:</label>
//         <input type="text" name="image" value={formData.image} onChange={handleChange} disabled={type === "view"} />

//         {formData.image && <img src={formData.image} alt="Product" width="100" height="100" />}

//         <div className="modal-actions">
//           <button onClick={onClose}>Close</button>
//           {type !== "view" && <button onClick={handleSave}>Save</button>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;
import React, { useState, useEffect } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, type, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    category: "",
    price: "",
    weight: "",
    description: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (product) {
      setFormData(product);
      if (product.image) {
        setImagePreview(`http://localhost:5000/uploads/${product.image}`);
      }
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file)); // Show image preview
    }
  };

  const handleSave = () => {
    if (!formData.name || !formData.category || !formData.price) {
      alert("Please fill in all required fields.");
      return;
    }
    onSave(formData, formData.image); // Send product and image file to parent
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{type === "edit" ? "Edit Product" : type === "add" ? "Add Product" : "Product Details"}</h2>

        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} disabled={type === "view"} />

        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} disabled={type === "view"} />

        <label>Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} disabled={type === "view"} />

        <label>Weight:</label>
        <input type="text" name="weight" value={formData.weight} onChange={handleChange} disabled={type === "view"} />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} disabled={type === "view"}></textarea>

        <label>Image:</label>
        {type !== "view" && (
          <input type="file" accept="image/*" onChange={handleImageChange} />
        )}

        {imagePreview && <img src={imagePreview} alt="Product" width="100" height="100" />}

        <div className="modal-actions">
          <button onClick={onClose}>Close</button>
          {type !== "view" && <button onClick={handleSave}>Save</button>}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
