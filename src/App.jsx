import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Orion Vega. All rights reserved.</p>
      </footer>
    </div>
  );
}
