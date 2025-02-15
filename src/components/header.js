import React, { useState } from 'react';
import minhaImagem from '../assets/logo.png';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div style={{ display: 'flex' }}>
        <img src={minhaImagem} className='navbar-img' />
        <div className="navbar-logo" >
      
        </div>

      </div>
      <button className="navbar-toggle">
      
      </button>
      <ul className={`navbar-menu`}>
        <li>
          <a href="/" onClick={(e)=>navigate('/')} >Home</a>
        </li>
       
        <li>
          <a href="/service" onClick={(e)=>navigate('/service')} >Services</a>
        </li>
    
      </ul>
    </nav>
  );
};
const styles = {
  container: {
    
    height: "50",
  
    
    
  },
};


export default Navbar;
