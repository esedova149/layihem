import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <ul className='nav'>
        <li>
          Inter<span>Q</span>
        </li>
        <li>
          <NavLink path to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink path to="/about">
            AboutUs
          </NavLink>
        </li>
        <li>
          <NavLink path to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li className='btn-li'>-</li>
        <li>
          <NavLink path to="/service">
            Service
          </NavLink>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <span>
            Pages <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clipPath="url(#clip0_31_22)">
                <path d="M11.06 5.72665L8 8.77999L4.94 5.72665L4 6.66665L8 10.6667L12 6.66665L11.06 5.72665Z" fill="#51575D"/>
              </g>
              <defs>
                <clipPath id="clip0_31_22">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </span>
          {showDropdown && (
            <ul className="dropdown-content">
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
          <NavLink path to="/contact">
            <button className="contactus"> Contact Us</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;