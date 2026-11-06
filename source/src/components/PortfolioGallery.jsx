import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles, Layers } from 'lucide-react';

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
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Design Works
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-xl">
              A selection of commercial campaign posters, YouTube video thumbnail series, and brand marketing creatives.
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
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-neutral-900/60 rounded-2xl border border-neutral-800/80 overflow-hidden hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-neutral-950 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Inspect Overlay Pill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950/90 text-white border border-neutral-700 text-xs font-semibold backdrop-blur-md shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    Inspect Fullscreen
                  </span>
                </div>

                {/* Tag Pill top-left */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-neutral-950/80 border border-neutral-800 backdrop-blur-md text-amber-400">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content info bottom */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                    <span className="font-medium text-amber-400/90">{project.client}</span>
                    <span className="font-mono text-[11px]">{project.year}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 line-clamp-2 mt-1.5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tools used pill list */}
                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800/70 text-neutral-300 border border-neutral-700/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
