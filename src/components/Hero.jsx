import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Palette, ShieldCheck } from 'lucide-react';
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
      {/* Calm Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-400/10 dark:bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.availability}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2] sm:leading-[1.15]">
              {t.greeting}
              <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/25 transition-all active:scale-95 text-sm sm:text-base"
              >
                <span>{t.ctaWork}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-all text-sm sm:text-base shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>{t.ctaContact}</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
              {stats.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {item.count}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Visual Showcase Card Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src="/projects/svt-car-rental.png"
                    alt="SVT Car Rental Key Visual by Marwan Hassan"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Floating Tags on the visual */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/70 text-white backdrop-blur-md border border-white/20">
                      Featured Work
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-600/90 text-white backdrop-blur-md">
                      Photoshop Manipulation
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-base sm:text-lg">SVT Smart Vehicle Transport</h3>
                    <p className="text-xs text-slate-300">Commercial Automotive Manipulation</p>
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
