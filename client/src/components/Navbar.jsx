// src/components/Navbar.jsx
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow fixed left-0 top-0 h-full w-48 z-50">
      <div className="p-4">
        <ul className="flex flex-col gap-4 py-4 text-blue-700 font-medium text-sm md:text-base">
          <li>
            <a href="#hero" className="block hover:text-blue-500 p-2 hover:bg-blue-50 rounded">Inicio</a>
          </li>
          <li>
            <a href="#about" className="block hover:text-blue-500 p-2 hover:bg-blue-50 rounded">Sobre</a>
          </li>
          <li>
            <a href="#projects" className="block hover:text-blue-500 p-2 hover:bg-blue-50 rounded">Proyectos</a>
          </li>
          <li>
            <a href="#contact" className="block hover:text-blue-500 p-2 hover:bg-blue-50 rounded">Contacto</a>
          </li>
          <li>
            <a href="#admin" className="block hover:text-blue-500 p-2 hover:bg-blue-50 rounded">Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar