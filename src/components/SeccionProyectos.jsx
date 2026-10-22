import React, { useState } from 'react';
import { ProyectoCard } from './ProyectoCard'; // Recuerda la C mayúscula en la P y C

// Recibe la propiedad 'data' que vendrá desde cvData (según el idioma activo)
export function SeccionProyectos({ data }) {
  // Extraemos la información relevante de 'data'
  const { title, subtitle, categories, projects } = data;

  // Estado para guardar la categoría seleccionada (usamos por defecto la primera opción, ej. "Todos" o "All")
  const [filtro, setFiltro] = useState(categories[0]);

  // Si se selecciona la primera opción ("Todos" / "All"), muestra todo; de lo contrario, filtra por categoría
  const proyectosFiltrados = filtro === categories[0]
    ? projects
    : projects.filter(p => p.categoria === filtro);

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{title}</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">{subtitle}</p>
      </div>

      {/* Botones de filtro dinámicos según el idioma */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filtro === cat
                ? 'bg-purple-600 text-white shadow-sm shadow-purple-200'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tarjetas filtradas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyectosFiltrados.map(proyecto => (
          <ProyectoCard
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            tecnologia={proyecto.tecnologia}
            categoria={proyecto.categoria}
            enlace={proyecto.enlace}
          />
        ))}
      </div>
    </section>
  );
}