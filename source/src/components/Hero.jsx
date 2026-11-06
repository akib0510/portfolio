import React from 'react';
import { ArrowDown, Download, Sparkles, Send, Mail, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function Hero({ personal, onOpenCV }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-rose-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-emerald-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects & creative collaborations
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Visual Designer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
              Crafting High-Converting
            </span>{' '}
            Brand Assets & Creatives.
          </h1>

          {/* Subtitle / Intro */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl font-normal">
            Hi, I’m <strong className="text-white font-semibold">{personal.name}</strong>, a Dhaka-based Graphic Designer specializing in commercial advertising campaigns, brand identity, viral YouTube thumbnails, and high-engagement social media creatives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-neutral-950 font-bold text-sm shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] transform transition-all duration-200"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-sm transition-all duration-200 hover:border-neutral-500"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Resume & Profile</span>
            </button>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-amber-400 transition-all duration-200"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.socials.email}
              className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-amber-400 transition-all duration-200"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-neutral-800/80">
            {personal.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300">
                  {stat.value}
                </span>
                <span className="text-xs text-neutral-400 font-medium tracking-wide mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
