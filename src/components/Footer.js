import React from 'react';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Hakkımızda',
      links: ['Özellikler', 'Entegrasyon', 'Fiyatlandırma']
    },
    {
      title: 'Çözümler',
      links: ['Özellikler', 'Entegrasyon', 'Fiyatlandırma']
    },
    {
      title: 'Destek',
      links: ['Özellikler', 'Entegrasyon', 'Fiyatlandırma']
    },
    {
      title: 'İletişim',
      links: ['Özellikler', 'Entegrasyon', 'Fiyatlandırma']
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/images/Group 1000003026.png" alt="PhiAI Logo" className="footer-logo-image" />
            </div>
            <p className="copyright">Copyright 2025 PhiAI</p>
          </div>
          
          <div className="footer-right">
            <div className="footer-links">
              {footerLinks.map((section, index) => (
                <div key={index} className="footer-section">
                  <h4 className="footer-section-title">{section.title}</h4>
                  <ul className="footer-section-links">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <button className="footer-link">{link}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 