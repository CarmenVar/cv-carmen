// src/components/AdditionalInfoSection.jsx
import React from 'react';
import { GlobeIcon, BookOpenIcon, AwardIcon } from './Icons';

export function AdditionalInfoSection({ title, labels, data }) {
  return (
    <section className="my-7">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
          <AwardIcon className="w-4 h-4" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
          {title}
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* Languages Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/70 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-sky-400">
              <GlobeIcon className="w-4 h-4" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200">
                {labels.languages}
              </h3>
            </div>
            <ul className="space-y-2 mt-2">
              {data.languages.map((lang, idx) => (
                <li key={idx} className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {lang.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Courses Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/70 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-sky-600 dark:text-sky-400">
              <BookOpenIcon className="w-4 h-4" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200">
                {labels.courses}
              </h3>
            </div>
            <ul className="space-y-2 mt-2">
              {data.courses.map((course, idx) => (
                <li key={idx} className="text-xs">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {course.title}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                    {course.institution}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-slate-800/70 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-amber-500">
              <AwardIcon className="w-4 h-4" />
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200">
                {labels.awards}
              </h3>
            </div>
            <ul className="space-y-2 mt-2">
              {data.awards.map((award, idx) => (
                <li key={idx} className="text-xs">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    {award.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <span>{award.organization}</span>
                    {award.note && (
                      <span className="px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium">
                        {award.note}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
