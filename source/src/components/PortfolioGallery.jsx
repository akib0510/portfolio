import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles, Layers, Image as ImageIcon } from 'lucide-react';

export default function PortfolioGallery({ projects, categories, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
              <Layers className="w-4 h-4" />
              <span>Full Portfolio Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Design Works
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              Commercial campaign posters, YouTube video thumbnail series, social media creatives, and short-form video reels.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count =
                cat.id === 'all'
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length;

              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20'
                      : 'bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                      isActive ? 'bg-neutral-950/20 text-neutral-950' : 'bg-neutral-800 text-neutral-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid - Responsive & Full View (No Cropping) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredProjects.map((project) => {
            const isPortrait = project.aspect === 'portrait' || project.category === 'commercial' || project.category === 'reels';

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group relative bg-neutral-900/60 rounded-2xl border border-neutral-800/80 overflow-hidden hover:border-neutral-600 hover:bg-neutral-900/90 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer flex flex-col"
              >
                {/* Artwork Viewport - Full View with Zero Cropping */}
                <div
                  className={`relative w-full overflow-hidden bg-neutral-950 flex items-center justify-center p-3 sm:p-4 ${
                    isPortrait ? 'aspect-[4/5] sm:aspect-[3/4]' : 'aspect-video'
                  }`}
                >
                  {/* Subtle color ambient glow from the image */}
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none"
                  />

                  {/* Main Uncropped Artwork */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
                  />

                  {/* Inspect Overlay on hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950/90 text-white border border-neutral-700 text-xs font-semibold backdrop-blur-md shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      View Full Size
                    </span>
                  </div>

                  {/* Tag Pill top-left */}
                  <div className="absolute top-3 left-3 z-20 pointer-events-none">
                    <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-neutral-950/80 border border-neutral-800 backdrop-blur-md text-amber-400 shadow-md">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Information Card Bottom */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between border-t border-neutral-800/80 bg-neutral-900/40">
                  <div>
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                      <span className="font-semibold text-amber-400/90 truncate mr-2">
                        {project.client}
                      </span>
                      <span className="font-mono text-[11px] shrink-0">{project.year}</span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Action prompt */}
                  <div className="mt-3 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                    <span>Click to inspect & zoom</span>
                    <Eye className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
