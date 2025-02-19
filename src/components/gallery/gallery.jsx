import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import './Gallery.css'; // Import CSS for custom styling

import { fetchProducts } from "../service/hygraphService";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <MDBContainer>
      <MDBRow className="gallery-row">
        {products.length > 0 ? (
          products.map((product, index) => (
            <MDBCol key={index} lg={4} md={6} sm={12} className='mb-4 text-center'>
              <MDBCard className="product-">
                <MDBCardImage
                  src={product.image ? product.image.url : "/placeholder.png"}
                  position="top"
                  alt={product.name}
                  style={{ height: "250px", objectFit: "cover" }}  // Ensuring image size consistency
                />
                <MDBCardBody>
                  <MDBCardTitle>{product.name}</MDBCardTitle>
                  <MDBCardText>
                    <strong>Price:</strong> {product.price} <br />
                    <strong>Weight:</strong> {product.weight}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
        ) : (
          <p className="text-center">No products found</p>
        )}
      </MDBRow>
    </MDBContainer>
  );
}

export default ProductList;
