import { motion } from 'motion/react';
import { Target, Eye, Globe, Users, TrendingUp, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20" style={{ background: '#0a2d45' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Nosotros
          </h2>
          <p className="text-2xl font-semibold text-[#00C2FF] max-w-2xl mx-auto mb-6 leading-snug" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Conectamos negocios globales con más de 20 años de experiencia.
          </p>
          <p className="text-lg text-[#B0C4CC] max-w-3xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Asesoramos en importaciones, exportaciones y representación comercial internacional,
            gestionando cada etapa del proceso con eficiencia, seguridad y rentabilidad.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { number: '20+',  label: 'Años de experiencia' },
              { number: '3',    label: 'Mercados activos' },
              { number: '100%', label: 'Compromiso con el cliente' },
            ].map(({ number, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl font-bold text-[#00C2FF]" style={{ fontFamily: 'Poppins, sans-serif' }}>{number}</p>
                <p className="text-sm text-[#B0C4CC] mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── QUIÉNES SOMOS — Grid 2×2 ── */}
        <motion.p
          className="text-xs font-semibold tracking-widest text-[#00C2FF]/60 uppercase mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Quiénes somos
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {[
            {
              icon: <Globe className="w-8 h-8 text-[#00C2FF]" />,
              accent: '#00C2FF',
              title: 'Trayectoria Global',
              body: 'Contamos con más de 20 años de trayectoria en negocios internacionales, facilitando operaciones entre empresas y conectando oportunidades comerciales en distintos mercados a nivel global.',
              delay: 0.1,
            },
            {
              icon: <Users className="w-8 h-8 text-[#3EC6D3]" />,
              accent: '#3EC6D3',
              title: 'Conexión Cultural',
              body: 'Nuestra vasta experiencia nos ha permitido comprender que, para un proceso comercial exitoso, es fundamental entender cómo piensan, negocian y toman decisiones ambas partes en cada mercado.',
              delay: 0.2,
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-[#00C2FF]" />,
              accent: '#00C2FF',
              title: 'Relaciones de Éxito',
              body: 'Hemos logrado establecer relaciones comerciales a largo plazo, generando beneficios sostenibles para ambas partes y contribuyendo al crecimiento sólido de sus operaciones.',
              delay: 0.3,
            },
            {
              icon: <Award className="w-8 h-8 text-[#3EC6D3]" />,
              accent: '#3EC6D3',
              title: 'Nuestra Experiencia',
              body: 'Acompañamos a empresas en todo el proceso de importación, exportación y representación comercial, integrando estrategia, operación y ejecución para lograr resultados eficientes y seguros.',
              delay: 0.4,
            },
          ].map(({ icon, accent, title, body, delay }) => (
            <motion.div
              key={title}
              style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)', borderColor: `${accent}33` }}
              className="rounded-2xl p-8 border flex gap-6 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay }}
              whileHover={{ y: -6 }}
            >
              <div className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: `${accent}18` }}>
                {icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
                <p className="text-[#B0C4CC] text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── MISIÓN & VISIÓN — 2 columnas destacadas ── */}
        <motion.p
          className="text-xs font-semibold tracking-widest text-[#00C2FF]/60 uppercase mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Misión y Visión
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Misión */}
          <motion.div
            className="rounded-2xl p-10 border border-[#00C2FF]/25 flex flex-col relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6 }}
          >
            {/* Acento decorativo */}
            <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: '#00C2FF' }} />

            <div className="bg-[#00C2FF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#00C2FF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestra Misión
            </h3>
            <p className="text-[#B0C4CC] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Impulsar el crecimiento de empresas conectándose con oportunidades globales, brindando
              soluciones integrales en comercio internacional de manera segura, rentable y estructurada.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            className="rounded-2xl p-10 border border-[#3EC6D3]/25 flex flex-col relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
          >
            {/* Acento decorativo */}
            <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ background: '#3EC6D3' }} />

            <div className="bg-[#3EC6D3]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-[#3EC6D3]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestra Visión
            </h3>
            <p className="text-[#B0C4CC] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ser el socio estratégico de referencia para empresas que buscan expandirse internacionalmente,
              facilitando su posicionamiento en nuevos mercados a través de importación, exportación y representación.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}