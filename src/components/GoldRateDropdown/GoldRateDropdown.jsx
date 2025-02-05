import React, { useState, useEffect, useRef } from 'react';
import './GoldRateDropdown.css';
import axios from 'axios';
const GoldRateDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [goldRate, setGoldRate] = useState(null);
  const [silverRate, setSilverRate] = useState(null);
  const [rateUpdated, setRateUpdated] = useState(null);

  // Fetch rates with Axios
  const fetchRates = async () => {
      
      try {
          const response = await axios.get('https://jerwishtech.site/v1/api/account/todayrate');
          console.log('response:',response.data.Rate);
          if (response.data) {
              setGoldRate(response.data.Rate);
              setSilverRate(response.data.SILVERRATE);
              setRateUpdated(formatDate(new Date()));
             
          }
          
      } catch (error) {
          console.error('Error fetching rates:', error);
      }
  };
  fetchRates()
  const formatDate = (date) => {
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
      return formattedDate;
  };

  useEffect(() => {
      fetchRates();
  }, []);
  const rates = [
    { type: '24K GOLD', weight: '1G', price: '₹0.00' },
    { type: '22K GOLD', weight: '1G', price: '₹0.00' },
    // { type: '18K GOLD', weight: '1G', price: '₹0.00' },
    // { type: '14K GOLD', weight: '1G', price: '₹0.00' },
    { type: 'PLATINUM', weight: '1G', price: '₹0.00' },
    // { type: 'SILVER', weight: '1G', price: '₹101.00' },
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
          <span>22K GOLD 1G: ₹0.00</span>
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