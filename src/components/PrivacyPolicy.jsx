import { yellow } from "@mui/material/colors";
import React from "react";

const PrivacyPolicy = () => {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    
    lineHeight: "1.6",
    color: " rgb(252, 249, 252)",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const subheadingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    marginBottom: "15px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>
      <p style={paragraphStyle}>
        Welcome to our Privacy Policy page. Your privacy is critically important to us.
      </p>

      <h2 style={subheadingStyle}>Information We Collect</h2>
      <p style={paragraphStyle}>
        We collect various types of information to provide and improve our services.
        This includes personal details you provide, such as your name, email address,
        and any other details you input when using our platform.
      </p>

      <h2 style={subheadingStyle}>How We Use Your Information</h2>
      <p style={paragraphStyle}>
        Your information is used to enhance your experience, provide customer support,
        and improve our offerings. We may also use your data to send updates or
        promotional messages with your consent.
      </p>

      <h2 style={subheadingStyle}>Sharing Your Information</h2>
      <p style={paragraphStyle}>
        We respect your privacy and do not share your personal information with third
        parties, except as required by law or with your explicit consent.
      </p>

      <h2 style={subheadingStyle}>Your Rights</h2>
      <p style={paragraphStyle}>
        You have the right to access, correct, or delete your personal information at any
        time. Contact us if you have any concerns or requests regarding your data.
      </p>

      <h2 style={subheadingStyle}>Changes to This Policy</h2>
      <p style={paragraphStyle}>
        We may update our Privacy Policy from time to time. We encourage you to review
        this page periodically for any changes. Continued use of our services constitutes
        acceptance of our updated policies.
      </p>

      <p style={paragraphStyle}>If you have any questions about our Privacy Policy, feel free to contact us.</p>
    </div>
  );
};

export default PrivacyPolicy;
