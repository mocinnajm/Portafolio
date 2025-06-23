const Hero = () => {
  return (
    <section id="hero" className="text-center py-10 space-y-6">
      <img
        src="/mosin.png"
        alt="Foto de Mosin"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover shadow-lg"
      />
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Hola, soy Mosin 👋</h2>
      <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto">
        Desarrollador FullStack con pasión por construir soluciones modernas con React, Node y más.
      </p>
      <a
        href="/cv.pdf"
        download
        className="inline-block mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
      >
        Descargar CV
      </a>
    </section>
  )
}

export default Hero
