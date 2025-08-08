import React from 'react';
import './NeurocortexCards.css';

const NeurocortexCards = () => {
  const cards = [
    {
      icon: '/images/site görselleri efektli/4.PNG',
      hoverIcon: '/images/site görselleri efektli/4.2.png',
      title: 'Çok Modlu Anlayış',
      description: 'Dil, görüntü ve sensör verilerini birleştirerek bütünsel bir dünya modeli oluşturur.'
    },
    {
      icon: '/images/site görselleri efektli/5.png',
      hoverIcon: '/images/site görselleri efektli/5.2.png',
      title: 'Anında Öğrenme',
      description: 'Yeni görevleri tek bir gösterimle veya sözlü komutla öğrenme yeteneği kazanır.'
    },
    {
      icon: '/images/site görselleri efektli/6.PNG',
      hoverIcon: '/images/site görselleri efektli/6.2.PNG',
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
                <img 
                  src={card.icon} 
                  alt={card.title}
                  className="card-icon-default"
                />
                <img 
                  src={card.hoverIcon} 
                  alt={card.title}
                  className="card-icon-hover"
                />
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
