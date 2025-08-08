import React from 'react';
import './TechnologyStack.css';

const TechnologyStack = () => {
  return (
    <div className="technology-stack" id="technology">
      <div className="container">
        <h1 className="section-title">Core Technology Stack</h1>
        <p className="section-description">
          The Neurocortex platform is built upon and deeply integrated with NVIDIA's end-to-end robotics platform.
        </p>
        
        <div className="technology-grid">
          <div className="tech-card tech-card--large">
            <div className="card-image-container">
              <img src="/images/site görselleri efektli/7.png" alt="NVIDIA Jetson Thor" className="card-image" />
            </div>
            <div className="card-content">
              <h2 className="card-title">NVIDIA Jetson Thor</h2>
              <p className="card-description">
                Provides the high-performance, onboard compute necessary to run the entire Neurocortex stack in real-time.
              </p>
            </div>
          </div>

          <div className="tech-card tech-card--medium">
            <div className="card-image-container">
              <img src="/images/site görselleri efektli/8.PNG" alt="NVIDIA Isaac Sim / Omniverse" className="card-image" />
            </div>
            <div className="card-content">
              <h2 className="card-title">NVIDIA Isaac Sim / Omniverse</h2>
              <p className="card-description">
                Used extensively for training the Cognitive Engine's learning models in a physically accurate and scalable virtual environment.
              </p>
            </div>
          </div>

          <div className="tech-card tech-card--tall">
            <div className="card-image-container">
              <img src="/images/site görselleri efektli/11.PNG" alt="Project Gr00t Foundation Model" className="card-image" />
            </div>
            <div className="card-content">
              <h2 className="card-title">Project Gr00t Foundation Model</h2>
              <p className="card-description">
                Provides the baseline motor skills and physical interaction capabilities upon which the Action Generation Engine builds.
              </p>
            </div>
          </div>

          <div className="tech-card tech-card--small">
            <div className="card-image-container">
              <img src="/images/site görselleri efektli/9.PNG" alt="NVIDIA Isaac Perceptor" className="card-image" />
            </div>
            <div className="card-content">
              <h2 className="card-title">NVIDIA Isaac Perceptor</h2>
              <p className="card-description">
                Provides foundational libraries for 3D perception, sensor fusion, and SLAM, leveraged by the Perception Engine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack; 