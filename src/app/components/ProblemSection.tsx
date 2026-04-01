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

const FlagIN = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" className="w-full h-full">
    <rect width="60" height="13.3" fill="#FF9933"/>
    <rect y="13.3" width="60" height="13.3" fill="white"/>
    <rect y="26.6" width="60" height="13.4" fill="#138808"/>
    {/* Rueda de Ashoka simplificada */}
    <circle cx="30" cy="20" r="5" fill="none" stroke="#000080" strokeWidth="0.8"/>
    <circle cx="30" cy="20" r="1" fill="#000080"/>
    {[...Array(24)].map((_, i) => {
      const angle = (i * 360) / 24;
      const rad = (angle * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={30 + Math.cos(rad) * 1.2}
          y1={20 + Math.sin(rad) * 1.2}
          x2={30 + Math.cos(rad) * 4.8}
          y2={20 + Math.sin(rad) * 4.8}
          stroke="#000080"
          strokeWidth="0.5"
        />
      );
    })}
  </svg>
);

const countries = [
  
  {
    flag: <FlagBO />,
    title: 'Bolivia',
    description: 'Potencial de crecimiento y conexión regional. Ideal para establecer operaciones en Sudamérica.',
    stat: '+591',
    statLabel: 'Numero en',
  },
  {
    flag: <FlagCN />,
    title: 'China',
    description: 'Líder en comercio y manufactura global. Plataforma sólida para importar, exportar y crecer.',
    stat: '+86',
    statLabel: 'Numero en',
  },
  {
    flag: <FlagUS />,
    title: 'Estados Unidos',
    description: 'Centro de innovación y negocios internacionales. Acceso a mercados globales y oportunidades estratégicas.',
    stat: '+1',
    statLabel: 'Numero en ',
  },
  {
    flag: <FlagIN />,
    title: 'India',
    description: 'Economía emergente con alto potencial en manufactura y tecnología. Nuevas rutas comerciales en expansión.',
    stat: '+91',
    statLabel: 'Numero en',
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 bg-[#0A2E3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PRESENCIA GLOBAL
        </motion.h2>
        <motion.p
          className="text-base sm:text-xl text-[#B0C4CC] text-center mb-16 max-w-2xl mx-auto px-4"
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

        {/* Grid — 1 col móvil, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              className="bg-[#0D3A4A] rounded-2xl p-6 sm:p-8 transition-all duration-300 group flex flex-col"
              style={{ border: '1px solid rgba(0,194,255,0.1)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(0,194,255,0.35)' }}
            >
              {/* Bandera */}
              <div className="w-20 h-14 rounded-xl overflow-hidden mb-5 shadow-lg shadow-black/30 group-hover:shadow-[#00C2FF]/10 transition-shadow flex-shrink-0">
                {country.flag}
              </div>

              {/* Título */}
              <h3
                className="text-xl sm:text-2xl font-bold text-white mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {country.title}
              </h3>

              {/* Descripción */}
              <p
                className="text-sm sm:text-base text-[#B0C4CC] flex-grow mb-5"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {country.description}
              </p>

              {/* Estadística ficticia */}
              <div
                className="mt-auto pt-4 border-t"
                style={{ borderColor: 'rgba(0,194,255,0.15)' }}
              >
                <p
                  className="text-2xl sm:text-3xl font-bold"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    color: index % 2 === 0 ? '#00C2FF' : '#3EC6D3',
                  }}
                >
                  {country.stat}
                </p>
                <p
                  className="text-xs sm:text-sm text-[#7BA8B8] mt-0.5"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {country.statLabel}
                </p>
              </div>

            </motion.div>   
          ))}
        </div>      

      </div>           
    </section>    
  );
}