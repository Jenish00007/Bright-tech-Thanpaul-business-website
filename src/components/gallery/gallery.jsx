import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import './Gallery.css'; // Import CSS for custom styling

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products') // Replace with actual API endpoint
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <MDBContainer>
        
      <MDBRow className="gallery-row">
        {images.map((image, index) => (
          <MDBCol key={index} lg={4} md={6} sm={12} className='mb-4'>
            <img src={image.image} alt={image.name} width="250" height="300" className='gallery-img' />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
