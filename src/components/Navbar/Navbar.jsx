// import React from 'react';
import { Link } from 'react-router-dom';
import './CssNavbar.css'


const Navbar = () => {
  return (
    <nav className='navbar__container'>
      <ul className='navbar__Ul'>
       
        <li><Link className='link' to="/"><span>Home</span></Link></li>
        <li><Link className='link' to="/about">About</Link></li>
        <li><Link className='link' to="/service">Service</Link></li>
        <li><Link className='link' to="/portfolio">Portfolio</Link></li>
        <li><Link className='link' to="/contact">Contact</Link></li>
       
      </ul>
      <div className='navbar__icon'>
         icon
      </div>
    </nav>
  );
};

export default Navbar;