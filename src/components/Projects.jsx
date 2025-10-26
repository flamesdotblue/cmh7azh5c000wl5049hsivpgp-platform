import React from 'react';
import { Github, Rocket, Star } from 'lucide-react';

const projects = [
  {
    title: 'Nebula CRM',
    description: 'Customer management platform with real‑time activity streams, role‑based access, and analytics dashboard.',
    stack: ['MongoDB', 'Express', 'React', 'Node', 'WebSockets'],
    demo: 'https://nebula-crm-demo.vercel.app',
    code: 'https://github.com/orionvega/nebula-crm',
  },
  {
    title: 'Starlight Shop',
    description: 'Headless e‑commerce storefront with SSR, Stripe payments, and serverless functions.',
    stack: ['React', 'Node', 'Stripe', 'MongoDB'],
    demo: 'https://starlight-shop.vercel.app',
    code: 'https://github.com/orionvega/starlight-shop',
  },
  {
    title: 'Cosmo Notes',
    description: 'Collaborative note app featuring markdown, offline mode, and conflict‑free syncing.',
    stack: ['React', 'Express', 'MongoDB', 'Service Workers'],
    demo: 'https://cosmo-notes.vercel.app',
    code: 'https://github.com/orionvega/cosmo-notes',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(99,102,241,0.15),transparent)]" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Featured Projects</h2>
            <p className="mt-2 text-white/70">Selected builds crafted with the MERN stack and modern tooling.</p>
          </div>
          <a href="https://github.com/orionvega" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/30 md:flex">
            <Github size={16} /> Explore GitHub
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, stack, demo, code }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20">
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 blur-2xl" />
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Star size={18} className="text-yellow-300/70 opacity-0 transition group-hover:opacity-100" />
      </div>
      <p className="mt-2 text-sm text-white/70">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span key={s} className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70">{s}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <a href={demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-xs font-medium text-black hover:bg-white/90">
          <Rocket size={14} /> Live Demo
        </a>
        <a href={code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-xs text-white/90 hover:border-white/40">
          <Github size={14} /> Source
        </a>
      </div>
    </div>
  );
}
