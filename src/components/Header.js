import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/Group 1000003026.png" alt="PhiAI Logo" className="logo-image" />
        </div>
        <nav className="nav">
          <a href="#problem" className="nav-link">Problem</a>
          <a href="#cozum" className="nav-link">Çözüm</a>
          <a href="#design" className="nav-link">High-Level Design</a>
          <a href="#technology" className="nav-link">Core Technology Stack</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 