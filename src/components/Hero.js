import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './Hero.css';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <section className="hero">
        <h1>
          Kelimelerden eyleme<br />
          Yapay zekanın yeni formuyla tanışın
        </h1>
        <div className="subtitle">
          <strong>PhiAI sunar: Neurocortex</strong>
        </div>
        <div className="description">
          NVIDIA Gr00t'u çığır açan bilişsel yeteneklerle birleştirerek,
          robotların dünyayı algılama, anlama ve etkileşim kurma biçimini yeniden tanımlıyoruz.
        </div>
        <div className="buttons">
          <button className="btn-primary">Çözümlerimizi Keşfedin</button>
          <button className="btn-outline">Bize Ulaşın</button>
        </div>
      </section>

      <div
        className="robot-container"
        style={{ transform: `translateY(${-offsetY * 1.0}px)` }}
      >
        {!splineLoaded && (
          <div className="robot-placeholder">
            <div className="robot-icon">🤖</div>
            <p>Yükleniyor...</p>
          </div>
        )}
        <Spline
          scene="https://prod.spline.design/GgD1TFUq7BbAzssi/scene.splinecode"
          onLoad={() => setSplineLoaded(true)}
          style={{ display: splineLoaded ? 'block' : 'none' }}
        />
      </div>
    </div>
  );
};

export default Hero; 