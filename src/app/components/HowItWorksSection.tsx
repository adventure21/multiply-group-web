import { motion } from 'motion/react';
import { Phone, Search, Handshake, Ship, PackageCheck, Lightbulb, FileCheck2 } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Phone,
      title: 'Contacto',
      description: 'Contacta a nuestro equipo y comparte tus necesidades de importación',
    },
    {
      icon: Lightbulb,
      title: 'Análisis',
      description: 'Analizamos tu producto y definimos la mejor estrategia de negocio',
    },
    {
      icon: Search,
      title: 'Búsqueda',
      description: 'Encontramos proveedores confiables y verificados para tus productos',
    },
    {
      icon: Handshake,
      title: 'Negociación',
      description: 'Negociamos las mejores condiciones, precios y contratos internacionales',
    },
    {
      icon: FileCheck2,
      title: 'Regulación',
      description: 'Gestionamos permisos, registros sanitarios y autorizaciones legales',
    },
    {
      icon: Ship,
      title: 'Importación',
      description: 'Coordinamos logística internacional, aduanas y seguimiento de carga',
    },
    {
      icon: PackageCheck,
      title: 'Entrega',
      description: 'Tu producto nacionalizado y entregado listo para generar ingresos',
    },
  ];

  return (
    // CAMBIO APLICADO: Fondo actualizado al nuevo tono de la imagen (#0B283C)
    <section id="how-it-works" className="py-20" style={{ background: '#0B283C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: '#00C2FF',
              background: 'rgba(0,194,255,0.1)',
              border: '1px solid rgba(0,194,255,0.2)',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            El proceso
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Cómo Funciona
          </h2>
          <p
            className="text-base sm:text-xl text-[#B0C4CC] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            7 pasos para importar de forma segura, rentable y sin complicaciones
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">

          {/* Línea conectora — solo visible en lg con 7 columnas */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00C2FF]/40 to-transparent" />

          {/* Grid: 2 col móvil, 4 col tablet, 7 col desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              // Alternar color del acento
              const accent = index % 2 === 0 ? '#00C2FF' : '#3EC6D3';

              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  {/* Círculo ícono */}
                  <div
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-4 z-10 transition-transform duration-300 hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${accent}, ${accent}99)`,
                      boxShadow: `0 0 20px ${accent}55`,
                    }}
                  >
                    <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-white" />

                    {/* Número */}
                    <div
                      className="absolute -top-1.5 -right-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-bold text-xs border-2 text-white"
                      style={{
                        // CAMBIO APLICADO: Fondo actualizado al nuevo tono para hacer match con la sección
                        background: '#0B283C',
                        borderColor: accent,
                        color: accent,
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Texto */}
                  <h3
                    className="text-sm sm:text-base font-bold text-white mb-1.5 leading-tight"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ color: '#B0C4CC', fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}