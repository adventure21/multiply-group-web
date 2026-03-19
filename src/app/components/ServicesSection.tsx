import { motion } from 'motion/react';
import { Ship, Search, Users, Package } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Ship,
      title: 'Servicios de Importación',
      description:
        'Soluciones completas de importación desde China con despacho aduanero y gestión logística.',
    },
    {
      icon: Search,
      title: 'Búsqueda de Proveedores',
      description:
        'Encontramos y verificamos los mejores proveedores en China para tus necesidades específicas.',
    },
    {
      icon: Users,
      title: 'Consultoría Empresarial',
      description:
        'Orientación estratégica sobre entrada al mercado, selección de productos y desarrollo empresarial.',
    },
    {
      icon: Package,
      title: 'Gestión Integral de Importación',
      description:
        'Gestión completa de tus operaciones de importación desde el pedido hasta la entrega.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0A2E3D]">
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
            Nuestros Servicios
          </h2>
          <p
            className="text-xl text-[#B0C4CC] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Soluciones integrales para hacer exitoso tu negocio de importación
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#0D3A4A] rounded-2xl p-8 hover:shadow-xl hover:shadow-[#00C2FF]/20 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="bg-gradient-to-br from-[#00C2FF]/20 to-[#3EC6D3]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-[#00C2FF]/30 group-hover:to-[#3EC6D3]/30 transition-all">
                  <Icon className="w-8 h-8 text-[#00C2FF]" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-4"
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