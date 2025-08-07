import React from 'react';
import './NeurocortexCards.css';

const NeurocortexCards = () => {
  const cards = [
    {
      icon: '/images/icon.png',
      title: 'Çok Modlu Anlayış',
      description: 'Dil, görüntü ve sensör verilerini birleştirerek bütünsel bir dünya modeli oluşturur.'
    },
    {
      icon: '/images/anındaogrenme.png',
      title: 'Anında Öğrenme',
      description: 'Yeni görevleri tek bir gösterimle veya sözlü komutla öğrenme yeteneği kazanır.'
    },
    {
      icon: '/images/nedenselakıl.png',
      title: 'Nedensel Akıl Yürütme',
      description: 'Eylemlerinin sonuçlarını tahmin eder ve karmaşık problemleri çözmek için planlama yapar.'
    }
  ];

  return (
    <section className="neurocortex-cards">
      <div className="container">
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="card-icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeurocortexCards;
