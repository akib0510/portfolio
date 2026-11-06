import React, { useState } from 'react';
import { Eye, Layers, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

const BATCH_SIZE = 6;

export default function PortfolioGallery({ projects, categories, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const remainingCount = Math.max(0, filteredProjects.length - visibleCount);
  const nextBatchCount = Math.min(BATCH_SIZE, remainingCount);
  const hasMore = remainingCount > 0;
  const isExpanded = visibleCount > BATCH_SIZE;

  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    setVisibleCount(BATCH_SIZE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredProjects.length));
  };

  const handleCollapse = () => {
    setVisibleCount(BATCH_SIZE);
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
                  onClick={() => handleCategorySelect(cat.id)}
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

        {/* Seamless Masonry Grid (Zero Gaps, Natural Image Proportions) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="break-inside-avoid mb-6 w-full inline-block group relative bg-neutral-900/80 rounded-2xl border border-neutral-800/80 overflow-hidden hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer"
            >
              {/* Image Container — w-full h-auto block to ensure 100% natural fit without letterboxing */}
              <div className="relative w-full overflow-hidden bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-500"
                />

                {/* Inspect Overlay on hover */}
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950/90 text-white border border-neutral-700 text-xs font-semibold backdrop-blur-md shadow-2xl transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    Inspect Fullscreen
                  </span>
                </div>

                {/* Category Tag Badge */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-neutral-950/85 border border-neutral-800 backdrop-blur-md text-amber-400 shadow-md">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Information Drawer Below Image */}
              <div className="p-4 bg-neutral-900/90 border-t border-neutral-800/80">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1">
                  <span className="font-semibold text-amber-400/90 truncate mr-2">
                    {project.client}
                  </span>
                  <span className="font-mono text-[11px] shrink-0">{project.year}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Step-by-Step Load More Actions */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {hasMore && (
              <button
                type="button"
                onClick={handleLoadMore}
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 hover:from-red-600 hover:via-orange-600 hover:to-amber-600 text-white font-extrabold text-sm shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transform transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-200 animate-pulse" />
                <span>Show More Works (+{nextBatchCount} Designs)</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            )}

            {isExpanded && (
              <button
                type="button"
                onClick={handleCollapse}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-neutral-700 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white text-xs font-bold transition-all cursor-pointer shadow-lg hover:border-amber-500/50"
              >
                <ChevronUp className="w-4 h-4 text-amber-400" />
                <span>Collapse (Reset to 6)</span>
              </button>
            )}
          </div>

          <p className="text-xs text-neutral-400 font-mono">
            {hasMore ? (
              <span>Showing {displayedProjects.length} of {filteredProjects.length} designs • Click above to load {nextBatchCount} more</span>
            ) : (
              <span>All {filteredProjects.length} designs loaded</span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
