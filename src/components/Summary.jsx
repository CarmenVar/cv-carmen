// src/components/Summary.jsx
import React from 'react';
import { DocumentTextIcon } from './Icons';

export function Summary({ title, text }) {
  return (
    <section className="my-7">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-1.5 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
          <DocumentTextIcon className="w-4 h-4" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
          {title}
        </h2>
      </div>

      <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 shadow-xs">
        <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
          {text}
        </p>
      </div>
    </section>
  );
}
