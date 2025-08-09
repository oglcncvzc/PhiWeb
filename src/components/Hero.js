import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import './Hero.css';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroSectionRef = useRef(null);
  const stickyWrapperRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      setOffsetY(scrollY);
      
      // Hero section'ın yüksekliğini mobil/desktop'a göre ayarla
      if (heroSectionRef.current) {
        const vh = window.innerHeight;
        const heightMultiplier = window.innerWidth < 768 ? 2.0 : 2.9; // Mobilde daha kısa
        heroSectionRef.current.style.height = `${vh * heightMultiplier}px`;
      }
    };
    
    const handleResize = () => {
      checkMobile();
      if (heroSectionRef.current) {
        const vh = window.innerHeight;
        const heightMultiplier = window.innerWidth < 768 ? 2.0 : 2.9;
        heroSectionRef.current.style.height = `${vh * heightMultiplier}px`;
      }
    };
    
    // İlk yüklemede de çalıştır
    checkMobile();
    handleScroll();
    handleResize();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={heroSectionRef} className="hero-scroll-section">
      <div ref={stickyWrapperRef} className="hero-sticky-wrapper">
        <div className="hero">
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
        </div>

        <div
          className="robot-container"
          style={{ 
            transform: `translateY(${Math.min(-offsetY * (isMobile ? 0.4 : 0.25), 0)}px)`,
            transition: 'transform 0.1s ease-out'
          }}
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
    </section>
  );
};

export default Hero; 