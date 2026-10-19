// src/components/ExperienceSection.jsx
import React from 'react';
import { ExperienceItem } from './ExperienceItem';
import { BriefcaseIcon } from './Icons';

export function ExperienceSection({ title, experience }) {
  return (
    <section className="my-7">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400">
          <BriefcaseIcon className="w-4 h-4" />
        </div>
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
          {title}
        </h2>
      </div>

      <div className="mt-2 ml-1">
        {experience.map((item) => (
          <ExperienceItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
