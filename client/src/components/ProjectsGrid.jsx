// components/ProjectsGrid.jsx
import React from 'react';

// Ilustraciones profesionales (puedes reemplazar con tus SVG)
const ProjectIllustrations = {
  ecommerce: (
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect x="30" y="50" width="140" height="100" rx="10" fill="#3B82F6" opacity="0.2"/>
      <circle cx="100" cy="80" r="20" fill="#3B82F6"/>
      <rect x="50" y="120" width="100" height="10" rx="5" fill="#3B82F6"/>
    </svg>
  ),
  task: (
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect x="40" y="40" width="120" height="120" rx="15" fill="#10B981" opacity="0.2"/>
      <rect x="60" y="70" width="80" height="10" rx="5" fill="#10B981"/>
      <rect x="60" y="90" width="60" height="10" rx="5" fill="#10B981"/>
      <rect x="60" y="110" width="70" height="10" rx="5" fill="#10B981"/>
    </svg>
  ),
  health: (
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <path d="M100 50 L150 100 L100 150 L50 100 Z" fill="#8B5CF6" opacity="0.2"/>
      <line x1="100" y1="50" x2="100" y2="150" stroke="#8B5CF6" strokeWidth="8"/>
      <line x1="50" y1="100" x2="150" y2="100" stroke="#8B5CF6" strokeWidth="8"/>
    </svg>
  ),
  portfolio: (
    <svg viewBox="0 0 200 200" className="w-full h-auto">
      <rect x="50" y="50" width="100" height="100" rx="10" fill="#F59E0B" opacity="0.2"/>
      <circle cx="100" cy="80" r="15" fill="#F59E0B"/>
      <rect x="70" y="110" width="60" height="10" rx="5" fill="#F59E0B"/>
      <rect x="70" y="130" width="40" height="10" rx="5" fill="#F59E0B"/>
    </svg>
  )
};

const ProjectsGrid = () => {
  const projects = [
    {
      title: "E-commerce React",
      description: "Plataforma completa con pasarela de pagos y panel administrativo",
      tags: ["React", "Node.js", "Stripe"],
      illustration: ProjectIllustrations.ecommerce,
      color: "blue"
    },
    {
      title: "Task Manager Pro",
      description: "Gestor de tareas con sincronización en tiempo real",
      tags: ["TypeScript", "Firebase"],
      illustration: ProjectIllustrations.task,
      color: "green"
    },
    {
      title: "HealthTracker API",
      description: "Sistema de monitoreo médico con análisis predictivo",
      tags: ["Python", "FastAPI"],
      illustration: ProjectIllustrations.health,
      color: "purple"
    },
    {
      title: "Portafolio Creativo",
      description: "Diseño interactivo con animaciones avanzadas",
      tags: ["GSAP", "Three.js"],
      illustration: ProjectIllustrations.portfolio,
      color: "amber"
    }
  ];

  // Mapeo de colores Tailwind
  const colorMap = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Proyectos <span className="text-blue-600">Destacados</span>
        </h2>
        
        {/* Cuadrícula perfectamente alineada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <div 
                key={index}
                className={`${colors.bg} rounded-xl overflow-hidden border ${colors.border} hover:shadow-lg transition-all flex flex-col h-full`}
              >
                {/* Ilustración profesional */}
                <div className="p-6 flex items-center justify-center h-48">
                  {project.illustration}
                </div>
                
                {/* Contenido */}
                <div className="p-6 pt-0 flex-grow">
                  <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-white text-gray-800 text-xs px-3 py-1 rounded-full shadow-sm border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Botones */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href="#"
                      className="flex-1 text-center bg-white text-gray-800 py-2 px-4 rounded-md text-sm hover:bg-gray-50 border border-gray-300"
                    >
                      Ver código
                    </a>
                    <a
                      href="#"
                      className="flex-1 text-center bg-white text-gray-800 py-2 px-4 rounded-md text-sm hover:bg-gray-50 border border-gray-300"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;