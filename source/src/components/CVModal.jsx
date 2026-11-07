import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Award, CheckCircle, Briefcase, GraduationCap, Phone, Sparkles } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function CVModal({ isOpen, onClose, personal, experiences, skills }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md opacity-100 transition-opacity duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[92vh] bg-neutral-950 border border-neutral-800 rounded-3xl flex flex-col shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="p-4 sm:px-6 border-b border-neutral-800/80 flex items-center justify-between bg-neutral-900/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              Curriculum Vitae — {personal.name}
            </h3>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
              Updated March 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Official PDF */}
            <a
              href={personal.cvPdfUrl}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-neutral-950 text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-[1.03]"
              title="Download Official 1-Page PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-neutral-700 bg-neutral-800/80 hover:bg-neutral-700 text-xs font-medium text-neutral-200 transition-colors cursor-pointer"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-8 bg-neutral-950 text-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar (Dark Luxury Slate) */}
            <div className="md:col-span-4 bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-5 space-y-6">
              
              {/* Photo & Name */}
              <div className="text-center">
                <img
                  src="portfolio/akib_portrait.jpg"
                  alt={personal.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-amber-500 shadow-xl mb-3"
                />
                <h2 className="text-base font-extrabold text-white tracking-tight">
                  {personal.name}
                </h2>
                <p className="text-xs font-semibold text-amber-400 mt-0.5">
                  Creator Growth Specialist
                </p>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Dhaka, Bangladesh (UTC+6)
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-2.5 pt-3 border-t border-neutral-800/80">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                  Contact & Links
                </span>
                
                <div className="text-xs space-y-2">
                  <div>
                    <span className="text-[10px] text-neutral-500 font-mono block">EMAIL</span>
                    <a href={personal.socials.email} className="text-white hover:text-amber-400 font-medium break-all">
                      {personal.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] text-neutral-500 font-mono block">WHATSAPP / PHONE</span>
                    <a href={personal.whatsapp} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline font-mono">
                      {personal.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] text-neutral-500 font-mono block">LINKEDIN</span>
                    <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-white underline">
                      in/akib-hossian-dipu
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] text-neutral-500 font-mono block">LIVE PORTFOLIO</span>
                    <span className="text-amber-400 font-mono font-semibold">
                      akib0510.github.io/portfolio
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-neutral-500 font-mono block">AVAILABILITY</span>
                    <span className="text-emerald-400 font-semibold text-[11px]">
                      Full-Time & Remote Contracts
                    </span>
                  </div>
                </div>
              </div>

              {/* Software & Tools */}
              <div className="space-y-2 pt-3 border-t border-neutral-800/80">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                  Software Tools
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Adobe Photoshop', 'Canva Pro', 'Adobe Illustrator', 'Premiere Pro', 'CapCut Pro'].map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-950 border border-neutral-800 text-neutral-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Remote Collaboration */}
              <div className="space-y-2 pt-3 border-t border-neutral-800/80">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                  Collaboration
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Discord', 'WhatsApp', 'Teams', 'Slack', 'Notion', 'Trello', 'Google Workspace'].map((c, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-neutral-950 border border-neutral-800 text-neutral-300">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-1.5 pt-3 border-t border-neutral-800/80">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                  Languages
                </span>
                <p className="text-xs text-neutral-300">
                  <strong className="text-white">English:</strong> Professional Working
                </p>
                <p className="text-xs text-neutral-300">
                  <strong className="text-white">Bengali:</strong> Native / Bilingual Fluency
                </p>
              </div>

            </div>

            {/* Right Main Content */}
            <div className="md:col-span-8 space-y-7">
              
              {/* Header Title & Badges */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {personal.name}
                </h1>
                <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 mt-1">
                  Creator Growth Specialist & Visual Graphic Designer
                </p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    ★ Pacco Bangladesh Commercial Designer (Active)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    ★ Ex-Visual Lead (PyCoach BD)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ★ Ex-Academic Media (Al-Manarat)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-neutral-900 text-neutral-300 border border-neutral-800 font-mono">
                    67+ Works Delivered
                  </span>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Professional Summary</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Creative Graphic Designer and Creator Growth Specialist with a formal background in Communication & Multimedia Journalism from Islamic University. Experienced in crafting conversion-driven commercial advertising posters, high-CTR YouTube thumbnails, brand visual identity systems, and educational carousel infographics. Proven track record directing commercial print and digital campaigns at <strong className="text-white">Pacco Bangladesh</strong>, driving <strong className="text-white">+40% organic audience growth</strong> at <strong className="text-white">PsyCoach Bangladesh</strong>, and producing course media for <strong className="text-white">Al-Manarat Institute of Online Education</strong>. Skilled in translating marketing concepts into scroll-stopping visual assets using Adobe Photoshop, Canva Pro, and Illustrator.
                </p>
              </div>

              {/* Design Experience */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Work Experience</span>
                </h3>

                {/* 1. Pacco Bangladesh (Active) */}
                <div className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">Commercial Advertising & Brand Designer</h4>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Active Role
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      March 2026 – Present
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-orange-400">Pacco Bangladesh (Jashore / Hybrid)</p>
                  <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                    <li>Direct visual advertising campaigns, parcel pickup & delivery posters, regional launch banners (Chowgacha launch, 2-day countdowns), and food delivery promotions.</li>
                    <li>Engineer print-ready 300 DPI large-format banners, delivery vehicle branding, and high-impact Meta social media ads.</li>
                    <li>Establish cohesive visual identity guidelines and promotional templates that accelerated local customer acquisition.</li>
                  </ul>
                </div>

                {/* 2. PyCoach Bangladesh (Completed) */}
                <div className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-white">Former Lead Visual & Thumbnail Designer</h4>
                    <span className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700">
                      2023 – 2025
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-blue-400">PyCoach Bangladesh (Remote / Hybrid • Completed Contract)</p>
                  <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                    <li>Directed high-converting social media creatives, promotional posters, and multi-slide educational carousels (<strong className="text-white">+40% organic engagement increase</strong>).</li>
                    <li>Engineered custom YouTube thumbnail concepts with dramatic lighting, bold typography, and emotive subject framing.</li>
                    <li>Maintained 100% on-time delivery across all remote sprints using asynchronous communication.</li>
                  </ul>
                </div>

                {/* 3. Al-Manarat Institute of Online Education (Completed) */}
                <div className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-white">Creative & Academic Media Designer</h4>
                    <span className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700">
                      2024 – 2025
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-400">Al-Manarat Institute of Online Education (Remote • Completed Contract)</p>
                  <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                    <li>Designed Islamic University admission coaching campaigns, Arabic grammar (Nahw-Sarf) live class banners, and course launch collaterals for At-Tadrees Online Madrasah.</li>
                    <li>Created high-enrollment social media promotional posts and student acquisition creatives.</li>
                    <li>Maintained consistent Arabic and Bengali typographic hierarchy across online academic channels.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Education & Academic Background</span>
                </h3>

                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-xs font-bold text-white">
                        Bachelor of Social Science (BSS) in Communication & Multimedia Journalism
                      </h5>
                      <span className="text-[10px] font-mono text-neutral-400">2022 – Present</span>
                    </div>
                    <p className="text-xs text-amber-400/90 font-medium mt-0.5">Islamic University, Kushtia, Bangladesh</p>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Relevant: Visual Communication, Media Production, Digital Media Dynamics, Public Relations.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-xs font-bold text-white">
                        Higher Secondary Certificate (HSC) — Business Studies
                      </h5>
                      <span className="text-[10px] font-mono text-neutral-400">Completed</span>
                    </div>
                    <p className="text-xs text-amber-400/90 font-medium mt-0.5">Notre Dame College (NDC), Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
