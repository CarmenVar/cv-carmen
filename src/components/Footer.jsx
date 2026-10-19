// src/components/Footer.jsx
import React from 'react';

export function Footer({ labels, name }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-12 pt-6 border-t border-slate-200/80 dark:border-slate-800/80 text-center text-xs text-slate-500 dark:text-slate-400 no-print flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <p className="font-medium text-slate-700 dark:text-slate-300">
          © {new Date().getFullYear()} {name}
        </p>
        <p className="text-[11px] mt-0.5 text-slate-500 dark:text-slate-400">
          {labels.footerNote}
        </p>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer text-xs font-medium"
      >
        ↑ Top
      </button>
    </footer>
  );
}
