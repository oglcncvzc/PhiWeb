import React from 'react';
import './CognitiveGap.css';

// Bu bileşen, ortalanmış bir düzen içinde bir simge, başlık ve metin içeren
// şık bir kart görüntüler. Tailwind CSS sınıfları stil için kullanılır.

// Ana CognitiveGap Bileşeni
const CognitiveGap = () => {
  const cards = [
    {
      image: '/images/frames/Background-1.png',
      title: 'Yavaş Öğrenme',
      description: 'Robotların yeni görevleri öğrenmesi haftalar veya aylar sürebilir ve genellikle yoğun insan müdahalesi gerektirir.'
    },
    {
      image: '/images/frames/Background-2.png',
      title: 'Sınırlı Akıl Yürütme',
      description: 'Daha önce karşılaşılmamış durumlarla başa çıkma ve soyut komutları anlama konusunda zorluk yaşarlar.'
    },
    {
      image: '/images/frames/Background-3.png',
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
        
        {/* Kartlar Grid Yapısı */}
        <div className="cards-grid">
          {cards.map((card, index) => (
            // Background resmi üzerine yazı overlay
            <div key={index} className="card-item">
              
              {/* Background Resmi */}
              <img
                src={card.image}
                alt={card.title}
                className="background-image"
              />
              
              {/* Yazı Overlay - resmin alt kısmında */}
              <div className="text-overlay">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CognitiveGap; 