import { motion } from 'motion/react';
import {
  Briefcase, ShieldCheck, Globe, Truck,
  LineChart, Megaphone, Calculator, GraduationCap,
  Users, Building2, Ship, Scale, Landmark
} from 'lucide-react';

// --- EQUIPO INTERNO REESTRUCTURADO ---
const internalTeam = [
  {
    area: '1. Dirección Estratégica',
    icon: Briefcase,
    color: '#00C2FF',
    items: ['CEO / Dirección General', 'Visión, alianzas y expansión'],
  },
  {
    area: '2. Regulación Sanitaria y Legal',
    icon: ShieldCheck,
    color: '#3EC6D3',
    items: ['Registros sanitarios (AGEMED, SENASAG)', 'Permisos de importación', 'Normativa internacional'],
  },
  {
    area: '3. Comercio Internacional',
    icon: Globe,
    color: '#00C2FF',
    items: ['Importaciones y exportaciones', 'Gestión de proveedores internacionales', 'Negociación y contratos'],
  },
  {
    area: '4. Logística & Aduanas',
    icon: Truck,
    color: '#3EC6D3',
    items: ['Transporte aéreo y marítimo', 'Nacionalización de mercancía', 'Clasificación arancelaria'],
  },
  {
    area: '5. Desarrollo Comercial (B2B)',
    icon: LineChart,
    color: '#00C2FF',
    items: ['Gestión de clientes corporativos', 'Expansión internacional', 'Ruedas de negocio'],
  },
  {
    area: '6. Marca & Marketing',
    icon: Megaphone,
    color: '#3EC6D3',
    items: ['Imagen y branding', 'Comunicación digital', 'Contenido y redes sociales'],
  },
  {
    area: '7. Finanzas & Administración',
    icon: Calculator,
    color: '#00C2FF',
    items: ['Control de costos', 'Pagos internacionales', 'Control financiero'],
  },
  {
    area: '8. Educación & Capacitación',
    icon: GraduationCap,
    color: '#3EC6D3',
    items: ['Cursos y talleres', 'Formación empresarial', 'Contenido educativo'],
  },
];

// --- SOCIOS EXTERNOS ---
const externalPartners = [
  { role: 'Clientes (Empresas)', desc: 'Reciben asesoría integral para iniciar y proyectar negocios internacionales.', icon: Users, color: '#00C2FF' },
  { role: 'Proveedores Internacionales', desc: 'Proporcionan productos confiables en China, India y otros países.', icon: Building2, color: '#3EC6D3' },
  { role: 'Agentes de Carga', desc: 'Coordinan transporte aéreo o marítimo asegurando entregas seguras.', icon: Ship, color: '#00C2FF' },
  { role: 'Asesoría Legal Externa', desc: 'Brindan soporte legal y regulatorio en transacciones internacionales.', icon: Scale, color: '#3EC6D3' },
  { role: 'Entidades Regulatorias', desc: 'AGEMED, SENASAG, Aduana, IBMETRO. Validan cumplimiento y permisos.', icon: ShieldCheck, color: '#00C2FF' },
  { role: 'Bancos / Inversionistas', desc: 'Facilitan transacciones y soporte de inversión internacional.', icon: Landmark, color: '#3EC6D3' },
];

export function StakeholdersSection() {
  return (
    <section id="stakeholders" className="py-24 relative overflow-hidden" style={{ background: '#0a2d45' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ENCABEZADO */}
        <motion.div
          className="text-center mb-20"
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
            Nuestra organización
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Estructura Corporativa
          </h2>
          <p
            className="text-base sm:text-xl text-[#B0C4CC] max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Conoce las áreas especializadas e instituciones que hacen posible transformar la complejidad del comercio internacional en operaciones seguras y rentables.
          </p>
        </motion.div>

        {/* EQUIPO INTERNO */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10 border-b border-[#00C2FF]/20 pb-4">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(0,194,255,0.15)', border: '1px solid rgba(0,194,255,0.3)' }}
            >
              <Users className="w-5 h-5 text-[#00C2FF]" />
            </div>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Nuestras Áreas Internas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {internalTeam.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  className="rounded-2xl p-5 sm:p-6 flex flex-col h-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)',
                    border: `1px solid ${area.color}25`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  whileHover={{ y: -6, borderColor: area.color + '66' }}
                >
                  {/* Ícono */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${area.color}15`,
                      border: `1px solid ${area.color}35`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: area.color }} />
                  </div>

                  {/* Título del área */}
                  <h4
                    className="text-base font-bold text-white mb-3 leading-tight"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {area.area}
                  </h4>

                  {/* Items */}
                  <ul className="space-y-1.5 flex-grow">
                    {area.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm"
                        style={{ color: '#B0C4CC', fontFamily: 'Inter, sans-serif' }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: area.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SOCIOS EXTERNOS */}
        <div>
          <div className="flex items-center gap-3 mb-10 border-b border-[#3EC6D3]/20 pb-4">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(62,198,211,0.15)', border: '1px solid rgba(62,198,211,0.3)' }}
            >
              <Globe className="w-5 h-5 text-[#3EC6D3]" />
            </div>
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Socios Estratégicos y Red Externa
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {externalPartners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <motion.div
                  key={index}
                  className="rounded-2xl p-5 sm:p-6 flex flex-col h-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)',
                    border: `1px solid ${partner.color}25`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, borderColor: partner.color + '66' }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex shrink-0 items-center justify-center"
                      style={{
                        background: `${partner.color}15`,
                        border: `1px solid ${partner.color}35`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: partner.color }} />
                    </div>
                    <h4
                      className="text-base sm:text-lg font-bold text-white leading-tight pt-1"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {partner.role}
                    </h4>
                  </div>
                  <p
                    className="text-xs sm:text-sm text-[#B0C4CC] flex-grow"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {partner.desc}
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