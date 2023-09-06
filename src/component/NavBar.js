import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../component/NavBar.scss";
import logo from "../Images/logo.png";

function NavigationComponent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  
  return (
    <div className="center-container">
      
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div
            className={`mobile-menu-icon ${isMobileMenuOpen ? "opened" : ""}`}
          >
            {/* Your SVG for the mobile menu icon goes here */}
             <li className="nav-item-open-visible">
              <NavLink to="/logo" className="nav-link">
                <img className="mmlogo-1-icon" alt="" src={logo} />
              </NavLink>
            </li>
            <button
              type="button"
              class="burger__btn"
              onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
              aria-label="Main Menu"
            >
              <svg width="50" height="50" viewBox="0 0 100 100">
                <path
                  class="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path class="line line2" d="M 20,50 H 80" />
                <path
                  class="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>

           
          </div>
        </button>
        <div className="home-child">
        <ul className={`nav ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
          {/* Include your navigation links here as you did before */}

          <div className="left-section">
            <li className="nav-item ">
              <NavLink to="/mohanamantra" className="nav-link mohanamantra23">
                MOHANAMANTRA’23
              </NavLink>
            </li>
            <li className="line-div"></li>
            <li className="nav-item">
              <NavLink to="/logo" className="nav-link">
                <img className="mmlogo-1-icon" alt="" src={logo} />
              </NavLink>
            </li>
          </div>
          <div className="middle-section">
            <li className="nav-item item">
              <NavLink to="/home" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li className="nav-item item">
              <NavLink to="/gallery" className="nav-link">
                GALLERY
              </NavLink>
            </li>
            <li className="nav-item item">
              <NavLink to="/events" className="nav-link">
                EVENTS
              </NavLink>
            </li>

            <li className="nav-item item">
              <NavLink to="/warriors" className="nav-link">
                WARRIORS
              </NavLink>
            </li>
            <li className="nav-item item">
              <NavLink to="/sponsors" className="nav-link">
                SPONSORS
              </NavLink>
            </li>
          </div>
          <div className="end-section">
            <li className="line-div"></li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link">
                REGISTER!
              </NavLink>
            </li>
          </div>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        
        <ul className="nav-open"  onClick={closeMobileMenu}>
       
        <div className="top-section">
            <li className="nav-item-open ">
              <NavLink to="/mohanamantra" className="nav-link-open-main mohanamantra23-open">
                MOHANAMANTRA’23
              </NavLink>
            </li>
           
            
          </div>
          <div className="middle-section-open">
            <li className="nav-item-open item-open">
              <NavLink to="/home" className="nav-link-open">
                HOME
              </NavLink>
            </li>
            <li className="nav-item-open item-open">
              <NavLink to="/gallery" className="nav-link-open">
                GALLERY
              </NavLink>
            </li>
            <li className="nav-item-open item-open">
              <NavLink to="/events" className="nav-link-open">
                EVENTS
              </NavLink>
            </li>

            <li className="nav-item-open item-open">
              <NavLink to="/warriors" className="nav-link-open">
                WARRIORS
              </NavLink>
            </li>
            <li className="nav-item-open item-open">
              <NavLink to="/sponsors" className="nav-link-open">
                SPONSORS
              </NavLink>
            </li>
            <li className="nav-item-open item-open">
              <NavLink to="/register" className="nav-link-open">
                REGISTER!
              </NavLink>
            </li>
          </div>
            
          
        </ul>
      </div>
    </div>
  );
}

export default NavigationComponent;
