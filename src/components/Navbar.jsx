import React from 'react';

const Navbar = ({ setCurrentPage }) => {
  return (
    <nav>
      <ul>
        <li><button onClick={() => setCurrentPage('home')}>Home</button></li>
        <li><button onClick={() => setCurrentPage('about')}>About</button></li>
        <li><button onClick={() => setCurrentPage('portfolio')}>Portfolio</button></li>
        <li><button onClick={() => setCurrentPage('service')}>Service</button></li>
        <li><button onClick={() => setCurrentPage('pricingPlan')}>Pricing Plan</button></li>
        <li><button onClick={() => setCurrentPage('blog')}>Blog</button></li>
        <li><button onClick={() => setCurrentPage('contactUs')}>Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
