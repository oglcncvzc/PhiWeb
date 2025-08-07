import React from 'react';
import './CognitiveGap.css';

const CognitiveGap = () => {
  const cards = [
    {
      icon: '/images/icon-2.png',
      title: 'Yavaş Öğrenme',
      description: 'Robotların yeni görevleri öğrenmesi haftalar veya aylar sürebilir ve genelde yoğun insan müdahalesi gerektirir.'
    },
    {
      icon: '/images/robohead2.png',
      title: 'Sınırlı Akıl Yürütme',
      description: 'Daha önce karşılaşılmamış durumlarla başa çıkma ve soyut komutları anlama konusunda zorluk yaşarlar.'
    },
    {
      icon: '/images/ikon3 1.png',
      title: 'Bağlam Eksikliği',
      description: 'Fiziksel eylemleri, sosyal ipuçlarını ve dünyanın nedensel yapısını derinlemesine anlama yetenekleri kısıtlıdır.'
    }
  ];

  return (
    <section className="cognitive-gap" id="problem">
      <div className="container">
        <h2 className="section-title">Bilişsel Boşluk</h2>
        <p className="section-description">
          Günümüzün insansı robotları mekanik olarak gelişmiş olsalar da, karmaşık, dinamik ve belirsiz ortamlarda insan benzeri bir akıl yürütme ve uyum sağlama yeteneğinden yoksundur. Bu "bilişsel boşluk", onların gerçek dünyadaki potansiyellerini sınırlamaktadır.
        </p>
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

export default CognitiveGap; 