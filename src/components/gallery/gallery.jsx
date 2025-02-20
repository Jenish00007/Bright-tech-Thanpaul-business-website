import React, { useEffect, useState } from "react";
import"./Gallery.css";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://thbackend.onrender.com/api/products") // Replace with actual API endpoint
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="shop-container">
     
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.image ? product.image : "/placeholder.png"}
                alt={product.name}
                className="product-image1"
              />
              
                <h3 className="product-name">{product.name}</h3>
                <div className="product-info">
                <p className="product-price">₹ {product.price}</p>
                <p className="product-weight">{product.weight} kg</p>
                {/* <button className="buy-now-btn">Buy Now</button> */}
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}
      </div>
    </section>
  );
}
