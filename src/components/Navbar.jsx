import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="resp">
        <div className="logo">
          Inter<span>Q</span>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <ul className={`nav ${isMenuOpen ? "hide-nav" : ""}`}>
        <li className="logo">
          <NavLink path to="/home" onClick={() => setIsMenuOpen(false)}>
            Inter<span>Q</span>
          </NavLink>
        </li>
        <li>
          <NavLink path to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink path to="/about" onClick={() => setIsMenuOpen(false)}>
            AboutUs
          </NavLink>
        </li>
        <li>
          <NavLink path to="/portfolio" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink path to="/service" onClick={() => setIsMenuOpen(false)}>
            Service
          </NavLink>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span>
            Pages{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_31_22)">
                <path
                  d="M11.06 5.72665L8 8.77999L4.94 5.72665L4 6.66665L8 10.6667L12 6.66665L11.06 5.72665Z"
                  fill="#51575D"
                />
              </g>
              <defs>
                <clipPath id="clip0_31_22">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          {showDropdown && (
            <ul
              className="dropdown-content" onClick={() => setIsMenuOpen(false)}
            >
              <li>
                <NavLink path to="/pricingPlan">
                  PricingPlan
                </NavLink>
              </li>
              <li>
                <NavLink path to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink path to="/contact" onClick={() => setIsMenuOpen(false)}>
            <button className="contactus"> Contact Us</button>
          </NavLink>
        </li>
      </ul>

      <ul className={`nav2 ${isMenuOpen ? "active" : ""}`}>
        <li>
          <NavLink path to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink path to="/about" onClick={() => setIsMenuOpen(false)}>
            AboutUs
          </NavLink>
        </li>
        <li>
          <NavLink path to="/portfolio" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink path to="/service" onClick={() => setIsMenuOpen(false)}>
            Service
          </NavLink>
        </li>
        <li>
          <NavLink path to="/pricingPlan">
            PricingPlan
          </NavLink>
        </li>
        <li>
          <NavLink path to="/blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink path to="/contact">
            ContactUs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
