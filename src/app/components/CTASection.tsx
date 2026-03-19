import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section
      id="cta"
      className="py-32 bg-gradient-to-br from-[#00C2FF] via-[#009FCC] to-[#3EC6D3] relative overflow-hidden"
    >
      {/* Animated background patterns */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Expandimos tus oportunidades de negocio a nivel global.
          </h2>
          <p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Tu socio estratégico en negocios internacionales, brindando soporte completo para que tu empresa llegue a nuevos mercados.
          </p>

          <motion.button
            className="bg-white text-[#00C2FF] px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-3 group"
            style={{ fontFamily: 'Inter, sans-serif' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comienza Ahora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>comext@multiplysrl.com</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>+591 77242591</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}