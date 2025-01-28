import React from 'react';
import { Heart, Shield, Truck, Clock } from 'lucide-react';
import './Services.css';

const ServicesPage = () => {
  const services = [
    {
      icon: <Heart className="service-icon" />,
      title: "Custom Design",
      description: "Personalized jewelry crafted to your unique vision and style."
    },
    {
      icon: <Shield className="service-icon" />,
      title: "Jewelry Repair",
      description: "Expert restoration and maintenance for your precious pieces."
    },
    {
      icon: <Truck className="service-icon" />,
      title: "Free Shipping",
      description: "Complimentary worldwide shipping on orders over $500."
    },
    {
      icon: <Clock className="service-icon" />,
      title: "Lifetime Warranty",
      description: "Comprehensive warranty covering craftsmanship and materials."
    }
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;