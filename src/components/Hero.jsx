import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const t = portfolioData.hero;

  const stats = [
    { count: t.yearsExp, label: t.yearsLabel },
    { count: t.projectsCount, label: t.projectsLabel },
    { count: t.clientsCount, label: t.clientsLabel },
    { count: t.satisfaction, label: t.satisfactionLabel },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Calm Ambient Background Glow in neutral monochrome */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-zinc-300/20 dark:bg-zinc-700/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-zinc-200/30 dark:bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs sm:text-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-800 dark:text-zinc-100 font-semibold">{t.availability}</span>
            </div>

            {/* Headline with metallic / silver-grey shine gradient */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.2] sm:leading-[1.15]">
              {t.greeting}
              <span className="block mt-2 bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-400 dark:from-white dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-zinc-900 hover:bg-black dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-md shadow-zinc-900/10 dark:shadow-white/5 transition-all active:scale-95 text-sm sm:text-base"
              >
                <span>{t.ctaWork}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-zinc-800 dark:text-zinc-200 bg-white dark:bg-zinc-900/90 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-all text-sm sm:text-base shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span>{t.ctaContact}</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              {stats.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                    {item.count}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Visual Showcase Card Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow ring in subtle zinc/monochrome */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-700 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-700 animate-pulse"></div>

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#121214] border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src="/projects/svt-car-rental.png"
                    alt="SVT Car Rental Key Visual by Marwan Hassan"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Floating Tags on the visual */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/70 text-zinc-200 backdrop-blur-md border border-white/10">
                      Featured Work
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/90 text-white backdrop-blur-md border border-zinc-700">
                      Photoshop Manipulation
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-base sm:text-lg">SVT Smart Vehicle Transport</h3>
                    <p className="text-xs text-zinc-300">Commercial Automotive Manipulation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
