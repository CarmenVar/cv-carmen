// src/components/Header.jsx
import React, { useState } from 'react';
import { MapPinIcon, MailIcon, LinkedInIcon, GitHubIcon, CopyIcon, CheckIcon } from './Icons';

export function Header({ data, labels }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="relative flex flex-col md:flex-row items-center md:items-start gap-6 pb-8 border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Avatar Container */}
      <div className="relative shrink-0 group">
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-sky-500/40 dark:border-sky-400/50 shadow-xl ring-4 ring-sky-500/10 dark:ring-sky-400/10 bg-slate-200 dark:bg-slate-800 transition-transform duration-300 group-hover:scale-[1.02]">
          <img
            src={data.photoUrl}
            alt={data.name}
            className="w-full h-full object-cover object-[center_20%]"
            loading="eager"
          />
        </div>

        {/* Pulse status indicator */}
        <div
          title={labels.available}
          className="absolute bottom-1 right-2 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-slate-900 shadow-md"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
        </div>
      </div>

      {/* Main Info */}
      <div className="flex-1 text-center md:text-left space-y-3">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>{labels.available}</span>
        </div>

        {/* Name & Title */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {data.name}
          </h1>
          <p className="mt-1 text-sm sm:text-base font-semibold text-sky-600 dark:text-sky-400 tracking-wide uppercase">
            {data.title}
          </p>
        </div>

        {/* Contact Chips */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-xs">
          {/* Location */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60">
            <MapPinIcon className="w-3.5 h-3.5 text-sky-500" />
            <span>{data.location}</span>
          </span>

          {/* Email with copy button */}
          <div className="inline-flex items-center rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/60 overflow-hidden text-slate-700 dark:text-slate-300">
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              <MailIcon className="w-3.5 h-3.5 text-sky-500" />
              <span>{data.email}</span>
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              title={copied ? labels.copiedEmail : "Copiar email"}
              className="px-2 py-1.5 border-l border-slate-200/80 dark:border-slate-700/70 hover:bg-slate-200 dark:hover:bg-slate-700/60 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
            >
              {copied ? (
                <CheckIcon className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <CopyIcon className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-sky-50 dark:bg-slate-800/80 dark:hover:bg-sky-950/40 text-slate-700 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 border border-slate-200/70 hover:border-sky-300 dark:border-slate-700/60 dark:hover:border-sky-800/60 transition-all duration-200"
          >
            <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-200/70 dark:border-slate-700/60 transition-all duration-200"
          >
            <GitHubIcon className="w-3.5 h-3.5 text-slate-800 dark:text-slate-200" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
