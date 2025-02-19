// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ProductModal from "./ProductModal";
// import "./Products.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload, faEye, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { CSVLink } from "react-csv";
// import { fetchProducts } from "../service/hygraphService";
// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [modalType, setModalType] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 5;

//    useEffect(() => {
//       async function getProducts() {
//         const data = await fetchProducts();
//         setProducts(data);
//       }
//       getProducts();
//     }, []);

  

//   const handleAddProduct = () => {
//     setSelectedProduct({ name: "", category: "", price: "", weight: "", description: "", image: null });
//     setModalType("add");
//   };

//   const handleView = (product) => {
//     setSelectedProduct(product);
//     setModalType("view");
//   };

//   const handleCloseModal = () => {
//     setSelectedProduct(null);
//     setModalType(null);
//   };

//   const handleSave = async (product, imageFile) => {
//     try {
//       const formData = new FormData();
//       formData.append("name", product.name);
//       formData.append("category", product.category);
//       formData.append("price", product.price);
//       formData.append("weight", product.weight);
//       formData.append("description", product.description);
//       if (imageFile) {
//         formData.append("image", imageFile);
//       }

//       if (modalType === "add") {
//         const response = await axios.post("https://ap-south-1.cdn.hygraph.com/content/cm7abntbf015t07wa3wdi4oox/master", formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         setProducts([...products, response.data]);
//         setFilteredProducts([...filteredProducts, response.data]);
//       }
//     } catch (error) {
//       console.error("Error saving product:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://ap-south-1.cdn.hygraph.com/content/cm7abntbf015t07wa3wdi4oox/master/${id}`);
//       const updatedProducts = products.filter((product) => product.id !== id);
//       setProducts(updatedProducts);
//       setFilteredProducts(updatedProducts);
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   // Pagination
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const Products = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//   const nextPage = () => {
//     if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div>
//       <h2>Product Management</h2>
//       <div className="actionsbuttons">
//         <p>
//           <span className="view-icon-container" onClick={handleAddProduct}>
//             <FontAwesomeIcon icon={faPlus} className="view-icon" />
//             <span className="icon-text">Add</span>
//           </span>
//         </p>

//         <CSVLink data={filteredProducts} filename={"products.csv"}>
//           <FontAwesomeIcon icon={faDownload} className="view-icon" />
//         </CSVLink>
//       </div>

//       <table border="1">
//         <thead>
//           <tr>
//             <th>Name</th>
//             {/* <th>Category</th> */}
//             <th>Price</th>
//             <th>Weight</th>
//             {/* <th>Description</th> */}
//             <th>Image</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.length > 0 ? (
//             products.map((product) => (
//               <tr key={product.id}>
//                 <td>{product.name}</td>
//                 {/* <td>{product.category}</td> */}
//                 <td>${product.price}</td>
//                 <td>{product.weight}</td>
//                 {/* <td>{product.description}</td> */}
//                 <td>
//                   {product.image && (
//                     <img
//                       src={product.image ? product.image.url : "/placeholder.png"}
//                       alt={product.name}
//                       width="50"
//                       height="50"
//                     />
//                   )}
//                 </td>
//                 <td>
//                   <FontAwesomeIcon icon={faEye} className="view-icon" onClick={() => handleView(product)} />
//                   <FontAwesomeIcon icon={faTrash} className="view-icon" onClick={() => handleDelete(product.id)} />
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7">No products found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <div className="pagination">
//         <button onClick={prevPage} disabled={currentPage === 1}>
//           Prev
//         </button>
//         <h6>
//           Page {currentPage} of {Math.ceil(filteredProducts.length / productsPerPage)}
//         </h6>
//         <button onClick={nextPage} disabled={currentPage >= Math.ceil(filteredProducts.length / productsPerPage)}>
//           Next
//         </button>
//       </div>
//       {selectedProduct && <ProductModal product={selectedProduct} type={modalType} onClose={handleCloseModal} onSave={handleSave} />}
//     </div>
//   );
// };

// export default Product;

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductModal from "./ProductModal";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEye, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CSVLink } from "react-csv";
import { fetchProducts } from "../service/hygraphService";
const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

   useEffect(() => {
      async function getProducts() {
        const data = await fetchProducts();
        setProducts(data);
      }
      getProducts();
    }, []);

  

  const handleAddProduct = () => {
    setSelectedProduct({ name: "", category: "", price: "", weight: "", description: "", image: null });
    setModalType("add");
  };

  const handleView = (product) => {
    setSelectedProduct(product);
    setModalType("view");
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalType(null);
  };

  const handleSave = async (product, imageFile) => {
    try {
      // Upload image to Hygraph (if exists)
      let imageUrl = "";
      if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append("fileUpload", imageFile);
  
        const uploadResponse = await axios.post(
          "https://api-ap-south-1.hygraph.com/v2/cm7abntbf015t07wa3wdi4oox/master/upload",
          imageFormData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        imageUrl = uploadResponse.data.url;
      }
  
      // GraphQL mutation for adding product
      const mutation = {
        query: `
          mutation CreateProduct($name: String!, $category: String!, $price: Float!, $weight: Float!, $description: String!, $imageUrl: String) {
            createProduct(data: { 
              name: $name, 
              category: $category, 
              price: $price, 
              weight: $weight, 
              description: $description, 
              image: { create: { url: $imageUrl } }
            }) {
              id
              name
              price
              weight
              image {
                url
              }
            }
          }
        `,
        variables: {
          name: product.name,
          // category: product.category,
          price: parseFloat(product.price),
          weight: parseFloat(product.weight),
          // description: product.description,
          imageUrl: imageUrl || "",
        },
      };
  
      const response = await axios.post(
        "https://api-ap-south-1.hygraph.com/v2/cm7abntbf015t07wa3wdi4oox/master",
        mutation
      );
  
      const newProduct = response.data.data.createProduct;
      setProducts([...products, newProduct]);
      setFilteredProducts([...filteredProducts, newProduct]);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const mutation = {
        query: `
          mutation DeleteProduct($id: ID!) {
            deleteDanapal(where: { id: $id }) {
              id
            }
          }
        `,
        variables: { id },
      };
  
      const response = await axios.post(
        "https://ap-south-1.cdn.hygraph.com/content/cm7abntbf015t07wa3wdi4oox/master",
        mutation,
        { headers: { "Content-Type": "application/json" } }
      );
  
      if (response.data.errors) {
        console.error("❌ GraphQL Error:", response.data.errors);
        return;
      }
  
      setProducts(products.filter((product) => product.id !== id));
      setFilteredProducts(filteredProducts.filter((product) => product.id !== id));
  
      console.log("✅ Product deleted successfully:", response.data);
    } catch (error) {
      console.error("❌ Error deleting product:", error.response?.data?.errors || error.message);
    }
  };
  
  
  
  
  

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const Products = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
            {/* <th>Category</th> */}
            <th>Price</th>
            <th>Weight</th>
            {/* <th>Description</th> */}
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                {/* <td>{product.category}</td> */}
                <td>${product.price}</td>
                <td>{product.weight}</td>
                {/* <td>{product.description}</td> */}
                <td>
                  {product.image && (
                    <img
                      src={product.image ? product.image.url : "/placeholder.png"}
                      alt={product.name}
                      width="50"
                      height="50"
                    />
                  )}
                </td>
                <td>
                  <FontAwesomeIcon icon={faEye} className="view-icon" onClick={() => handleView(product)} />
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
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <h6>
          Page {currentPage} of {Math.ceil(filteredProducts.length / productsPerPage)}
        </h6>
        <button onClick={nextPage} disabled={currentPage >= Math.ceil(filteredProducts.length / productsPerPage)}>
          Next
        </button>
      </div>
      {selectedProduct && <ProductModal product={selectedProduct} type={modalType} onClose={handleCloseModal} onSave={handleSave} />}
    </div>
  );
};

export default Product;