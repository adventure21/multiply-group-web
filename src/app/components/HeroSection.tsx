import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A2E3D 0%, #0D3A4A 50%, #0A2E3D 100%)',
      }}
    >
      {/* Background world map image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/image/Mapa mundial sobre fondo azul.gradient.png')`,
          opacity: 1,
        }}
      />

      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-[#0A2E3D]/40" />

      {/* Animated background glow */}
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
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1
            className="text-6xl md:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            MULTIPLY GROUP
          </h1>
        </motion.div>

        <motion.p
          className="text-xl text-[#B0C4CC] mb-12 max-w-3xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Somos asesores en negocios internacionales, gestionamos mayores beneficios, reducimos los riesgos en las importaciones o exportaciones, te asesoramos en documentacion legal, tributaria y logistica. Contamos con sede en Estados Unidos, Bolivia y China
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection('cta')}
            className="bg-[#00C2FF] hover:bg-[#009FCC] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#00C2FF]/30"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Comienza Ahora
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="bg-transparent border-2 border-[#00C2FF] text-white px-8 py-4 rounded-xl transition-all duration-300 hover:bg-[#00C2FF]/10"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ver Servicios
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A2E3D] to-transparent" />
    </section>
  );
}