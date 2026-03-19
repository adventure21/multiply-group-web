import { motion } from 'motion/react';
import { Phone, Search, Handshake, Ship, PackageCheck } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Phone,
      title: 'Contacto',
      description: 'Contacta a nuestro equipo y comparte tus necesidades de importación',
    },
    {
      icon: Search,
      title: 'Búsqueda de Proveedores',
      description: 'Encontramos los mejores proveedores para tus productos',
    },
    {
      icon: Handshake,
      title: 'Negociación',
      description: 'Negociamos las mejores condiciones y precios',
    },
    {
      icon: Ship,
      title: 'Importación',
      description: 'Gestionamos todo el proceso de importación',
    },
    {
      icon: PackageCheck,
      title: 'Entrega',
      description: 'Productos entregados en tu ubicación',
    },
  ];

  return (
    <section className="py-20 bg-[#0A2E3D]">
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
            Cómo Funciona
          </h2>
          <p
            className="text-xl text-[#B0C4CC] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Un proceso simple de 5 pasos para comenzar a importar de forma rentable
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#00C2FF]/30 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative bg-gradient-to-br from-[#00C2FF] to-[#3EC6D3] w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#00C2FF]/50 z-10">
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 bg-[#0D3A4A] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-[#00C2FF]">
                        {index + 1}
                      </div>
                    </div>
                    <h3
                      className="text-xl font-bold text-white mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#B0C4CC] text-sm"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}