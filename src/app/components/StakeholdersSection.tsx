import { motion } from 'motion/react';
import { 
  User, Briefcase, ShieldCheck, Truck, 
  LineChart, Megaphone, GraduationCap, Calculator,
  Users, Globe, Ship, Scale, Building2, Landmark 
} from 'lucide-react';

// --- DATOS DEL EQUIPO INTERNO ---
const internalTeam = [
  { role: "CEO / Director", desc: "Lidera la estrategia general, toma decisiones clave y coordina todas las áreas de la empresa.", icon: Briefcase },
  { role: "Especialista AGEMED", desc: "Gestiona regulaciones de productos médicos y asesoría en permisos.", icon: ShieldCheck },
  { role: "Especialista SENASAG", desc: "Maneja registros sanitarios de alimentos y productos agropecuarios.", icon: ShieldCheck },
  { role: "Especialista Aduana", desc: "Controla clasificación arancelaria y despacho aduanero.", icon: ShieldCheck },
  { role: "Área Logística (Importaciones)", desc: "Supervisa procesos de importación, logística y transporte internacional.", icon: Truck },
  { role: "Área Logística (Proveedores)", desc: "Valida proveedores, negocia condiciones y asegura calidad de productos.", icon: Globe },
  { role: "Área Comercial (B2B)", desc: "Gestiona clientes corporativos y expansión internacional.", icon: LineChart },
  { role: "Área Marca (Marketing)", desc: "Maneja imagen, branding y comunicación digital.", icon: Megaphone },
  { role: "Área Capacitación", desc: "Desarrolla contenido educativo y capacita equipos comerciales.", icon: GraduationCap },
  { role: "Área Financiera", desc: "Controla operaciones, contabilidad y finanzas de la empresa.", icon: Calculator },
];

// --- DATOS DE SOCIOS EXTERNOS ---
const externalPartners = [
  { role: "Clientes (Empresas)", desc: "Reciben asesoría integral para iniciar y proyectar negocios internacionales.", icon: Users },
  { role: "Proveedores Internacionales", desc: "Proporcionan productos confiables en China, India y otros países.", icon: Building2 },
  { role: "Agentes de Carga", desc: "Coordinan transporte aéreo o marítimo asegurando entregas seguras.", icon: Ship },
  { role: "Asesoría Legal Externa", desc: "Brindan soporte legal y regulatorio en transacciones internacionales.", icon: Scale },
  { role: "Entidades Regulatorias", desc: "AGEMED, SENASAG, Aduana, IBMETRO. Validan cumplimiento y permisos.", icon: ShieldCheck },
  { role: "Bancos / Inversionistas", desc: "Facilitan transacciones y soporte de inversión internacional.", icon: Landmark },
];

export function StakeholdersSection() {
  return (
    <section id="stakeholders" className="py-24 relative overflow-hidden" style={{ background: '#0a2d45' }}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO PRINCIPAL */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Equipo y Socios Estratégicos
          </h2>
          <p className="text-xl text-[#B0C4CC] max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Conoce a los expertos e instituciones que hacen posible transformar la complejidad del comercio internacional en operaciones seguras y rentables.
          </p>
        </motion.div>

        {/* ================= SECCIÓN: EQUIPO INTERNO ================= */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 border-b border-[#00C2FF]/20 pb-4">
            <Users className="w-8 h-8 text-[#00C2FF]" />
            <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestro Equipo Interno
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {internalTeam.map((member, index) => {
              const Icon = member.icon || User;
              return (
                <motion.div
                  key={index}
                  style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
                  className="rounded-2xl p-6 border border-[#00C2FF]/20 flex flex-col items-center text-center h-full hover:border-[#00C2FF]/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Placeholder de Foto */}
                  <div className="w-20 h-20 rounded-full bg-[#00C2FF]/10 border-2 border-[#00C2FF]/30 flex items-center justify-center mb-4 overflow-hidden">
                    {/* Cuando tengas las fotos reales, reemplaza este Icon por un <img src={member.foto} /> */}
                    <Icon className="w-8 h-8 text-[#00C2FF]" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {member.role}
                  </h4>
                  <p className="text-sm text-[#B0C4CC] flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {member.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= SECCIÓN: SOCIOS EXTERNOS ================= */}
        <div>
          <div className="flex items-center gap-4 mb-10 border-b border-[#3EC6D3]/20 pb-4">
            <Globe className="w-8 h-8 text-[#3EC6D3]" />
            <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Socios Estratégicos y Red Externa
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalPartners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <motion.div
                  key={index}
                  style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
                  className="rounded-2xl p-6 border border-[#3EC6D3]/20 flex flex-col h-full hover:border-[#3EC6D3]/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    {/* Placeholder de Logo */}
                    <div className="w-14 h-14 rounded-xl bg-[#3EC6D3]/10 flex shrink-0 items-center justify-center border border-[#3EC6D3]/30">
                       <Icon className="w-6 h-6 text-[#3EC6D3]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {partner.role}
                      </h4>
                    </div>
                  </div>
                  <p className="text-[#B0C4CC] text-sm flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
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