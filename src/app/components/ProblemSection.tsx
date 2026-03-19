import { motion } from 'motion/react';

const FlagUS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-full h-full">
    <rect width="60" height="30" fill="#B22234"/>
    <rect y="2.3" width="60" height="2.3" fill="white"/>
    <rect y="6.9" width="60" height="2.3" fill="white"/>
    <rect y="11.5" width="60" height="2.3" fill="white"/>
    <rect y="16.2" width="60" height="2.3" fill="white"/>
    <rect y="20.8" width="60" height="2.3" fill="white"/>
    <rect y="25.4" width="60" height="2.3" fill="white"/>
    <rect width="24" height="16" fill="#3C3B6E"/>
    {[...Array(5)].map((_, row) =>
      [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => (
        <text
          key={`${row}-${col}`}
          x={row % 2 === 0 ? 2 + col * 4 : 4 + col * 4}
          y={2.5 + row * 3}
          fontSize="2.5"
          fill="white"
          textAnchor="middle"
        >★</text>
      ))
    )}
  </svg>
);

const FlagBO = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-full h-full">
    <rect width="60" height="10" fill="#D52B1E"/>
    <rect y="10" width="60" height="10" fill="#F4E400"/>
    <rect y="20" width="60" height="10" fill="#007A3D"/>
  </svg>
);

const FlagCN = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className="w-full h-full">
    <rect width="60" height="40" fill="#DE2910"/>
    <text x="10" y="16" fontSize="12" fill="#FFDE00" textAnchor="middle">★</text>
    <text x="22" y="8" fontSize="5" fill="#FFDE00" textAnchor="middle">★</text>
    <text x="26" y="14" fontSize="5" fill="#FFDE00" textAnchor="middle">★</text>
    <text x="26" y="21" fontSize="5" fill="#FFDE00" textAnchor="middle">★</text>
    <text x="22" y="27" fontSize="5" fill="#FFDE00" textAnchor="middle">★</text>
  </svg>
);

export function ProblemSection() {
  const problems = [
    {
      flag: <FlagUS />,
      title: 'Estados Unidos',
      description: 'Centro de innovación y negocios internacionales. Acceso a mercados globales y oportunidades estratégicas',
    },
    {
      flag: <FlagBO />,
      title: 'Bolivia',
      description: 'Potencial de crecimiento y conexión regional. Ideal para establecer operaciones en Sudamérica.',
    },
    {
      flag: <FlagCN />,
      title: 'China',
      description: 'Líder en comercio y manufactura global. Plataforma sólida para importar, exportar y crecer.',
    },
  ];

  return (
    <section className="py-20 bg-[#0A2E3D]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PRESENCIA GLOBAL
        </motion.h2>
        <motion.p
          className="text-xl text-[#B0C4CC] text-center mb-16 max-w-2xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Multiply Group conecta oportunidades de negocio a nivel internacional, ofreciendo
          soluciones innovadoras y confiables para empresas que buscan expandirse y fortalecer su
          presencia global.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-[#0D3A4A] rounded-2xl p-8 hover:bg-[#0D3A4A]/80 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Bandera más grande con proporción 3:2 */}
              <div className="w-24 h-16 rounded-xl overflow-hidden mb-6 shadow-lg shadow-black/30 group-hover:shadow-[#00C2FF]/10 transition-shadow">
                {problem.flag}
              </div>
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {problem.title}
              </h3>
              <p className="text-[#B0C4CC]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}