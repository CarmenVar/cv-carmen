import React, { useState } from 'react';
import { ProyectoCard } from './ProyectoCard';

const MIS_PROYECTOS = [
  {
    id: 1,
    titulo: 'Aplicación Gamificada LSA (Contacto)',
    descripcion: 'MVP interactivo desarrollado para la enseñanza y difusión de la Lengua de Señas Argentina.',
    categoria: 'React',
    tecnologia: 'React / Tailwind',
    enlace: 'https://github.com'
  },
  {
    id: 2,
    titulo: 'Tablero de Control de Gestión',
    descripcion: 'Dashboard analítico avanzado con métricas de negocio, optimización de datos y KPIs en tiempo real.',
    categoria: 'Power BI',
    tecnologia: 'Power BI / DAX',
    enlace: '#'
  },
  {
    id: 3,
    titulo: 'Script de Automatización & ETL',
    descripcion: 'Procesamiento masivo de datos e integración automatizada con archivos estructurados.',
    categoria: 'Python',
    tecnologia: 'Python / Pandas',
    enlace: 'https://github.com'
  },
  {
    id: 4,
    titulo: 'Configuración CRM Salesforce',
    descripcion: 'Parametrización integral de objetos personalizados, OWD y arquitectura de seguridad a nivel de registros.',
    categoria: 'Salesforce',
    tecnologia: 'Salesforce Admin',
    enlace: '#'
  }
];

export function SeccionProyectos() {
  const [filtro, setFiltro] = useState('Todos');
  const categorias = ['Todos', 'React', 'Power BI', 'Python', 'Salesforce'];

  const proyectosFiltrados = filtro === 'Todos'
    ? MIS_PROYECTOS
    : MIS_PROYECTOS.filter(p => p.categoria === filtro);

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Proyectos Destacados</h2>
        <p className="text-gray-500 mt-2 text-sm">Explora mis desarrollos recientes filtrando por tecnología</p>
      </div>

      {/* Botones de filtro con los colores de tu marca (Morado / Slate) */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filtro === cat
                ? 'bg-purple-600 text-white shadow-sm shadow-purple-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tarjetas */}
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