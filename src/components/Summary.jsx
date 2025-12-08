// src/components/Summary.jsx
export function Summary({ text }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-sky-300">Perfil profesional</h2>
      <p className="text-sm leading-relaxed text-slate-200 whitespace-pre-line">
        {text}
      </p>
    </section>
  );
}
