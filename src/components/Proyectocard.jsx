import React from 'react';

// Componente Hijo: Recibe la información a través de PROPS
export function ProyectoCard({ titulo, descripcion, tecnologia, categoria, enlace }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-3">
          {/* Etiqueta con tono morado acorde a tu identidad */}
          <span className="text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full uppercase tracking-wider">
            {categoria}
          </span>
          <span className="text-xs text-gray-400 font-mono">{tecnologia}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
          {titulo}
        </h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {descripcion}
        </p>
      </div>
      
      {enlace && (
        <a 
          href={enlace} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
        >
          Ver proyecto <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      )}
    </div>
  );
}