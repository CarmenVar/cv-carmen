// src/components/Header.jsx
export function Header({ name, title, location, email, linkedin, github }) {
  return (
    <header className="border-b border-slate-700 pb-4 mb-6">
      <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
      <p className="text-lg text-slate-300">{title}</p>
      <div className="mt-2 text-sm text-slate-400 space-y-1">
        <p>{location}</p>
        <p>
          <a href={`mailto:${email}`} className="hover:text-sky-400 underline-offset-2 hover:underline">
            {email}
          </a>
        </p>
        <p className="flex flex-wrap gap-2">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 underline-offset-2 hover:underline"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 underline-offset-2 hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </header>
  );
}
