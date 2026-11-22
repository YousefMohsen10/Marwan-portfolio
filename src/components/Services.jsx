import React from 'react';
import { Sparkles, Megaphone, Layers, Sliders, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Sparkles: Sparkles,
  Megaphone: Megaphone,
  Layers: Layers,
  Sliders: Sliders,
};

export default function Services() {
  const t = portfolioData.services;

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.title}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Expert Solutions for High-Impact Brands
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="group p-8 rounded-3xl bg-white dark:bg-[#121214] border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-xl dark:hover:shadow-zinc-700/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-zinc-950 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-zinc-800 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white">
                  <span>Inquire Service</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
