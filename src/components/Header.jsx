import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";  // Assuming you're using a CSS file for styling
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile navbar
import { ReactTyped } from "react-typed";
import GoldRateDropdown from "./GoldRateDropdown/GoldRateDropdown";
import SilverRateDropdownComponent from "./SilverRateDropdown/SilverRateDropdown";
export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);  // Check if screen width is mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);  // Set isMobile based on screen size
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar-container">
      {/* Desktop Navbar */}
      {!isMobile && (
        <div className="desktop-navbar">
          <div className="logo">
            <img src="./assets/logo.png" alt="Logo" className="logo-img" />
            <h2 style={{ fontSize: window.innerWidth < 768 ? '15px' : '20px' }}>
              <ReactTyped strings={["Dhanapal Jewellers"]} typeSpeed={100} loop />
            </h2>
          </div>
         
          {/* Gold and Silver Rate Dropdowns */}
          <div className="GoldRateCointainer">
            <GoldRateDropdown />
            <SilverRateDropdownComponent />
          </div>
          <div className="desktop-nav-links">
            <NavLink to="home" className="nav-link">Home</NavLink>
            <NavLink to="about" className="nav-link">About</NavLink>
            <NavLink to="contact" className="nav-link">Contact</NavLink>
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <div className="mobile-navbar">
          <div className="logo">
            <img src="./assets/logo.png" alt="Logo" className="logo-img" />
            <h2 className="brand-title">Dhanapal Jewellers</h2>
          </div>

          {/* Hamburger Menu Icon */}
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>

          {/* Mobile Menu Links */}
          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <NavLink to="home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <NavLink to="contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
