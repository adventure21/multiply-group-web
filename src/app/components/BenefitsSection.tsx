import { motion } from 'motion/react';
import { Clock, Shield, TrendingUp, Headphones } from 'lucide-react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Ahorro de Tiempo',
      description: 'Enfócate en tu negocio mientras nosotros manejamos el complejo proceso de importación.',
    },
    {
      icon: Shield,
      title: 'Reducción de Riesgos',
      description: 'Minimiza riesgos financieros con nuestra red de proveedores verificados.',
    },
    {
      icon: TrendingUp,
      title: 'Mayor Rentabilidad',
      description: 'Maximiza tus márgenes con precios competitivos y negociaciones.',
    },
    {
      icon: Headphones,
      title: 'Soporte Completo',
      description: 'Equipo dedicado disponible durante todo tu proceso de importación.',
    },
  ];

  return (
    <section className="py-20 bg-[#0D3A4A]">
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
            Por Qué Elegir Multiply Group
          </h2>
          <p
            className="text-xl text-[#B0C4CC] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Experimenta las ventajas de trabajar con expertos en importación
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="bg-[#0A2E3D] w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon className="w-12 h-12 text-[#00C2FF]" />
                </motion.div>
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-[#B0C4CC]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}