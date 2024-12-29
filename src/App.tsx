import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Services />
      <Achievements />
      <Gallery />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;