import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useData } from "../";
import Rate from "./rate";
import { FaRegMoneyBillAlt } from 'react-icons/fa';
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
            <span class="sideBarMenu">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </span>
          </div>
          <div className="logoContatiner" onClick={() => { navigate('/') }}>
            <img src="./assets/logo.png" alt="" style={{ width: '50px', height: 'auto', display: 'flex' }} />
            <h2>Dhanapal Jewellers</h2>
            {/* <p> Jewelry House</p> */}

          </div>
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
          {/* <Rate/> */}
          <li
            className="NavItem"
            onMouseEnter={() => setIsHovered(true)} // On hover start
            onMouseLeave={() => setIsHovered(false)} // On hover end
            style={{
              position: "relative",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FFD700", 
              padding: "5px 5px", 
              borderRadius: "5px" 
            }}
          >
            <i className="fa fa-calendar" style={{ marginRight: "8px" }}></i>
            Today's Rate
          </li>


          {isHovered && (
            <div
              className="rate-component-container"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered
                  ? isMobile
                    ? "translateX(0px)"
                    : "translateX(100px)"
                  : "translateX(1000px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                position: "absolute",
                top: "100%",
                left: "0",
                marginLeft: isMobile ? "0px" : "900px", // Adjust margin based on screen size
              }}
            >
              <Rate />
            </div>
          )}

        </div>
      </div>
      {isMenuClicked && (
        <div title="Menu bar" className="sideNav">
          <ul>
            <NavLink to="/">
              <li onClick={handleMenu}>HOME</li>
            </NavLink>
            <NavLink to="/about">
              <li onClick={handleMenu}>ABOUT</li>
            </NavLink>
            <NavLink to="contact">
              <li onClick={handleMenu}>CONTACT</li>
            </NavLink>

          </ul>
        </div>
      )}
    </>
  );
}

