import React, { useState, useEffect } from 'react';
import './SilverRateDropdown.css';
import axios from 'axios';
const SilverRateDropdownComponent = () => {
  const [prices, setPrices] = useState({ gold: null, silver: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Replace with your API endpoint
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://jerwishtech.site/v1/api/account/todayrate');
        setPrices({
          gold: response.data.Rate, // Adjust based on your API response structure
          silver: response.data.SILVERRATE, // Adjust based on your API response structure
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch prices');
        setLoading(false);
      }
    };

    fetchPrices();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Fetch rates with Axios
  

  return (
    <div className="dropdown-container">
      <div className="rate-label">Today's Rate:</div>
      <div className="dropdown">
        <button className="silver-dropdown-toggle"style={{ background: 'linear-gradient(135deg, #C0C0C0, #A9A9A9)', transition: '0.3s' }} >
          <span>GOLD 1G:{prices.silver}</span>
          {/* <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span> */}
        </button>
        
        
      </div>
    </div>
  );
};

export default SilverRateDropdownComponent;

