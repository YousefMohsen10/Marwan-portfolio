import React from 'react';
import { Workflow } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Process() {
  const t = portfolioData.process;

  return (
    <section id="process" className="py-20 bg-zinc-100/60 dark:bg-[#0c0c0e] relative border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
            <Workflow className="w-3.5 h-3.5" />
            <span>{t.title}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Structured Roadmap from Concept to Export
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121214] border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-black text-zinc-300 dark:text-zinc-800 tracking-tighter">
                  {step.step}
                </span>
                <span className="w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
