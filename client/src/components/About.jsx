// components/About.jsx
const About = () => {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express", icon: "🚀" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TypeScript", icon: "📘" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre mí</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-6 leading-relaxed">
              Desarrollador FullStack con experiencia en la creación de aplicaciones web escalables. 
              Apasionado por resolver problemas complejos y construir soluciones eficientes.
            </p>
            <p className="text-lg leading-relaxed">
              Busco oportunidades desafiantes donde pueda aportar mis habilidades técnicas 
              y seguir creciendo profesionalmente.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Tecnologías:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techStack.map(tech => (
                <div 
                  key={tech.name} 
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg"
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;