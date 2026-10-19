import React, { useState, useEffect } from 'react';
import { cvData } from './data/cvData';
import { Controls } from './components/Controls';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { AdditionalInfoSection } from './components/AdditionalInfoSection';
import { Footer } from './components/Footer';

function App() {
  // Language state: 'es' (default) or 'en'
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('cv_lang');
    return saved === 'en' || saved === 'es' ? saved : 'es';
  });

  // Theme state: 'dark' (default) or 'light' (bright mode)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('cv_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark';
  });

  // Synchronize language with localStorage and html attribute
  useEffect(() => {
    localStorage.setItem('cv_lang', lang);
    document.documentElement.lang = lang;
    const activeData = cvData[lang];
    document.title = `${activeData.header.name} | ${activeData.labels.summary}`;
  }, [lang]);

  // Synchronize theme with DOM class and localStorage
  useEffect(() => {
    localStorage.setItem('cv_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  const current = cvData[lang] || cvData.es;

  return (
    <div className="relative min-h-screen bg-slate-100 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 py-6 px-3 sm:px-6 transition-colors duration-300">
      
      {/* Decorative ambient gradients (hidden in print) */}
      <div className="no-print pointer-events-none fixed inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-sky-400/10 dark:bg-sky-500/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-indigo-400/10 dark:bg-indigo-500/10 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-emerald-400/10 dark:bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-4xl">
        {/* Sticky floating Controls Bar */}
        <Controls
          lang={lang}
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
          labels={current.labels}
        />

        {/* Main Resume Card */}
        <main className="print-clean bg-white/85 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-900/5 dark:shadow-black/40 transition-all duration-300">
          
          <Header
            data={current.header}
            labels={current.labels}
          />

          <Summary
            title={current.labels.summary}
            text={current.summary}
          />

          <ExperienceSection
            title={current.labels.experience}
            experience={current.experience}
          />

          <EducationSection
            title={current.labels.education}
            education={current.education}
          />

          <SkillsSection
            techTitle={current.labels.techSkills}
            techItems={current.techSkills}
            keyTitle={current.labels.keySkills}
            keyItems={current.keySkills}
          />

          <AdditionalInfoSection
            title={current.labels.additionalInfo}
            labels={current.labels}
            data={current.additionalInfo}
          />

          <Footer
            labels={current.labels}
            name={current.header.name}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
