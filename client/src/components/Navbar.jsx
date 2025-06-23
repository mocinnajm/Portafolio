// src/components/Navbar.jsx
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <ul className="flex flex-wrap justify-center items-center gap-6 py-4 text-blue-700 font-medium text-sm md:text-base">

          <li>
            <a href="#hero" className="hover:text-blue-500">Inicio</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">Sobre</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">Proyectos</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">Contacto</a>
          </li>
          <li>
            <a href="#admin" className="hover:text-blue-500">Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
