import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function SolutionSection() {
  const solutions = [
    'Red de proveedores verificados y confiables en China',
    'Gestión y soporte integral de importación de principio a fin',
    'Mitigación de riesgos y garantía de calidad',
    'Precios competitivos y experiencia en negociación',
  ];

  return (
    <section className="py-20 bg-[#0D3A4A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Tu Socio de Confianza para Importaciones Seguras
            </h2>
            <p
              className="text-xl text-[#B0C4CC] mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Multiply Group elimina la complejidad y el riesgo de importar desde China,
              proporcionándote una solución completa que asegura el éxito.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-[#0A2E3D] p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle2 className="w-6 h-6 text-[#00C2FF] flex-shrink-0 mt-1" />
                <p className="text-white text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {solution}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}