import React, { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@orionvega.dev?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Contact</h2>
        <p className="mt-2 text-white/70">Have a mission in mind? Lets launch it together.</p>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-white/80">Name</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-white/30" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-white/80">Email</label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-white/30" placeholder="you@example.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-white/80">Message</label>
              <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-white/30" placeholder="Tell me about your project..." />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <a href="mailto:hello@orionvega.dev" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-xs text-white/90 hover:border-white/40">
                  <Mail size={14} /> hello@orionvega.dev
                </a>
                <a href="https://www.linkedin.com/in/orionvega" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-xs text-white/90 hover:border-white/40">
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a href="https://github.com/orionvega" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-xs text-white/90 hover:border-white/40">
                  <Github size={14} /> GitHub
                </a>
              </div>
              <button type="submit" className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
