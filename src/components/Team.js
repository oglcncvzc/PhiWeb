import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'İsim Soyisim',
      title: 'CEO',
      image: '/images/icon.png' // Placeholder image
    },
    {
      name: 'İsim Soyisim',
      title: 'CTO',
      image: '/images/icon.png'
    },
    {
      name: 'İsim Soyisim',
      title: 'Lead Engineer',
      image: '/images/icon.png'
    },
    {
      name: 'İsim Soyisim',
      title: 'AI Researcher',
      image: '/images/icon.png'
    }
  ];

  return (
    <section className="team">
      <div className="container">
        <h2 className="section-title">Ekibimiz</h2>
        <p className="section-description">
          Teknolojimizin arkasındaki güçlü ekibimizle tanışın.
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-title">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 