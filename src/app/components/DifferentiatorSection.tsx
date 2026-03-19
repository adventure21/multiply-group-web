import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function DifferentiatorSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-[#0D3A4A] via-[#0A2E3D] to-[#0D3A4A] relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00C2FF]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3EC6D3]/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#00C2FF]/10 px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-5 h-5 text-[#00C2FF]" />
            <span className="text-[#00C2FF] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
              Lo Que Nos Hace Diferentes
            </span>
          </motion.div>

          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            No solo importamos,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#3EC6D3]">
              creamos oportunidades de negocio
            </span>
          </h2>

          <p
            className="text-xl md:text-2xl text-[#B0C4CC] max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Nuestro compromiso va más allá de las transacciones. Construimos alianzas que transforman tu
            negocio a través de soluciones estratégicas de importación.
          </p>
        </motion.div>
      </div>
    </section>
  );
}