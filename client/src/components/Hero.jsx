// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-indigo-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Foto de perfil (añade tu imagen en public/) */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img 
            src="/mosin.png" 
            alt="Mosin Najm - FullStack Developer"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hola, soy <span className="text-yellow-300">Mosin Najm</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8">
          Desarrollador FullStack especializado en React, Node.js y MongoDB
        </p>

        <div className="mb-8">
          <p className="text-lg mb-2">mohnaj@prateducacio.com</p>
          <p className="text-lg">desarrollador web full stack</p>
        </div>

        <a 
          href="/cv-mosin-najm.pdf" 
          download
          className="inline-flex items-center justify-center bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all shadow-lg"
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
};

export default Hero;