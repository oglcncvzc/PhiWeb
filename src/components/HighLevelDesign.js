import React from 'react';
import './HighLevelDesign.css';

const HighLevelDesign = () => {
  const steps = [
    {
      title: 'Sensory Input',
      subtitle: 'Processes Raw Data',
      description: 'Sensör verilerini toplar ve işler'
    },
    {
      title: 'Perception Engine',
      subtitle: 'Processes Raw Data',
      description: 'Ham verileri anlamlı bilgilere dönüştürür'
    },
    {
      title: 'World Modeling Engine',
      subtitle: 'Builds Context',
      description: 'Dünya modelini oluşturur ve bağlam sağlar'
    },
    {
      title: 'Cognitive Engine',
      subtitle: 'Reasons & Plans',
      description: 'Akıl yürütme ve planlama yapar'
    },
    {
      title: 'Action Generation Engine',
      subtitle: 'Executes Motor Commands',
      description: 'Motor komutlarını yürütür'
    }
  ];

  return (
    <section className="high-level-design" id="design">
      <div className="container">
        <h2 className="section-title">High-Level Design</h2>
        <p className="section-description">
          Neurocortex is architected into four primary modules that process data from sensory input to motor commands.
        </p>
        
        <div className="flowchart">
          {steps.map((step, index) => (
            <div key={index} className="flow-step">
              <div className="step-box">
                <div className="step-title">{step.title}</div>
                <div className="step-subtitle">{step.subtitle}</div>
              </div>
              {index < steps.length - 1 && (
                <div className="arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6L15 12L9 18" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighLevelDesign; 