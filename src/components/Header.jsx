import "./header.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactTyped } from 'react-typed';
import GoldRateDropdown from "./GoldRateDropdown/GoldRateDropdown";
import SilverRateDropdownComponent from "./SilverRateDropdown/SilverRateDropdown";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';  // Import CloseOutlined Icon

export default function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 758); // Adjust for mobile breakpoint
  const navigate = useNavigate();

  const handleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Close the menu on resize if the screen is larger than 758px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 758); // Set to true if mobile screen
      if (window.innerWidth > 758) {
        setIsMenuClicked(false); // Close the menu if resized to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Menu Item Click (Closes the Menu)
  const handleNavItemClick = () => {
    if (isMobile) {
      setIsMenuClicked(false); // Close the menu on item click in mobile view
    }
  };

  return (
    <>
      <div className="headerContainer">
        {/* Header Left Section (Always Visible) */}
        <div className="headerLeft">
          {/* Mobile Menu Icon */}
          {isMobile && (
            <div className="menuIcon" onClick={handleMenu}>
              {isMenuClicked ? (
                <CloseOutlined style={{ fontSize: '30px', color: 'white' }} /> // Close Icon
              ) : (
                <MenuOutlined style={{ fontSize: '30px', color: 'white' }} /> // Menu Icon
              )}
            </div>
          )}

          {/* Logo */}
          <div className="logoContatiner" onClick={() => navigate('/')}>
            <img src="./assets/logo.webp" alt="" style={{ width: '50px', height: 'auto', display: 'flex' }} />
            <h2 className="text-white scale-up">
              {" "}
              <ReactTyped strings={["Dhanapal Jewellers"]} typeSpeed={100} loop />
            </h2>
          </div>
        </div>

        {/* Navbar Content (Toggled on Mobile) */}
        <div className={`navbarContent ${isMobile && !isMenuClicked ? "hidden" : ""}`}>
          {/* Gold and Silver Rate Dropdowns */}
          <GoldRateDropdown />
          <SilverRateDropdownComponent />
          
          {/* Menu Items */}
          <NavLink to="home" onClick={handleNavItemClick}>
            <li className="NavItem">Home</li>
          </NavLink>
          <NavLink to="/about" onClick={handleNavItemClick}>
            <li className="NavItem">About</li>
          </NavLink>
          <NavLink to="contact" onClick={handleNavItemClick}>
            <li className="NavItem">Contact</li>
          </NavLink>
        </div>
      </div>
    </>
  );
}
