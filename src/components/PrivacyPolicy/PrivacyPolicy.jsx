import React, { useState } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      
      <div className="privacy-section">
        <div 
          className="privacy-header" 
          onClick={() => toggleSection('information')}
        >
          1. Information Collection
        </div>
        {expandedSections.information && (
          <div className="privacy-content">
            <p>We collect personal information when you make a purchase, create an account, or interact with our website. This may include name, email, shipping address, and payment details.</p>
          </div>
        )}
      </div>

      <div className="privacy-section">
        <div 
          className="privacy-header" 
          onClick={() => toggleSection('usage')}
        >
          2. Information Usage
        </div>
        {expandedSections.usage && (
          <div className="privacy-content">
            <p>Your information is used to process orders, provide customer support, and improve our services. We do not sell or share your personal data with third parties without consent.</p>
          </div>
        )}
      </div>

      <div className="privacy-section">
        <div 
          className="privacy-header" 
          onClick={() => toggleSection('protection')}
        >
          3. Data Protection
        </div>
        {expandedSections.protection && (
          <div className="privacy-content">
            <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;