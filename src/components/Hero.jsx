import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t7ourXf4CdN9XTF3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6">
        <header className="flex items-center justify-between py-6">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500" />
            <span className="text-sm tracking-widest text-white/80">ORION VEGA</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
            <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com/orionvega" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 p-2 text-white/80 hover:text-white hover:border-white/30">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/orionvega" target="_blank" rel="noreferrer" className="rounded-md border border-white/10 p-2 text-white/80 hover:text-white hover:border-white/30">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="hidden rounded-md border border-white/10 px-3 py-2 text-sm text-white/80 hover:text-white hover:border-white/30 md:block">Lets talk</a>
          </div>
        </header>

        <div className="relative z-10 mt-auto mb-24 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Rocket size={14} className="text-indigo-300" />
            MERN Stack Developer · Space-themed Interfaces
          </div>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Building cosmic-grade web apps that launch ideas into orbit
          </h1>
          <p className="mt-4 max-w-2xl text-white/70">
            Im Orion Vega, a full‑stack web developer specializing in the MERN stack. I craft performant, accessible interfaces and resilient APIs with a love for clean code, sleek UX, and futuristic aesthetics.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-black transition hover:bg-white/90">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-white/90 hover:border-white/40">
              <Mail size={16} /> Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
