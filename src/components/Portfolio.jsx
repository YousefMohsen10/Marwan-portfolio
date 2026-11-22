import React, { useState } from 'react';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const t = portfolioData;
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = [
    { key: 'all', label: t.categories.all },
    { key: 'commercial', label: t.categories.commercial },
    { key: 'campaigns', label: t.categories.campaigns },
  ];

  const filteredProjects = activeFilter === 'all'
    ? t.projects
    : t.projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Selected Visual Works & Campaigns
          </h2>
          
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            A curated showcase of commercial key visuals, photo compositing, automotive art, and brand campaigns.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterOptions.map(option => (
              <button
                key={option.key}
                onClick={() => setActiveFilter(option.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === option.key
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-md shadow-zinc-900/10'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white dark:bg-[#121214] border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-xl dark:hover:shadow-zinc-700/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950/10 dark:bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white backdrop-blur-md shadow-sm border border-white/20 dark:border-zinc-700">
                    {project.categoryName}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-zinc-900/90 dark:bg-white/95 dark:text-zinc-950 backdrop-blur-md shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </span>
                </div>
              </div>

              {/* Project Details Footer */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                      {project.client}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 2).map((tItem, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                      >
                        {tItem}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
