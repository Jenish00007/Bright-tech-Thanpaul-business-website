import React, { useState } from 'react';
import './RefundPolicy.css';

const RefundPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="refund-container">
      <h1>Refund Policy</h1>
      
      <div className="refund-section">
        <div 
          className="refund-header" 
          onClick={() => toggleSection('eligibility')}
        >
          1. Refund Eligibility
        </div>
        {expandedSections.eligibility && (
          <div className="refund-content">
            <p>Refunds are available within 30 days of purchase for unworn, undamaged items in original packaging. Custom or personalized items are not eligible for refund.</p>
          </div>
        )}
      </div>

      <div className="refund-section">
        <div 
          className="refund-header" 
          onClick={() => toggleSection('process')}
        >
          2. Refund Process
        </div>
        {expandedSections.process && (
          <div className="refund-content">
            <p>To initiate a refund, contact our customer service with your order number. Refunds will be processed to the original method of payment within 5-7 business days.</p>
          </div>
        )}
      </div>

      <div className="refund-section">
        <div 
          className="refund-header" 
          onClick={() => toggleSection('conditions')}
        >
          3. Special Conditions
        </div>
        {expandedSections.conditions && (
          <div className="refund-content">
            <p>Sale items and clearance pieces are final sale and not eligible for refund. Shipping costs are non-refundable.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RefundPolicy;