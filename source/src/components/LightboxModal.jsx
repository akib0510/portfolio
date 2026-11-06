import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Calendar, User, Wrench, Info } from 'lucide-react';

export default function LightboxModal({ project, projects, onClose, onNavigate }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNavigate]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const total = projects.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top action bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-xs text-neutral-300 font-mono">
          {currentIndex + 1} / {total}
        </div>

        <button
          onClick={onClose}
          className="pointer-events-auto p-2.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 text-neutral-200 hover:text-white transition-colors cursor-pointer shadow-xl"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('prev');
        }}
        className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white transition-transform hover:scale-110 shadow-2xl cursor-pointer"
        title="Previous Project (Left Arrow)"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('next');
        }}
        className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 hover:text-white transition-transform hover:scale-110 shadow-2xl cursor-pointer"
        title="Next Project (Right Arrow)"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Modal Dialog Content Container */}
      <div
        className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Artwork Image Viewport */}
        <div className="flex-1 bg-black/60 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-auto max-h-[55vh] md:max-h-[85vh]">
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Project Case Details Drawer */}
        <div className="w-full md:w-80 lg:w-96 bg-neutral-900/90 border-t md:border-t-0 md:border-l border-neutral-800 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {project.tag}
              </span>
              <span className="text-xs text-neutral-400 font-mono">{project.year}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 leading-snug">
              {project.title}
            </h3>

            <div className="space-y-2 py-3 border-y border-neutral-800 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-neutral-400">Client:</span>
                <span className="font-semibold text-white">{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-neutral-400">Year:</span>
                <span className="text-white">{project.year}</span>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="text-xs font-semibold uppercase text-neutral-400 tracking-wider mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                Project Details
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-xs font-semibold uppercase text-neutral-400 tracking-wider mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-amber-400" />
                Software & Disciplines
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center gap-3">
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-neutral-700 bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold text-white transition-colors"
            >
              <span>View Full Resolution</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
