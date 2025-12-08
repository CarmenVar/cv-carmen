// src/components/SkillsSection.jsx
export function SkillsSection({ title, items }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-sky-300">{title}</h2>
      <ul className="flex flex-wrap gap-2 text-xs">
        {items.map((skill, idx) => (
          <li
            key={idx}
            className="px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-slate-100"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
