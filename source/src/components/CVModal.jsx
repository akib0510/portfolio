import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Award, CheckCircle, Briefcase, GraduationCap, Phone } from 'lucide-react';

export default function CVModal({ isOpen, onClose, personal, experiences, skills }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="p-4 sm:px-6 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              Curriculum Vitae — {personal.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Official PDF */}
            <a
              href={personal.cvPdfUrl}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold transition-all shadow-md"
              title="Download Original PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-200 transition-colors"
              title="Print"
            >
              <Printer className="w-3.5 h-3.5 text-neutral-400" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-neutral-950/40 text-neutral-200 print:bg-white print:text-black">
          {/* Top Header */}
          <div className="border-b border-neutral-800 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {personal.name}
              </h1>
              <p className="text-sm font-semibold text-amber-400 mt-1">
                {personal.title}
              </p>
              <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                {personal.location}
              </p>
            </div>

            <div className="text-xs space-y-1 font-mono text-neutral-300">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href={personal.socials.email} className="hover:underline">{personal.email}</a>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={personal.whatsapp} target="_blank" rel="noreferrer" className="hover:underline">{personal.phone}</a>
              </div>
              <div>LinkedIn: <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="text-amber-400 underline">in/akib-hossian-dipu</a></div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono mb-2 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Executive Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {personal.about}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono mb-4 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              Professional Experience
            </h2>
            <div className="space-y-5">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-amber-500/40 pl-4 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                    <span className="text-[11px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">{exp.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-neutral-300">{exp.company}</div>
                  <p className="text-xs text-neutral-400 leading-relaxed pt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono mb-4 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </h2>
            <div className="space-y-4">
              {personal.education ? (
                personal.education.map((edu, idx) => (
                  <div key={idx} className="border-l-2 border-neutral-800 pl-4 space-y-0.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-xs font-bold text-white">{edu.degree}</h4>
                      <span className="text-[10px] font-mono text-neutral-400">{edu.period}</span>
                    </div>
                    <div className="text-xs text-amber-400/90 font-medium">{edu.institution}</div>
                    <p className="text-[11px] text-neutral-400">{edu.details}</p>
                  </div>
                ))
              ) : (
                <div className="border-l-2 border-neutral-800 pl-4 space-y-0.5">
                  <h4 className="text-xs font-bold text-white">Bachelor of Social Science (BSS) in Communication & Multimedia Journalism</h4>
                  <div className="text-xs text-amber-400/90 font-medium">Islamic University, Kushtia, Bangladesh (2022 - Present)</div>
                  <p className="text-[11px] text-neutral-400">Relevant: Visual Communication, Media Production, Digital Media Dynamics.</p>
                </div>
              )}
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              Core Competencies & Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((grp, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <h4 className="text-xs font-bold text-white mb-1.5">{grp.category}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {grp.items.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
