// src/components/ExperienceItem.jsx
export function ExperienceItem({ role, company, period, bullets }) {
  return (
    <article className="mb-4">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-semibold text-slate-100">
          {role} <span className="text-slate-300">– {company}</span>
        </h3>
        <p className="text-xs text-slate-400 mt-1 sm:mt-0">{period}</p>
      </div>
      <ul className="mt-1 list-disc list-inside text-sm text-slate-200 space-y-1">
        {bullets.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
