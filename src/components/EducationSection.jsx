// src/components/EducationSection.jsx
import React from 'react';
import { AcademicCapIcon } from './Icons';

export function EducationSection({ title, education }) {
  return (
    <section className="my-7">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
          <AcademicCapIcon className="w-4 h-4" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
          {title}
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/70 shadow-xs flex flex-col justify-between hover:border-sky-300 dark:hover:border-sky-800/80 transition-all duration-200"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  {edu.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400">
                {edu.institution}
              </p>
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/70 text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                {edu.period}
              </span>
              {edu.status && (
                <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {edu.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
