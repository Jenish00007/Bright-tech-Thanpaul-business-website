import React, { useState, useEffect, useRef } from 'react';
import './GoldRateDropdown.css';

const GoldRateDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const rates = [
    { type: '24K GOLD', weight: '1G', price: '₹0.00' },
    { type: '22K GOLD', weight: '1G', price: '₹0.00' },
    { type: '18K GOLD', weight: '1G', price: '₹0.00' },
    { type: '14K GOLD', weight: '1G', price: '₹0.00' },
    { type: 'PLATINUM', weight: '1G', price: '₹0.00' },
    { type: 'SILVER', weight: '1G', price: '₹101.00' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="rate-label">Today's Rate:</div>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <span>24K GOLD 1G: ₹0.00</span>
          {/* <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span> */}
        </button>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
          {rates.map((rate, index) => (
            <div 
              key={index} 
              className="dropdown-item"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {rate.type} {rate.weight}: {rate.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoldRateDropdown;