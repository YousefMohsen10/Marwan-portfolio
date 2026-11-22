import React, { useEffect } from 'react';
import { X, Calendar, User, Wrench, CheckCircle, Sparkles, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#121214] rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden z-10 animate-fade-in my-auto max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div>
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              {project.categoryName}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-800 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Main Visual Image */}
          <div className="relative rounded-2xl overflow-hidden bg-black/5 dark:bg-black/30 border border-zinc-200 dark:border-zinc-800">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[500px] object-contain mx-auto"
            />
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <User className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <div>
                <span className="block text-[11px] text-zinc-500 dark:text-zinc-400">
                  Client / Brand
                </span>
                <span className="font-semibold">{project.client}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <Layers className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <div>
                <span className="block text-[11px] text-zinc-500 dark:text-zinc-400">
                  Creative Role
                </span>
                <span className="font-semibold">{project.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
              <Calendar className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <div>
                <span className="block text-[11px] text-zinc-500 dark:text-zinc-400">
                  Year
                </span>
                <span className="font-semibold">{project.year}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
              Project Story & Vision:
            </h4>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                <span>Key Design Highlights:</span>
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tools & Technologies */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              <span>Tools & Software</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {project.metrics}
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-zinc-900 hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-colors shadow-sm"
            >
              Request Similar Design
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
