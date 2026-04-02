import { motion } from 'motion/react';
import { Target, Eye, Globe, Users, TrendingUp, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="pt-20 pb-32 sm:py-24" style={{ background: '#072136' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Encabezado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Nosotros
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-[#00C2FF] max-w-2xl mx-auto mb-6 px-2 sm:px-0 leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Conectamos negocios globales con más de 20 años de experiencia.
          </p>
          <p className="text-base sm:text-lg text-[#B0C4CC] max-w-3xl mx-auto mb-10 px-4 sm:px-0 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Asesoramos en importaciones, exportaciones y representación comercial internacional,
            gestionando cada etapa del proceso con eficiencia, seguridad y rentabilidad.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
            {[
              { number: '20+',  label: 'Años de experiencia' },
              { number: '3',    label: 'Mercados activos' },
              { number: '100%', label: 'Compromiso' },
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-[#00C2FF]" style={{ fontFamily: 'Poppins, sans-serif' }}>{number}</p>
                <p className="text-xs sm:text-sm text-[#B0C4CC] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── QUIÉNES SOMOS ── */}
        <motion.p
          className="text-xs font-semibold tracking-widest text-[#00C2FF]/60 uppercase mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Quiénes somos
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16">
          {[
            {
              icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-[#00C2FF]" />,
              accent: '#00C2FF',
              title: 'Trayectoria Global',
              body: 'Más de 20 años facilitando operaciones y conectando oportunidades comerciales en distintos mercados globales.',
              delay: 0.1,
            },
            {
              icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#3EC6D3]" />,
              accent: '#3EC6D3',
              title: 'Conexión Cultural',
              body: 'Entendemos cómo piensan, negocian y toman decisiones ambas partes en cada mercado para un proceso exitoso.',
              delay: 0.2,
            },
            {
              icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#00C2FF]" />,
              accent: '#00C2FF',
              title: 'Relaciones de Éxito',
              body: 'Relaciones comerciales a largo plazo generando beneficios sostenibles y crecimiento sólido para ambas partes.',
              delay: 0.3,
            },
            {
              icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#3EC6D3]" />,
              accent: '#3EC6D3',
              title: 'Nuestra Experiencia',
              body: 'Acompañamos en importación, exportación y representación comercial con estrategia, operación y ejecución.',
              delay: 0.4,
            },
          ].map(({ icon, accent, title, body, delay }) => (
            <motion.div
              key={title}
              // AQUÍ ESTÁ EL CAMBIO EN LAS CAJAS DE QUIÉNES SOMOS
              style={{
                background: 'linear-gradient(135deg, #0C314D 0%, #072136 100%)',
                borderColor: `${accent}33`,
              }}
              className="rounded-xl sm:rounded-2xl p-5 sm:p-8 border flex flex-row sm:flex-col items-start gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay }}
              whileHover={{ y: -4 }}
            >
              <div
                className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mt-1 sm:mt-0"
                style={{ background: `${accent}18` }}
              >
                {icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p className="text-[#B0C4CC] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── MISIÓN & VISIÓN ── */}
        <motion.p
          className="text-xs font-semibold tracking-widest text-[#00C2FF]/60 uppercase mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Misión y Visión
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Misión */}
          <motion.div
            className="rounded-2xl p-5 sm:p-8 border border-[#00C2FF]/25 flex flex-col relative overflow-hidden"
            // AQUÍ ESTÁ EL CAMBIO EN LA CAJA DE MISIÓN
            style={{ background: 'linear-gradient(135deg, #0C314D 0%, #072136 100%)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: '#00C2FF' }} />
            
            <div className="flex items-center gap-4 mb-3 sm:mb-4">
              <div className="bg-[#00C2FF]/10 w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#00C2FF]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white m-0 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nuestra Misión
              </h3>
            </div>

            <p className="text-[#B0C4CC] text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Impulsar el crecimiento de empresas conectándose con oportunidades globales, brindando
              soluciones integrales en comercio internacional de manera segura, rentable y estructurada.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            className="rounded-2xl p-5 sm:p-8 border border-[#3EC6D3]/25 flex flex-col relative overflow-hidden"
            // AQUÍ ESTÁ EL CAMBIO EN LA CAJA DE VISIÓN
            style={{ background: 'linear-gradient(135deg, #0C314D 0%, #072136 100%)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: '#3EC6D3' }} />
            
            <div className="flex items-center gap-4 mb-3 sm:mb-4">
              <div className="bg-[#3EC6D3]/10 w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-[#3EC6D3]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white m-0 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Nuestra Visión
              </h3>
            </div>

            <p className="text-[#B0C4CC] text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ser el socio estratégico de referencia para empresas que buscan expandirse internacionalmente,
              facilitando su posicionamiento en nuevos mercados a través de importación, exportación y representación.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}