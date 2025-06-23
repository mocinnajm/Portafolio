import React from 'react'

const proyectos = [
  {
    titulo: 'Mi primer portafolio',
    imagen: '/proyecto1.jpg', // Asegúrate de que la imagen esté en public/images
    descripcion: 'Un portafolio profesional creado con React y Tailwind.',
    tecnologias: ['React', 'Tailwind', 'Node.js'],
    enlace: 'https://github.com/mosin/mi-portafolio'
  },
  {
    titulo: 'App de tareas',
    imagen: '/proyecto2.jpg',
    descripcion: 'Aplicación para gestionar tareas diarias con Mongo y Express.',
    tecnologias: ['MongoDB', 'Express', 'React', 'Node.js'],
    enlace: 'https://github.com/mosin/app-tareas'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-700">🚀 Proyectos</h2>

      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="w-full h-64 overflow-hidden rounded-md mb-4">
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              className="w-full h-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{proyecto.titulo}</h3>
            <p className="text-gray-600 text-sm mb-2">{proyecto.descripcion}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i} className="bg-gray-100 text-sm px-3 py-1 rounded-full text-gray-700">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 inline-block mt-2"
            >
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
