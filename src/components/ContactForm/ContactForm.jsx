import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2 className="form-title">Contact Dhanapal Jewellers</h2>
        
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required 
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required 
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required 
            className="form-textarea"
          ></textarea>
        </div>
        
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;