import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CognitiveGap from './components/CognitiveGap';
import Neurocortex from './components/Neurocortex';
import NeurocortexCards from './components/NeurocortexCards';
import HighLevelDesign from './components/HighLevelDesign';
import TechnologyStack from './components/TechnologyStack';
import Team from './components/Team';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CognitiveGap />
      <Neurocortex />
      <NeurocortexCards />
      <HighLevelDesign />
      <TechnologyStack />
      <Team />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
