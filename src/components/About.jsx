import React from 'react';
import { Award, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const t = portfolioData.about;

  return (
    <section id="about" className="py-20 bg-zinc-100/60 dark:bg-[#0c0c0e] relative border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Bio Box with Marwan's Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#121214] border border-zinc-200 dark:border-zinc-800 p-4 sm:p-5 shadow-2xl space-y-5">
              
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-900 shadow-inner group">
                <img
                  src="/marwan.jpg"
                  alt="Marwan Hassan - Lead Commercial Visual Artist"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                
                {/* Floating badge inside photo */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md mb-1.5 border border-white/20">
                    Lead Visual Artist
                  </span>
                  <h3 className="text-xl font-extrabold tracking-tight">
                    Marwan Hassan
                  </h3>
                  <p className="text-xs text-zinc-300 font-medium">
                    Commercial Visual Artist & Graphic Designer
                  </p>
                </div>
              </div>

              {/* Bio Details */}
              <div className="space-y-2.5 px-2 pt-1 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400">Location</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">Egypt (Available Globally)</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400">Experience</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">2+ Commercial Years</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-zinc-500 dark:text-zinc-400">Specialization</span>
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">Key Visuals & Manipulation</span>
                </div>
              </div>

              {/* Highlight Quote */}
              <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                <p className="text-xs text-zinc-800 dark:text-zinc-200 italic leading-relaxed">
                  "Digital compositing is not just piecing layers together; it is an understanding of optical physics, realistic light falloff, and narrative tension."
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Prose & Skills */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight">
              {t.headline}
            </h2>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* Skills Bars */}
            <div className="pt-4 space-y-4">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span>{t.skillsTitle}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                      <span className="text-zinc-600 dark:text-zinc-400">{skill.level}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-zinc-700 to-zinc-400 dark:from-white dark:to-zinc-500 transition-all duration-1000"
                        style={{ width: skill.level }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
