
import { cvData } from './data/cvData';
import { Header } from './components/Header';
import { Summary } from "./components/Summary";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-slate-950/60 border border-slate-800 rounded-2xl p-6 shadow-lg">
        <Header
          name={cvData.name}
          title={cvData.title}
          location={cvData.location}
          email={cvData.email}
          linkedin={cvData.linkedin}
          github={cvData.github}
          data={cvData}
        />

        <Summary text={cvData.summary} />

        <ExperienceSection experience={cvData.experience} />

        <EducationSection education={cvData.education} />

        <div className="grid gap-4 md:grid-cols-2">
          <SkillsSection title="Habilidades clave" items={cvData.skills} />
          <SkillsSection title="Competencias técnicas" items={cvData.techSkills} />
        <Analytics />
        </div>
      </div>
    </main>
  );
}

export default App
