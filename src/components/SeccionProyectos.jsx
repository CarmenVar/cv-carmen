import React, { useState } from 'react';
import { ProyectoCard } from './ProyectoCard';

// Datos de ejemplo basados en tu stack
const MIS_PROYECTOS = [
  {
    id: 1,
    titulo: 'Aplicación Gamificada LSA (Contacto)',
    descripcion: 'MVP interactivo para la enseñanza de Lengua de Señas Argentina.',
    categoria: 'React',
    tecnologia: 'React / Tailwind',
    enlace: 'https://github.com'
  },
  {
    id: 2,
    titulo: 'Tablero de Control de Gestión',
    descripcion: 'Dashboard analítico con métricas de ventas y KPIs de negocio.',
    categoria: 'Power BI',
    tecnologia: 'Power BI / DAX',
    enlace: '#'
  },
  {
    id: 3,
    titulo: 'Script de Automatización & ETL',
    descripcion: 'Procesamiento masivo de datos e integración con archivos CSV/Excel.',
    categoria: 'Python',
    tecnologia: 'Python / Pandas',
    enlace: 'https://github.com'
  },
  {
    id: 4,
    titulo: 'Configuración CRM Salesforce',
    descripcion: 'Parametrización de objetos personalizados, OWD y reglas de seguridad.',
    categoria: 'Salesforce',
    tecnologia: 'Salesforce Admin',
    enlace: '#'
  }
];

export function SeccionProyectos() {
  // 1. HOOK useState: Declaramos el Estado inicial
  const [filtro, setFiltro] = useState('Todos');

  // Categorías de botones disponibles
  const categorias = ['Todos', 'React', 'Power BI', 'Python', 'Salesforce'];

  // Lógica para filtrar los proyectos según el estado actual
  const proyectosFiltrados = filtro === 'Todos'
    ? MIS_PROYECTOS
    : MIS_PROYECTOS.filter(p => p.categoria === filtro);

  return (
    <section className="py-10 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mis Proyectos y Destacados</h2>

      {/* 2. BOTONES DE FILTRO: Modifican el Estado */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)} // Executa la función modificadora del estado
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filtro === cat
                ? 'bg-purple-600 text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. CONTENEDOR DE TARJETAS: Pasa los datos como PROPS al componente hijo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {proyectosFiltrados.map(proyecto => (
          <ProyectoCard
            key={proyecto.id}
            titulo={proyecto.titulo}          {/* Prop */}
            descripcion={proyecto.descripcion}  {/* Prop */}
            tecnologia={proyecto.tecnologia}   {/* Prop */}
            categoria={proyecto.categoria}    {/* Prop */}
            enlace={proyecto.enlace}          {/* Prop */}
          />
        ))}
      </div>
    </section>
  );
}