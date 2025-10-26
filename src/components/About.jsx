import React from 'react';
import { Database, Server, Atom, Cpu, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-black to-black py-24">
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-transparent to-black" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-semibold md:text-4xl">About Me</h2>
            <p className="mt-4 text-white/70">
              I engineer end‑to‑end web applications with the MERN stack. My approach blends precise API design, scalable data models, and polished front‑end experiences. I enjoy translating complex ideas into intuitive interfaces and maintainable codebases.
            </p>
            <p className="mt-4 text-white/70">
              When Im not coding, Im sketching UI concepts, exploring astrophotography, or optimizing queries for fun.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <Skill icon={Database} title="MongoDB" desc="Schemas, Aggregations, Indexing" />
              <Skill icon={Server} title="Express" desc="REST, Auth, Rate limiting" />
              <Skill icon={Atom} title="React" desc="Hooks, State, Patterns" />
              <Skill icon={Cpu} title="Node.js" desc="Streams, Workers, Queues" />
              <Skill icon={Code} title="TypeScript" desc="Typesafe MERN apps" />
              <Skill icon={Code} title="Testing" desc="Jest, Vitest, Playwright" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-white/20">
      <div className="mb-3 flex items-center gap-2">
        <div className="rounded-md bg-white/10 p-2 text-indigo-300">
          <Icon size={18} />
        </div>
        <span className="text-sm font-medium">{title}</span>
      </div>
      <p className="text-xs text-white/60">{desc}</p>
    </div>
  );
}
