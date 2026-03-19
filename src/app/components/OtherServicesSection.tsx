import { motion } from 'motion/react';
import { Palette, TrendingUp, CheckSquare, Truck } from 'lucide-react';

export function OtherServicesSection() {
  const otherServices = [
    {
      icon: Palette,
      title: 'Branding',
      description: 'Desarrollo completo de marca y estrategias de posicionamiento de productos.',
    },
    {
      icon: TrendingUp,
      title: 'Soporte de Marketing',
      description: 'Marketing digital y estrategias de entrada al mercado para tus productos.',
    },
    {
      icon: CheckSquare,
      title: 'Validación de Productos',
      description: 'Control de calidad y pruebas de productos antes del envío.',
    },
    {
      icon: Truck,
      title: 'Soporte Logístico',
      description: 'Gestión eficiente de envíos y distribución a nivel mundial.',
    },
  ];

  return (
    <section id="other-services" className="py-20 bg-[#0D3A4A]">
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
            Servicios Adicionales
          </h2>
          <p
            className="text-xl text-[#B0C4CC] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Soporte extendido para hacer crecer tu negocio más allá de las importaciones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {otherServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#0A2E3D] rounded-2xl p-8 border border-[#00C2FF]/20 hover:border-[#00C2FF]/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-12 h-12 text-[#3EC6D3] mb-4" />
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-[#B0C4CC]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}