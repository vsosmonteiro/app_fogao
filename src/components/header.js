import React, { useState, useEffect } from 'react';
import minhaImagem from '../assets/logo.png';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div style={{ display: 'flex' }}>
        <img src={minhaImagem} className='navbar-img' alt="Logo" />
        <div className="navbar-logo"></div>
      </div>
      
      {!isMobile && ( // Remove buttons on mobile
        <ul className="navbar-menu">
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          </li>
          <li>
            <a href="/service" onClick={(e) => { e.preventDefault(); navigate('/service'); }}>Services</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
