import { motion } from 'motion/react';
import { Target, Eye, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0A2E3D]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Nosotros
          </h2>
          <p
            className="text-xl text-[#B0C4CC] max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Multiply Group es líder en importaciones, especializado en conectar empresas
            con proveedores confiables en China. Transformamos la complejidad del comercio internacional
            en oportunidades rentables y sin complicaciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gradient-to-br from-[#0D3A4A] to-[#0A2E3D] rounded-2xl p-8 border border-[#00C2FF]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="bg-[#00C2FF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#00C2FF]" />
            </div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nuestra Misión
            </h3>
            <p className="text-[#B0C4CC]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Empoderar a empresas de todo el mundo proporcionando soluciones de
              importación seguras, rentables y sin complicaciones desde China.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#0D3A4A] to-[#0A2E3D] rounded-2xl p-8 border border-[#3EC6D3]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="bg-[#3EC6D3]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-[#3EC6D3]" />
            </div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nuestra Visión
            </h3>
            <p className="text-[#B0C4CC]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Convertirnos en el socio más confiable para empresas que buscan expandirse a través
              del comercio internacional y la excelencia en importación.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#0D3A4A] to-[#0A2E3D] rounded-2xl p-8 border border-[#00C2FF]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <div className="bg-[#00C2FF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-[#00C2FF]" />
            </div>
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nuestro Propósito
            </h3>
            <p className="text-[#B0C4CC]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Crear oportunidades de negocio duraderas a través de alianzas confiables, orientación experta,
              y compromiso con tu éxito.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}