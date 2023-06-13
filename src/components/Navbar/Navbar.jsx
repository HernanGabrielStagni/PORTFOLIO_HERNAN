// import React from 'react';
import { Link } from 'react-router-dom';
import './CssNavbar.css'


const Navbar = () => {
  return (
    <nav className='navbar__container'>
      <ul className='navbar__Ul'>
       
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
       
      </ul>
    </nav>
  );
};

export default Navbar;