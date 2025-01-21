import React, { useState } from 'react';
import minhaImagem from '../assets/logo.png';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div style={{ display: 'flex' }}>
        <img src={minhaImagem} className='navbar-img' />
        <div className="navbar-logo" >
      
        </div>

      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
      
      </button>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
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
