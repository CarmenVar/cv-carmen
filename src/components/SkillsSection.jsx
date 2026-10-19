// src/components/SkillsSection.jsx
import React from 'react';
import { WrenchScrewdriverIcon, SparklesIcon, CheckCircleIcon } from './Icons';

export function SkillsSection({ techTitle, techItems, keyTitle, keyItems }) {
  return (
    <section className="my-7 grid gap-6 md:grid-cols-2">
      {/* Technical Skills */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
            <WrenchScrewdriverIcon className="w-4 h-4" />
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white uppercase">
            {techTitle}
          </h2>
        </div>

        <div className="flex-1 p-5 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/70 shadow-xs">
          <div className="flex flex-wrap gap-2">
            {techItems.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-sky-50 dark:bg-slate-800/90 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 transition-all duration-200 hover:border-sky-300 dark:hover:border-sky-500/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key Skills */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
            <SparklesIcon className="w-4 h-4" />
          </div>
          <h2 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white uppercase">
            {keyTitle}
          </h2>
        </div>

        <div className="flex-1 p-5 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/70 shadow-xs">
          <ul className="space-y-2.5">
            {keyItems.map((skill, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
