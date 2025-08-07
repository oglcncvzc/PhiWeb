import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="cta-content">
          <div className="cta-logo">
            <img src="/images/Group 1000003026.png" alt="PhiAI Logo" className="cta-logo-image" />
          </div>
          <h2 className="cta-title">AI ile Dönüşüme Hazır mısınız?</h2>
          <p className="cta-subtitle">PhiAI ile işinizi geleceğe taşıyın.</p>
          <button className="cta-button">Hemen İletişime geçin</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 