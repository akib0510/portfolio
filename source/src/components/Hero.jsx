import React from 'react';
import { ArrowDown, Sparkles, Mail, ExternalLink, TrendingUp, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function Hero({ personal, onOpenCV }) {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambient Glows with smooth breathing animation */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-tr from-red-600/15 via-orange-500/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (6 cols) */}
          <div className="lg:col-span-6">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-emerald-400 text-xs font-medium mb-6 shadow-sm hover:border-emerald-500/50 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Global Remote Projects & Full-Time Roles
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5">
              Creator Growth Specialist & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-amber-400">
                Visual Designer
              </span>
            </h1>

            {/* Subtitle / Bio Statement */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl font-normal">
              Hi, I’m <strong className="text-white font-semibold">{personal.name}</strong>. I create high-converting commercial advertising posters, viral YouTube thumbnails, and scroll-stopping social media creatives that drive engagement and business growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold text-sm shadow-xl shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5 transform transition-all duration-300"
              >
                <span>Explore 67+ Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href="./Akib_Hossian_Dipu_Graphic_Designer_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 hover:border-neutral-500 cursor-pointer shadow-md"
                title="View Official Curriculum Vitae"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Resume & CV</span>
              </a>

              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-blue-400 hover:-translate-y-0.5 transition-all duration-300"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.email}
                className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-amber-400 hover:-translate-y-0.5 transition-all duration-300"
                title="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Metrics Counter Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-neutral-800/80">
              {personal.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col group">
                  <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300 font-mono group-hover:from-amber-400 group-hover:to-orange-400 transition-all duration-300">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-400 font-medium tracking-wide mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Prominent Brand Artwork & Client Showcase (6 cols) */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Ambient Red Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/35 via-orange-500/20 to-amber-500/15 rounded-3xl blur-3xl transform scale-95 opacity-80 pointer-events-none" />

            {/* Showcase Card Frame */}
            <div 
              className="relative z-10 w-full max-w-xl bg-neutral-900/95 rounded-3xl border border-neutral-700/80 shadow-2xl overflow-hidden group hover:border-orange-500/70 hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-500 [isolation:isolate] [transform:translateZ(0)]"
              style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
            >
              
              {/* Image Container - Locked with rounded top */}
              <div 
                className="relative w-full aspect-[16/9] overflow-hidden bg-neutral-950 rounded-t-3xl [isolation:isolate] [transform:translateZ(0)]"
                style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
                <img
                  src="portfolio/akib_creator_specialist.jpg"
                  alt="Akib Hossian Dipu — Creator Growth Specialist"
                  className="w-full h-full object-cover object-center rounded-t-3xl transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-105"
                />

                {/* Subtle bottom gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none rounded-t-3xl" />

                {/* Floating Highlights over Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <div className="px-3 py-1.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center gap-2 shadow-xl">
                    <TrendingUp className="w-3.5 h-3.5 text-red-500" />
                    <span className="text-[11px] font-bold text-white tracking-wide uppercase font-mono">
                      High-CTR Visuals
                    </span>
                  </div>

                  <div className="px-3 py-1.5 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center gap-1.5 shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-semibold text-neutral-200">
                      Remote Ready
                    </span>
                  </div>
                </div>
              </div>

              {/* Client Track Record Directly Under the Image */}
              <div className="p-5 sm:p-6 bg-gradient-to-b from-neutral-900/90 to-neutral-950 border-t border-neutral-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block">
                      Proven Track Record
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white mt-0.5 tracking-tight">
                      Worked with <span className="text-orange-400">Pacco</span>, <span className="text-blue-400">PyCoach</span> & <span className="text-emerald-400">Al-Manarat</span>
                    </h3>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-xs font-bold transition-all shadow-md shrink-0 hover:scale-[1.03]"
                  >
                    <span>Hire Me</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 3 Client Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t border-neutral-800/80">
                  <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800/90 hover:border-orange-500/40 transition-colors flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1">
                        <p className="text-xs font-bold text-white truncate">Pacco</p>
                        <span className="px-1.5 py-0.2 rounded text-[9px] bg-emerald-500/20 text-emerald-400 font-mono font-semibold">Active</span>
                      </div>
                      <p className="text-[10px] text-neutral-400 truncate font-mono">Commercial Ads</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800/90 hover:border-blue-500/40 transition-colors flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">PyCoach BD</p>
                      <p className="text-[10px] text-neutral-400 truncate font-mono">Thumbnails & Series</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800/90 hover:border-emerald-500/40 transition-colors flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">Al-Manarat</p>
                      <p className="text-[10px] text-neutral-400 truncate font-mono">Arabic Academy Media</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
