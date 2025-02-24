import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#ffffff",
    display: "block",
    margin: "5px 0",
  };

  return (
    <footer style={{ background: "linear-gradient(#0F0617, #544646)", color: "#ffffff", padding: "30px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <div style={{ flex: "1", minWidth: "200px", margin: "10px" }}>
          <h3 style={{ color: "rgb(247, 239, 122)", fontWeight: "bold" }}>Dhanapal Jewellers</h3>
          <p>No.10-A, Duraisamy Naidu St, Dharmapuri, Tamil Nadu 636701, India.</p>
        </div>

        <div style={{ flex: "1", minWidth: "200px", margin: "10px" }}>
          <h4>Important Links</h4>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li><Link to="/" style={linkStyle}>Home</Link></li>
            <li><Link to="/about" style={linkStyle}>About</Link></li>
            <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
          </ul>
        </div>

        <div style={{ flex: "1", minWidth: "200px", margin: "10px" }}>
          <h4>Links</h4>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            <li><Link to="/PrivacyPolicy" style={linkStyle}>Privacy Policy</Link></li>
            <li><Link to="/TermsAndCondition" style={linkStyle}>Terms and Conditions</Link></li>
            <li><Link to="/CancellationPolicy" style={linkStyle}>Cancellation Policy</Link></li>
            <li><Link to="/RefundPolicy" style={linkStyle}>Refund Policy</Link></li>
            <li><Link to="/about" style={linkStyle}>About us</Link></li>
            <li><Link to="/login" style={linkStyle}>Admin Login</Link></li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: "center", fontSize: "14px", marginTop: "20px", borderTop: "1px solid #ffffff", paddingTop: "10px" }}>
        <a
          href="https://www.brightechsoftware.com/" target="_blank" rel="noreferrer noopener"
          style={{ textDecoration: "none", color: "inherit" }} >
          &copy; {new Date().getFullYear()} Brightech Software Solution
        </a>
      </div>

    </footer>
  );
};

export default Footer;
