import React from 'react';
import { Workflow } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Process() {
  const t = portfolioData.process;

  return (
    <section id="process" className="py-20 bg-slate-100/60 dark:bg-[#0f1422]/70 relative border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <Workflow className="w-3.5 h-3.5" />
            <span>{t.title}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Structured Roadmap from Concept to Export
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow space-y-4"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-black text-slate-200 dark:text-slate-800 tracking-tighter">
                  {step.step}
                </span>
                <span className="w-3 h-3 rounded-full bg-indigo-500/80" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
