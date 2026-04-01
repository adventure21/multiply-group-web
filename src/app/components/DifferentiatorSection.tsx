import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    badge: 'Lo Que Nos Hace Diferentes',
    badgeColor: '#00C2FF',
    title: <>Expandimos tus oportunidades{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#3EC6D3]">de negocio a nivel global.</span></>,
    description: 'Tu socio estratégico en negocios internacionales, brindando soporte completo para que tu empresa llegue a nuevos mercados.',
  },
  {
    badge: 'Nuestra Diferencia',
    badgeColor: '#3EC6D3',
    title: <>No solo importamos,{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] to-[#3EC6D3]">creamos oportunidades de negocio.</span></>,
    description: 'Nuestro compromiso va más allá de las transacciones. Construimos alianzas que transforman tu negocio a través de soluciones estratégicas de importación.',
  },
];

export function DifferentiatorSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const go = (n: number) => {
    setDirection(n > current ? 1 : -1);
    setCurrent((n + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section className="py-32 bg-gradient-to-br from-[#0D3A4A] via-[#0A2E3D] to-[#0D3A4A] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00C2FF]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3EC6D3]/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="relative overflow-hidden min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              className="text-center"
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
                style={{ background: `${slide.badgeColor}18` }}
              >
                <Sparkles className="w-5 h-5" style={{ color: slide.badgeColor }} />
                <span
                  className="font-semibold text-sm sm:text-base"
                  style={{ fontFamily: 'Inter, sans-serif', color: slide.badgeColor }}
                >
                  {slide.badge}
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {slide.title}
              </h2>

              <p
                className="text-base sm:text-lg md:text-xl text-[#B0C4CC] max-w-3xl mx-auto"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => go(current - 1)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.3)', color: '#00C2FF' }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: i === current ? '#00C2FF' : 'rgba(0,194,255,0.3)',
                  transform: i === current ? 'scale(1.4)' : 'scale(1)',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => go(current + 1)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(0,194,255,0.1)', border: '1px solid rgba(0,194,255,0.3)', color: '#00C2FF' }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}