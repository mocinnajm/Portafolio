// components/ProjectsGrid.jsx
import React from 'react';

const ProjectsGrid = () => {
  const projects = [
    {
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "E-commerce React",
      description: "Tienda completa con carrito y pasarela de pagos",
      tags: ["React", "Node.js", "Stripe"]
    },
    {
      icon: (
        <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Task Manager Pro",
      description: "Gestor de tareas con sincronización en tiempo real",
      tags: ["TypeScript", "Firebase"]
    },
    {
      icon: (
        <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "HealthTracker API",
      description: "Sistema de monitoreo médico con análisis predictivo",
      tags: ["Python", "FastAPI"]
    },
    {
      icon: (
        <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Portafolio Creativo",
      description: "Diseño interactivo con animaciones avanzadas",
      tags: ["GSAP", "Three.js"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Proyectos <span className="text-blue-600">Destacados</span>
        </h2>
        
        {/* Grid de 4 columnas en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all flex flex-col items-center text-center p-6"
            >
              {/* Icono SVG profesional */}
              <div className="mb-4 p-4 bg-blue-50 rounded-full">
                {project.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Botones */}
              <div className="flex gap-3 w-full">
                <a
                  href="#"
                  className="flex-1 text-center bg-gray-800 text-white py-2 px-4 rounded-md text-sm hover:bg-gray-700"
                >
                  Código
                </a>
                <a
                  href="#"
                  className="flex-1 text-center border border-gray-300 py-2 px-4 rounded-md text-sm hover:bg-gray-50"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;