import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Process } from './components/Process';
import { Work } from './components/Work';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Work />
        <Tools />
      </main>
      <Contact />
    </div>
  );
};

export default App;
