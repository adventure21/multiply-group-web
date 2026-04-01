import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A2E3D 0%, #0D3A4A 50%, #0A2E3D 100%)',
      }}
    >
      {/* Background world map */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/image/Mapa mundial sobre fondo azul.gradient.png')`,
          opacity: 1,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A2E3D]/40" />

      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, #3EC6D3 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, #00C2FF 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, #3EC6D3 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, #3EC6D3 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
          <span className="text-[#00C2FF] text-xs sm:text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
            Presencia en 3 continentes
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          MULTIPLY GROUP
        </motion.h1>

        {/* Subtítulo corto — impacto inmediato */}
        <motion.p
          className="text-lg sm:text-xl font-semibold text-[#3EC6D3] mb-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Asesores en comercio internacional y representación empresarial global
        </motion.p>

        {/* Descripción — más corta y legible */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-[#B0C4CC] mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Conectamos oportunidades reales de negocio entre vendedores y compradores internacionales,
          gestionando importaciones, exportaciones y logística con eficiencia y seguridad.
        </motion.p>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection('cta')}
            className="w-full sm:w-auto bg-[#00C2FF] hover:bg-[#009FCC] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-[#00C2FF]/30 font-semibold"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Comienza Ahora
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto bg-transparent border-2 border-[#00C2FF] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:bg-[#00C2FF]/10 font-medium"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ver Servicios
          </button>
        </motion.div>

        {/* Flags — mercados clave */}
        <motion.div
          className="flex justify-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { flag: '🇺🇸', label: 'EE.UU.' },
            { flag: '🇧🇴', label: 'Bolivia' },
            { flag: '🇨🇳', label: 'China' },
          ].map(({ flag, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-2xl sm:text-3xl">{flag}</span>
              <span className="text-[#B0C4CC] text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#B0C4CC] hover:text-white transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A2E3D] to-transparent" />
    </section>
  );
}