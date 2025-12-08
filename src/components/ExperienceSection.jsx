// src/components/ExperienceSection.jsx
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection({ experience }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-sky-300">Experiencia laboral</h2>
      {experience.map((exp) => (
        <ExperienceItem key={exp.id} {...exp} />
      ))}
    </section>
  );
}
