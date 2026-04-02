import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Martínez',
      company: 'Global Imports LLC',
      text: 'Multiply Group transformó nuestro negocio de importación. Su experiencia y red de proveedores nos ayudó a reducir costos en un 30% mientras mejoraba la calidad del producto. ¡Altamente recomendado!',
      rating: 5,
    },
    {
      name: 'Miguel Chen',
      company: 'TechGear Distribution',
      text: 'Trabajar con Multiply Group fue un cambio total. Se encargaron de todo, desde la verificación de proveedores hasta el despacho aduanero. Nuestro proceso de importación nunca ha sido tan fluido.',
      rating: 5,
    },
    {
      name: 'Amanda Rodríguez',
      company: 'Lifestyle Brands Co.',
      text: 'El equipo de Multiply Group es excepcional. Su atención al detalle y compromiso con nuestro éxito hizo que importar desde China fuera libre de estrés y rentable.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 scroll-mt-20" style={{ background: '#0B283C' }}>
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
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p
            className="text-xl text-[#B0C4CC] max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Historias de éxito de negocios que hemos ayudado a crecer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-8 relative hover:shadow-xl hover:shadow-[#00C2FF]/10 transition-all duration-300"
              style={{ 
                background: 'linear-gradient(135deg, #0C314D 0%, #072136 100%)',
                border: '1px solid rgba(0, 194, 255, 0.1)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[#00C2FF]/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00C2FF] text-[#00C2FF]" />
                ))}
              </div>

              <p
                className="text-[#B0C4CC] mb-6 text-lg leading-relaxed z-10 relative"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                "{testimonial.text}"
              </p>

              <div className="border-t border-[#00C2FF]/20 pt-4">
                <p
                  className="text-white font-bold mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-[#B0C4CC] text-sm"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}