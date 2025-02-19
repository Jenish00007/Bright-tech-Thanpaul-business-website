import React, { useState } from "react";

const ProductModal = ({ product, type, onClose, onSave, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    category: product?.category || "",
    price: product?.price || "",
    weight: product?.weight || "",
    description: product?.description || "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(product?.image || null); // Fixed preview image

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file)); // Show preview
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData, imageFile); // Debugging output

    try {
      if (type === "add") {
        await onSave(formData, imageFile);
      } else if (type === "edit") {
        await onUpdate({ ...formData, id: product.id }, imageFile);
      }
      onClose(); // Close modal only if successful
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>{type === "add" ? "Add Product" : "Edit Product"}</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Category:
            <input type="text" name="category" value={formData.category} onChange={handleChange} required />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </label>
          <label>
            Weight:
            <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
          </label>
          <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </label>
          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          {previewImage && <img src={previewImage} alt="Preview" width="100" height="100" />}
          <div className="modal-actions">
            <button type="submit">{type === "add" ? "Add" : "Update"}</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
