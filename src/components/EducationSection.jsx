// src/components/EducationSection.jsx
export function EducationSection({ education }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-sky-300">Formación académica</h2>
      <ul className="space-y-2 text-sm text-slate-200">
        {education.map((edu) => (
          <li key={edu.id}>
            <p className="font-medium">{edu.title}</p>
            <p className="text-slate-300">{edu.institution}</p>
            {edu.period && <p className="text-xs text-slate-400">{edu.period}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
