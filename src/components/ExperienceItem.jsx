// src/components/ExperienceItem.jsx
import React from 'react';

export function ExperienceItem({ role, company, period, badge, bullets }) {
  return (
    <article className="relative pl-6 sm:pl-8 pb-8 last:pb-2 group break-inside-avoid">
      {/* Timeline vertical bar */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800 group-last:hidden" />

      {/* Timeline Node */}
      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-sky-500 ring-4 ring-white dark:ring-[#0b0f19] transition-transform duration-300 group-hover:scale-125" />

      {/* Card Content */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/70 shadow-xs transition-all duration-200 hover:border-sky-300 dark:hover:border-sky-800/80 hover:shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {role}
            </h3>
            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">
              {company}
            </p>
          </div>

          <div className="flex items-center gap-2 mt-1 sm:mt-0">
            {badge && (
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                {badge}
              </span>
            )}
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shrink-0">
              {period}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
