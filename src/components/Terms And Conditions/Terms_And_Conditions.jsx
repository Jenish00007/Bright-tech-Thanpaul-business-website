import React, { useState } from 'react';
import './Terms_And_Conditions.css';

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      
      <div className="terms-section">
        <div 
          className="terms-header" 
          onClick={() => toggleSection('acceptance')}
        >
          1. Terms of Acceptance
        </div>
        {expandedSections.acceptance && (
          <div className="terms-content">
            <p>By accessing and using our jewelry website, you agree to be bound by these terms and conditions. These terms constitute a legally binding agreement between you and our company.</p>
          </div>
        )}
      </div>

      <div className="terms-section">
        <div 
          className="terms-header" 
          onClick={() => toggleSection('purchases')}
        >
          2. Product Purchases
        </div>
        {expandedSections.purchases && (
          <div className="terms-content">
            <p>All jewelry purchases are final. Prices are subject to change without notice. We reserve the right to limit quantities and refuse service to any customer.</p>
          </div>
        )}
      </div>

      <div className="terms-section">
        <div 
          className="terms-header" 
          onClick={() => toggleSection('shipping')}
        >
          3. Shipping and Delivery
        </div>
        {expandedSections.shipping && (
          <div className="terms-content">
            <p>Shipping times may vary. We are not responsible for delays caused by customs, international shipping, or unforeseen circumstances. Customers are responsible for providing accurate shipping information.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsAndConditions;