import React from 'react';
import { MessageSquareQuote, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Testimonials() {
  const t = portfolioData.testimonials;

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            {t.title}
          </h2>

          <p className="text-base text-zinc-600 dark:text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-[#121214] border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-zinc-400 dark:text-zinc-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-zinc-400 dark:fill-zinc-400 text-zinc-400 dark:text-zinc-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center font-bold text-zinc-700 dark:text-zinc-200 text-sm">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
