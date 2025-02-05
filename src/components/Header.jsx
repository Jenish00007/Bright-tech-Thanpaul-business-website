import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactTyped } from 'react-typed';
import GoldRateDropdown from "./GoldRateDropdown/GoldRateDropdown";
import SilverRateDropdownComponent from "./SilverRateDropdown/SilverRateDropdown";

export default function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const navigate = useNavigate();

  const handleMenu = () => {
    setIsMenuClicked(!isMenuClicked);

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  };

  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust for mobile breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if mobile screen
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="headerContainer">

        <div className="headerLeft">
          <div
            className={isMenuClicked ? "expandMenu" : "menuBar"}
            onClick={handleMenu}
          >
            <span className="sideBarMenu">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </span>
          </div>
          <div className="logoContatiner" onClick={() => { navigate('/') }}>
            <img src="./assets/logo.png" alt="" style={{ width: '50px', height: 'auto', display: 'flex' }} />
            {/* <h2>Dhanapal Jewellers</h2> */}
            <h2 className="text-white scale-up">{" "} <ReactTyped strings={["Dhanapal Jewellers"]} typeSpeed={100} loop /></h2>
            {/* <p> Jewelry House</p> */}

          </div>
        </div>
        <div className="GoldRateCointainer">
        <GoldRateDropdown/>
        <SilverRateDropdownComponent/>
        </div>
        <div className="navbarIcons">

          <NavLink to="home">
            <li className="NavItem">Home</li>
          </NavLink>
          <NavLink to="/about" >
            <li className="NavItem">About</li>
          </NavLink>
          <NavLink to="contact">
            <li className="NavItem">Contact</li>
          </NavLink>
        </div>
      </div>
  
    </>
  );
}