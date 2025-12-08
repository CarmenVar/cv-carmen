import React from "react";

export const Header = ({ data }) => {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center gap-5 mb-8">
      {/* Foto */}
      <div className="w-28 h-28 rounded-full bg-slate-700 overflow-hidden shrink-0 border border-slate-500">
        {/* Si no hay fotoUrl, podrías dejar un círculo vacío o iniciales */}
        {data.photoUrl ? (
          <img
            src={data.photoUrl}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      {/* Datos principales */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-slate-50">
          {data.name}
        </h1>
        <p className="text-sm text-slate-200">
          {data.title}
        </p>

        <div className="mt-2 text-xs text-slate-300 space-y-1">
          <p>{data.location}</p>
          <p>{data.email}</p>
          <div className="flex flex-wrap gap-3 text-[11px]">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              LinkedIn
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

