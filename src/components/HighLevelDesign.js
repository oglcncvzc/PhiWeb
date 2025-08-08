import React, { useRef, useEffect } from 'react';
import './HighLevelDesign.css';

const HighLevelDesign = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const layout = () => {
      if (!sectionRef.current || !wrapperRef.current || !headerRef.current || !trackRef.current) return;

      // Header yüksekliğini gap ile sticky wrapper'a uygula (başlık sabit kalır)
      const headerH = headerRef.current.offsetHeight || 0;
      const gap = 16; // başlık ile kartlar arası sıkı boşluk
      wrapperRef.current.style.setProperty('--header-offset', `${headerH + gap}px`);

      // Track genişliğine göre section yüksekliği (yatay akış için dikey mesafe)
      const trackW = trackRef.current.scrollWidth;
      const containerW = wrapperRef.current?.clientWidth || window.innerWidth;
      const needsHorizontalScroll = trackW > containerW;
      const vh = needsHorizontalScroll ? 120 : 80; // görünür alan konteyner genişliğine göre
      sectionRef.current.style.height = `${vh}vh`;
    };

    const computeAndTransform = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollAmount = -rect.top;
      const scrollableHeight = sectionRef.current.offsetHeight - window.innerHeight;

      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = wrapperRef.current?.clientWidth || window.innerWidth;
      const horizontalScrollDistance = Math.max(0, trackWidth - containerWidth);

      // Yatay kaydırma olacaksa ilerlet, yoksa sıfırla
      if (horizontalScrollDistance <= 0) {
        trackRef.current.style.transform = 'translateX(0px)';
        return;
      }

      if (scrollAmount <= 0) {
        trackRef.current.style.transform = 'translateX(0px)';
        return;
      }
      if (scrollAmount >= scrollableHeight) {
        trackRef.current.style.transform = `translateX(${-horizontalScrollDistance}px)`;
        return;
      }

      const scrollPercentage = scrollAmount / scrollableHeight;
      const translateX = -(scrollPercentage * horizontalScrollDistance);
      trackRef.current.style.transform = `translateX(${translateX}px)`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(() => {
        computeAndTransform();
        ticking = false;
      });
    };

    const onResize = () => {
      layout();
      computeAndTransform();
    };

    // İlk yerleşim
    onResize();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const steps = [
    { title: 'Perception Engine',        subtitle: 'Processes Raw Data' },
    { title: 'World Modeling Engine',    subtitle: 'Builds Context' },
    { title: 'Cognitive Engine',         subtitle: 'Reasons & Plans' },
    { title: 'Action Generation Engine', subtitle: 'Executes Actions' },
  ];

  return (
    <section ref={sectionRef} className="horizontal-scroll-section" id="design">
      <div ref={wrapperRef} className="sticky-wrapper">
        {/* Başlık: sticky boyunca ekranda sabit */}
        <div ref={headerRef} className="section-header-sticky">
          <h2 className="section-title">High-Level Design</h2>
          <p className="section-description">
            Neurocortex is architected into four primary modules that process data from sensory input to motor commands.
          </p>
        </div>

        {/* Yatay akış */}
        <div ref={trackRef} className="horizontal-track" aria-label="High level design flow">
          <div className="flow-element start-text"><h3>Sensory Input</h3></div>
          <div className="flow-element arrow" aria-hidden>→</div>

          {steps.map((s, i) => (
            <React.Fragment key={s.title}>
              <div className="flow-element step-card">
                <div className="card-title">{s.title}</div>
                <div className="card-subtitle">{s.subtitle}</div>
              </div>
              {i < steps.length - 1 && <div className="flow-element arrow" aria-hidden>→</div>}
            </React.Fragment>
          ))}

          <div className="flow-element arrow" aria-hidden>→</div>
          <div className="flow-element end-text"><h3>Motor Commands</h3></div>
        </div>
      </div>
    </section>
  );
};

export default HighLevelDesign;
