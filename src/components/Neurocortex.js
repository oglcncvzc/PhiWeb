import React from 'react';
import './Neurocortex.css';
import NeurocortexGraphic from './NeurocortexGraphic';

const Neurocortex = () => {
  return (
    <section className="neurocortex" id="cozum">
      <div className="container">
        <h2 className="section-title">Neurocortex - Bilişsel Çekirdek</h2>
        
        <NeurocortexGraphic />

        <div className="neurocortex-description">
          <p>
            Neurocortex, NVIDIA GrOOT için tasarlanmış devrim niteliğinde bir yazılım katmanıdır. Gelişmiş çok modlu öğrenme yeteneklerini ve geniş bir bilgi tabanını, GrOOT'un fiziksel becerileriyle entegre ederek robotlara benzeri görülmemiş bir bilişsel derinlik kazandırır.
          </p>
          <p>
            Robotlarımız sadece <strong>'ne yapacaklarını'</strong> değil, aynı zamanda <strong>'neden'</strong> yaptıklarını da anlarlar. Bu, daha güvenli, daha verimli ve daha uyumlu otonom sistemlerin kapısını aralar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Neurocortex; 