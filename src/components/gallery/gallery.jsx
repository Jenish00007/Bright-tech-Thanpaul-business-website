import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import './Gallery.css'; // Import CSS for custom styling
export default function Gallery({ setHasImages }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products') 
      .then(response => response.json())
      .then(data => {
        setImages(data);
        setHasImages(data.length > 0); // Pass the status to the parent
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <MDBContainer>
      <MDBRow className="gallery-row">
        {images.length > 0 ? (
          images.map((image, index) => (
            <MDBCol key={index} lg={4} md={6} sm={12} className='mb-4 text-center'>
              <img
                src={image.image ? `http://localhost:5000/uploads/${image.image}` : "/placeholder.png"}
                alt={image.name}
                width="250"
                height="300"
                className='gallery-img'
              />
              <p>{image.name}</p>
            </MDBCol>
          ))
        ) : (
          <p className="text-center">No images found</p>
        )}
      </MDBRow>
    </MDBContainer>
  );
}
