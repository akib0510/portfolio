import React from 'react';
import { Briefcase, Code, CheckCircle, Award, Sparkles, BookOpen } from 'lucide-react';

export default function ExperienceSkills({ personal, experiences, skills }) {
  return (
    <section id="experience" className="py-24 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
            <Briefcase className="w-4 h-4" />
            <span>Career & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Design Skills
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            A track record of high-performance visual design for digital agencies, consumer brands, and creator platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Experience Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Professional Experience</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l border-neutral-800 space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-amber-500 group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-200" />

                  <div className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-5 sm:p-6 hover:border-neutral-700 transition-all hover:bg-neutral-900/70">
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

          {/* Right: Skills Matrix (5 cols) */}
          <div id="skills" className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Skills & Expertise</span>
            </h3>

            <div className="space-y-4">
              {skills.map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-5 hover:border-neutral-700 transition-all"
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

            {/* Quick Education / Background Box */}
            <div id="about" className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800">
              <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>About My Design Philosophy</span>
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {personal.about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
