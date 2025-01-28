import React from "react";

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(#0F0617, #544646)",
    color: "#ffffff",
    padding: "30px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  };  

  const topSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "20px",
  };

  const columnStyle = {
    flex: "1",
    minWidth: "200px",
    margin: "10px",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "15px",
  };

  const textStyle = {
    fontSize: "14px",
    lineHeight: "1.8",
  };

  const linkListStyle = {
    listStyleType: "none",
    padding: "0",
    fontSize: "14px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#ffffff",
    display: "block",
    margin: "5px 0",
  };

  const inputStyle = {
    padding: "8px",
    border: "none",
    borderRadius: "5px",
    marginBottom: "10px",
    width: "80%",
  };

  const socialIconStyle = {
    fontSize: "20px",
    margin: "0 10px",
    color: "#ffffff",
    cursor: "pointer",
  };

  const copyrightStyle = {
    textAlign: "center",
    fontSize: "14px",
    marginTop: "20px",
    borderTop: "1px solid #ffffff",
    paddingTop: "10px",
  };

  return (
    <footer style={footerStyle}>
      {/* Top Section */}
      <div style={topSectionStyle}>
        {/* Left Section */}
        <div style={columnStyle}>
          <h3 style={{ color: " rgb(247, 239, 122)", fontWeight: "bold",fontfamily:"abel" }}>Dhanapal Jewellers</h3>
          <p style={textStyle}>
          NK Dhanapal Jewellers is a jewelry store located at 10-L, Duraisamy Naidu Street, Dharmapuri, Tamil Nadu 636701, India.
          </p>
          <p style={textStyle}>
            📍 TamilNadu<br />
            📞 +91 123456789
          </p>
        </div>

        {/* Links Section */}
        <div style={columnStyle}>
          <h4 style={titleStyle}>Important Links</h4>
          <ul style={linkListStyle}>
            <li>
              <a href="#" style={linkStyle}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" style={linkStyle}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" style={linkStyle}>
                Contact Us
              </a>
            </li>
            {/* <li>
              <a href="#" style={linkStyle}>
                Login
              </a>
            </li> */}
          </ul>
        </div>
        <div style={columnStyle}>
          <h4 style={titleStyle}>Links</h4>
          <ul style={linkListStyle}>
            <li>
              <a href="/PrivacyPolicy" style={linkStyle}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/TermsAndCondition" style={linkStyle}>
                Termsandcondition
              </a>
            </li>
            <li>
              <a href="/CancellationPolicy" style={linkStyle}>
                Cancellation Policy
              </a>
            </li>
            <li>
              <a href="/RefundPolicy" style={linkStyle}>
                Refund Policy
              </a>
            </li>
            <li>
              <a href="/about" style={linkStyle}>
                About us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div style={columnStyle}>
          {/* <h4 style={titleStyle}>Social Links</h4>
          <p style={textStyle}>Subscribe to our newsletter</p>
          <input type="email" placeholder="Email" style={inputStyle} /> */}
          <div>
            <i className="fab fa-instagram" style={socialIconStyle}></i>
            <i className="fab fa-facebook-f" style={socialIconStyle}></i>
            <i className="fab fa-linkedin-in" style={socialIconStyle}></i>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={copyrightStyle}>
        &copy; {new Date().getFullYear()} Brightech Software Solution
      </div>
    </footer>
  );
};

export default Footer;