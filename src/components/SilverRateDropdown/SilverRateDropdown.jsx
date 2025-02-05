import React, { useState, useEffect, useRef } from 'react';
import './SilverRateDropdown.css';

const SilverRateDropdownComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const rates = [
    { type: 'SILVER', weight: '1G', price: '₹608.53' },
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
    <div className="silver-dropdown-container" ref={dropdownRef}>
      {/* <div className="silver-rate-label">Today's Rate:</div> */}
      <div className="silver-dropdown">
        <button className="silver-dropdown-toggle" onClick={toggleDropdown} style={{ background: 'linear-gradient(135deg, #C0C0C0, #A9A9A9)', transition: '0.3s' }}>
          <span>Silver 1G: ₹608.53</span>
        </button>
        <div className={`silver-dropdown-menu ${isOpen ? 'open' : ''}`}>
          {rates.map((rate, index) => (
            <div 
              key={index} 
              className="silver-dropdown-item"
              style={{ animationDelay: `${index * 50}ms`, background: 'linear-gradient(135deg, #C0C0C0, #A9A9A9)' }}
            >
              {rate.type} {rate.weight}: {rate.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SilverRateDropdownComponent;
