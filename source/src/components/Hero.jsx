import React from 'react';
import { ArrowDown, Download, Sparkles, Send, Mail, ExternalLink, Play, TrendingUp, MessageCircle } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function Hero({ personal, onOpenCV }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[400px] bg-gradient-to-tr from-rose-500/15 via-amber-500/10 to-orange-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-emerald-400 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Global Remote Projects & Creator Growth Roles
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] mb-6">
              Creator Growth Specialist & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-400">
                Visual Designer
              </span>
            </h1>

            {/* Subtitle / Statement */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl font-normal">
              Hi, I’m <strong className="text-white font-semibold">{personal.name}</strong>. I specialize in high-converting commercial advertising posters, viral YouTube thumbnails, and scroll-stopping social media visual assets that drive engagement and client growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-sm shadow-xl shadow-red-500/20 hover:shadow-red-500/35 hover:scale-[1.02] transform transition-all duration-200"
              >
                <span>Explore 67+ Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 font-semibold text-sm transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-sm transition-all duration-200 hover:border-neutral-500"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Resume & CV</span>
              </button>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-blue-400 transition-all duration-200"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.email}
                className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-amber-400 transition-all duration-200"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Metrics Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-neutral-800/80">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300 font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium tracking-wide mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Branded Personal Showcase Artwork (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Background Glow Behind the Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 via-orange-500/20 to-amber-500/20 rounded-3xl blur-2xl transform scale-95 opacity-70 animate-pulse pointer-events-none" />

            {/* Main Showcase Frame */}
            <div className="relative z-10 w-full max-w-md bg-neutral-900/90 rounded-3xl border border-neutral-700/80 p-2.5 shadow-2xl overflow-hidden group hover:border-red-500/60 transition-all duration-500">
              <div className="relative rounded-2xl overflow-hidden bg-neutral-950 aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/9]">
                <img
                  src="portfolio/akib_creator_specialist.jpg"
                  alt="Akib Hossian Dipu — Creator Growth Specialist"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80 flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-red-500" />
                    <span className="text-[11px] font-bold text-white tracking-wide uppercase font-mono">
                      High-CTR Visuals
                    </span>
                  </div>

                  <div className="px-3 py-1.5 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-semibold text-neutral-300">
                      Remote Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* Minimalist Subcard Details */}
              <div className="p-3.5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Akib Hossian Dipu</span>
                  </h3>
                  <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    Video & Graphic Design Services
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold border border-neutral-700 transition-colors"
                >
                  <span>Hire Me</span>
                  <ExternalLink className="w-3 h-3 text-red-400" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
