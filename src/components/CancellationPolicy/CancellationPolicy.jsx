import React, { useState } from 'react';
import './CancellationPolicy.css';

const CancellationPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="cancellation-container">
      <h1>Cancellation Policy</h1>
      
      <div className="cancellation-section">
        <div 
          className="cancellation-header" 
          onClick={() => toggleSection('orders')}
        >
          1. Order Cancellation
        </div>
        {expandedSections.orders && (
          <div className="cancellation-content">
            <p>Orders can be cancelled within 24 hours of purchase. After this period, cancellation is subject to our refund and return policies.</p>
          </div>
        )}
      </div>

      <div className="cancellation-section">
        <div 
          className="cancellation-header" 
          onClick={() => toggleSection('exceptions')}
        >
          2. Cancellation Exceptions
        </div>
        {expandedSections.exceptions && (
          <div className="cancellation-content">
            <p>Custom, personalized, or made-to-order items cannot be cancelled once production has begun. Digital products are non-cancellable after purchase.</p>
          </div>
        )}
      </div>

      <div className="cancellation-section">
        <div 
          className="cancellation-header" 
          onClick={() => toggleSection('process')}
        >
          3. Cancellation Process
        </div>
        {expandedSections.process && (
          <div className="cancellation-content">
            <p>To cancel an order, contact our customer service immediately. Refunds will be processed to the original payment method within 5-7 business days.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CancellationPolicy;