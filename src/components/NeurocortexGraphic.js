import React from 'react';
import './Neurocortex.css';

const dots = new Array(7).fill(0);

const NeurocortexGraphic = () => (
  <div className="neurocortex-graphic">
    {/* Ana infinity container */}
    <div className="infinity-container">
      {/* Infinity arka plan shape */}
      <div className="infinity-bg">
        <img src="/images/Loop.png" alt="Infinity Loop" />
      </div>
      
      {/* Animasyonlu noktalar - ortada */}
      <div className="infinity-dots">
        {dots.map((_, i) => (
          <span key={i} className="infinity-dot" style={{ "--i": i }} />
        ))}
      </div>
    </div>
  </div>
);

export default NeurocortexGraphic; 