import React from 'react';
import { Briefcase, CheckCircle, Award, Sparkles, BookOpen, FileText, Download, Eye, GraduationCap, Zap, Clock, ShieldCheck, Check } from 'lucide-react';

export default function ExperienceSkills({ personal, experiences, skills, education, onOpenCV }) {
  return (
    <section id="experience" className="pt-16 pb-12 sm:pt-20 sm:pb-16 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
            <Briefcase className="w-4 h-4" />
            <span>Career, Skills & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Design Capabilities
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            A proven track record of high-performance visual design for consumer brands, creator agencies, and digital platforms.
          </p>
        </div>

        {/* Dedicated Curriculum Vitae (CV) Showcase Bar */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-amber-500/5 to-transparent pointer-events-none" />

          <div className="flex items-start sm:items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-orange-500/20 to-red-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-lg">
              <FileText className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Official Curriculum Vitae (CV)
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Updated March 2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl leading-relaxed">
                Review complete employment history at <strong className="text-white">Pacco Bangladesh</strong> & <strong className="text-white">PyCoach Bangladesh</strong>, design tool mastery, and formal credentials.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10 shrink-0">
            <a
              href="./Akib_Hossian_Dipu_Graphic_Designer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-neutral-950 font-bold text-xs sm:text-sm shadow-lg shadow-orange-500/20 hover:scale-[1.02] transform transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-neutral-950" />
              <span>View CV (PDF)</span>
            </a>

            <a
              href="./Akib_Hossian_Dipu_Graphic_Designer_CV.pdf"
              download="Akib_Hossian_Dipu_Graphic_Designer_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-neutral-700 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download PDF</span>
            </a>

            <button
              type="button"
              onClick={onOpenCV}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900 text-neutral-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              title="Open Interactive Resume Modal"
            >
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              <span>Online View</span>
            </button>
          </div>
        </div>

        {/* Row 1: Balanced 2-Column Grid (Experience & Education vs Skills & Toolset) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start mb-8">
          
          {/* Left Column: Experience + Education */}
          <div className="space-y-8">
            
            {/* 1. Professional Experience */}
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Professional Experience</span>
              </h3>

              <div className="relative pl-6 sm:pl-8 border-l border-neutral-800 space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-amber-500 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-200" />

                    <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-5 sm:p-6 hover:border-neutral-700 transition-all hover:bg-neutral-900/80">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {exp.period}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium">
                          {exp.company}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {exp.role}
                      </h4>

                      <p className="text-xs sm:text-sm text-neutral-300 mt-2.5 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Education & Academic Background */}
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span>Education & Academic Background</span>
              </h3>

              <div className="space-y-4">
                {education && education.length > 0 ? (
                  education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-5 hover:border-neutral-700 transition-all hover:bg-neutral-900/80"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-mono font-semibold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                          {edu.period}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium">{edu.institution}</span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-1">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="bg-neutral-900/50 border border-neutral-800/80 rounded-2xl p-5">
                    <span className="text-xs font-mono text-amber-400">2022 - Present</span>
                    <h4 className="text-base font-bold text-white mt-1">
                      Bachelor of Social Science (BSS) in Communication & Multimedia Journalism
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">Islamic University, Kushtia, Bangladesh</p>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Skills Matrix */}
          <div id="skills" className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Skills & Creative Toolset</span>
            </h3>

            {/* Skill Groups */}
            <div className="space-y-4">
              {skills.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-5 hover:border-neutral-700 transition-all hover:bg-neutral-900/80"
                >
                  <h4 className="text-sm font-bold text-white mb-3 flex items-center justify-between">
                    <span>{skillGroup.category}</span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {skillGroup.items.length} Skills
                    </span>
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-neutral-950/80 border border-neutral-700/60 text-neutral-200 hover:border-amber-500/50 hover:text-white transition-colors"
                      >
                        <CheckCircle className="w-3 h-3 text-amber-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Row 2: Side-by-Side Design Philosophy & Work Guarantees (100% Symmetrical, Zero Empty Space) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Card: Design Philosophy */}
          <div id="about" className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950 border border-neutral-800/90 flex flex-col justify-between">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>About My Design Philosophy</span>
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {personal.about}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Communication & Multimedia Journalism Graduate Background</span>
            </div>
          </div>

          {/* Right Card: Client Work Guarantees */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-neutral-950 border border-neutral-800 flex flex-col justify-between">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Client Guarantees & Workflow Values</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Fast Turnaround</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    Standard graphics delivered within 24-48 hours with rapid revision cycles.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs mb-1">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Conversion First</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    High-CTR thumbnail framing & commercial ads engineered for engagement.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Full Source Files</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    Print-ready 300 DPI exports, web-optimized JPEGs, and editable PSD/AI files.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Async Responsive</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 leading-snug">
                    Direct communication via Discord, WhatsApp, Slack, Teams & Trello.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Remote Projects & Global Contracts</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
