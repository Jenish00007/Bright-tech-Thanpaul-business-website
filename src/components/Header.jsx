// import { useEffect, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { ReactTyped } from 'react-typed';
// import GoldRateDropdown from "./GoldRateDropdown/GoldRateDropdown";
// import SilverRateDropdownComponent from "./SilverRateDropdown/SilverRateDropdown";

// export default function Header() {
//   const [isMenuClicked, setIsMenuClicked] = useState(false);

//   const navigate = useNavigate();

//   const handleMenu = () => {
//     setIsMenuClicked(!isMenuClicked);

//     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

//   };

//   const [isHovered, setIsHovered] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust for mobile breakpoint

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // Set to true if mobile screen
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//       <div className="headerContainer">

//         <div className="headerLeft">
//           <div
//             className={isMenuClicked ? "expandMenu" : "menuBar"}
//             onClick={handleMenu}
//           >
//             <span className="sideBarMenu">
//               <div className="bar1"></div>
//               <div className="bar2"></div>
//               <div className="bar3"></div>
//             </span>
//           </div>
//           <div className="logoContatiner" onClick={() => { navigate('/') }}>
//             <img src="./assets/logo.png" alt="" style={{ width: '50px', height: 'auto', display: 'flex' }} />
//             {/* <h2>Dhanapal Jewellers</h2> */}
//             <h2 className="text-white scale-up">{" "} <ReactTyped strings={["Dhanapal Jewellers"]} typeSpeed={100} loop /></h2>
//             {/* <p> Jewelry House</p> */}

//           </div>
//         </div>
//         <div className="GoldRateCointainer">
//         <GoldRateDropdown/>
//         <SilverRateDropdownComponent/>
//         </div>
//         <div className="navbarIcons">

//           <NavLink to="home">
//             <li className="NavItem">Home</li>
//           </NavLink>
//           <NavLink to="/about" >
//             <li className="NavItem">About</li>
//           </NavLink>
//           <NavLink to="contact">
//             <li className="NavItem">Contact</li>
//           </NavLink>
//         </div>
//       </div>

//     </>
//   );
// }
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./header.css";
// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./icon";

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//             <span>CodeBucks</span>
//             {/* <i className="fas fa-code"></i> */}
//             <span className="icon">
//               <CodeIcon />
//             </span>
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/about"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/blog"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/contact"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

//             {click ? (
//               <span className="icon">
//                 <HamburgetMenuOpen />{" "}
//               </span>
//             ) : (
//               <span className="icon">
//                 <HamburgetMenuClose />
//               </span>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;
import "./header.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactTyped } from 'react-typed';
import GoldRateDropdown from "./GoldRateDropdown/GoldRateDropdown";
import SilverRateDropdownComponent from "./SilverRateDropdown/SilverRateDropdown";

export default function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust for mobile breakpoint
  const navigate = useNavigate();

  const handleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if mobile screen
      if (window.innerWidth > 768) {
        setIsMenuClicked(false); // Close the menu if resized to desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="headerContainer">
        {/* Header Left Section (Always Visible) */}
        <div className="headerLeft">
          {/* Mobile Menu Icon */}
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

          {/* Logo */}
          <div className="logoContatiner" onClick={() => navigate('/')}>
            <img src="./assets/logo.png" alt="" style={{ width: '50px', height: 'auto', display: 'flex' }} />
            <h2 style={{ fontSize: window.innerWidth < 768 ? '15px' : '20px' }}>
              <ReactTyped strings={["Dhanapal Jewellers"]} typeSpeed={100} loop />
            </h2>
            {/* <h2 className="text-white scale-up">
              {" "}
              
            </h2> */}
          </div>
        </div>

        {/* Toggle Button for Mobile */}
        {isMobile && (
          <button className="toggleButton" onClick={handleMenu}>
            {isMenuClicked ? "Close" : "Menu"}
          </button>
        )}

        {/* Navbar Content (Toggled on Mobile) */}
        <div className={`navbarContent ${isMobile && !isMenuClicked ? "hidden" : ""}`}>
          {/* Gold and Silver Rate Dropdowns */}
          <div className="GoldRateCointainer">
            <GoldRateDropdown />
            <SilverRateDropdownComponent />
          </div>

          {/* Navbar Icons */}
          <div className="navbarIcons">
            <NavLink to="home">
              <li className="NavItem">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className="NavItem">About</li>
            </NavLink>
            <NavLink to="contact">
              <li className="NavItem">Contact</li>
            </NavLink>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
          <div className="GoldRateCointainer">
            <GoldRateDropdown />
            <SilverRateDropdownComponent />
          </div>
          </div>
        </div>
       */}

    </>
  );
}