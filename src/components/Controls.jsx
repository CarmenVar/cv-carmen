// src/components/Controls.jsx
import React from 'react';
import { SunIcon, MoonIcon, PrinterIcon, SpainFlag, UKFlag } from './Icons';

export function Controls({ lang, setLang, theme, setTheme, labels }) {
  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <nav className="no-print sticky top-3 z-50 mb-8 flex justify-center px-2">
      <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-slate-900/5 dark:shadow-black/30 transition-all duration-300">
        
        {/* Elegant One-Click Language Switcher Segmented Button */}
        <div
          id="lang-switcher"
          role="group"
          aria-label="Language selector"
          className="relative flex items-center bg-slate-100 dark:bg-slate-800/90 rounded-xl p-1 border border-slate-200/70 dark:border-slate-700/60"
        >
          {/* Spanish button */}
          <button
            id="lang-btn-es"
            type="button"
            onClick={() => setLang('es')}
            title="Cambiar a Español"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              lang === 'es'
                ? 'bg-white dark:bg-sky-500 text-sky-700 dark:text-white shadow-sm ring-1 ring-slate-950/5 dark:ring-0'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <SpainFlag className="w-4 h-2.5 rounded-xs shadow-2xs" />
            <span>ES</span>
          </button>

          {/* English button */}
          <button
            id="lang-btn-en"
            type="button"
            onClick={() => setLang('en')}
            title="Switch to English"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              lang === 'en'
                ? 'bg-white dark:bg-sky-500 text-sky-700 dark:text-white shadow-sm ring-1 ring-slate-950/5 dark:ring-0'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <UKFlag className="w-4 h-2.5 rounded-xs shadow-2xs" />
            <span>EN</span>
          </button>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 my-auto" />

        {/* Dark / Bright Mode Switcher Button */}
        <button
          id="theme-toggle-btn"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? labels.lightMode : labels.darkMode}
          title={theme === 'dark' ? labels.lightMode : labels.darkMode}
          className="group relative flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/90 dark:hover:bg-slate-700/80 text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-700/60 transition-all duration-200 cursor-pointer"
        >
          {theme === 'dark' ? (
            <>
              <SunIcon className="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
              <span className="hidden sm:inline">{labels.lightMode}</span>
            </>
          ) : (
            <>
              <MoonIcon className="w-4 h-4 text-sky-600 transition-transform duration-300 group-hover:-rotate-12" />
              <span className="hidden sm:inline">{labels.darkMode}</span>
            </>
          )}
        </button>

        {/* Print / Save PDF Button */}
        <button
          id="print-btn"
          type="button"
          onClick={handlePrint}
          title={labels.printPdf}
          aria-label={labels.printPdf}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/50 dark:hover:bg-sky-900/50 text-sky-700 dark:text-sky-300 border border-sky-200/80 dark:border-sky-800/50 transition-all duration-200 cursor-pointer"
        >
          <PrinterIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
          <span className="hidden md:inline">{labels.printPdf}</span>
        </button>
      </div>
    </nav>
  );
}
