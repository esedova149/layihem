import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";
const Navbar = ({ setCurrentPage }) => {
  return (
    <div>
    <ul>
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
          About Us
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
      <li>
        <NavLink path to="/contact">
       <button className="contactus">   Contact Us</button>
        </NavLink>
      </li>
     
    
    </ul>
  </div>
     
  );
};

export default Navbar;
