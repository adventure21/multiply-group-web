import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import {
  Search,
  Handshake,
  PackageCheck,
  Truck,
  ChevronDown,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  FileCheck2,
  Building2,
  Landmark,
  BadgeCheck,
  ClipboardList,
  BarChart3,
  Briefcase,
  Globe2,
  Ship,
  Plane,
  GraduationCap,
  Users,
  CalendarDays,
  MapPin,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceGroup {
  label: string;
  items: string[];
}

interface Service {
  id: number;
  icon: LucideIcon;
  step: string;
  title: string;
  subtitle: string;
  lead: string;
  items?: string[];
  groups?: ServiceGroup[];
  cta?: string;
  color: string;
}

interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  services: Service[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const importacionServices: Service[] = [
  {
    id: 1,
    icon: Lightbulb,
    step: 'Paso 1',
    title: 'Análisis de Producto',
    subtitle: 'Contacto y Asesoría Personalizada',
    lead: 'Analizamos tu necesidad y definimos la mejor estrategia del negocio.',
    items: [
      'Evaluamos el producto que deseas importar o exportar',
      'Definimos presupuesto, cantidades y mercado objetivo',
      'Te guiamos sobre viabilidad y rentabilidad',
    ],
    cta: '💡 Nuestro objetivo es que tomes decisiones seguras desde el inicio.',
    color: '#00C2FF',
  },
  {
    id: 2,
    icon: Search,
    step: 'Paso 2',
    title: 'Búsqueda de Proveedores y Clientes',
    subtitle: 'Validación de socios comerciales',
    lead: 'Encontramos fabricantes confiables y verificados en China u otros países.',
    items: [
      'Búsqueda directa en fábricas, proveedores o compradores certificados',
      'Validación legal y comercial del cliente',
      'Comparación de precios, calidad y condiciones',
      'Solicitud de muestras (si aplica)',
    ],
    cta: '🛡️ Evita fraudes y trabaja solo con proveedores seguros.',
    color: '#3EC6D3',
  },
  {
    id: 3,
    icon: Handshake,
    step: 'Paso 3',
    title: 'Negociación',
    subtitle: 'Negociación Profesional',
    lead: 'Asesoramiento en tus negociaciones en base a esquema legal para obtener las mejores condiciones y garantizar tus inversiones.',
    items: [
      'Elaboración de contratos internacionales entre partes',
      'Mejores precios de fábrica',
      'Condiciones de pago seguras',
      'Tiempos de producción optimizados',
      'Desarrollo de marca propia (OEM / Private Label)',
    ],
    cta: '📈 Maximizamos tu rentabilidad en cada negociación.',
    color: '#00C2FF',
  },
  {
    id: 4,
    icon: FileCheck2,
    step: 'Paso 4',
    title: 'Regulación Especial',
    subtitle: 'Permisos, registros y autorizaciones',
    lead: 'Todos los permisos, registros y autorizaciones obligatorias para importar o exportar productos controlados por el Estado.',
    groups: [
      {
        label: '🔹 Incluye',
        items: [
          'Registros sanitarios (medicamentos, alimentos, cosméticos)',
          'Permisos de importación especiales',
          'Certificaciones técnicas y de calidad',
          'Normativas del país de destino',
          'Restricciones legales de productos sensibles',
        ],
      },
      {
        label: '🏛️ Entidades reguladoras',
        items: [
          'AGEMED → medicamentos, equipos médicos, cosméticos',
          'SENASAG → alimentos, bebidas, productos agropecuarios',
          'SENAVEX → registro importador/exportador, certificados de origen',
          'Aduana Nacional → clasificación arancelaria y despacho',
          'IBMETRO → certificaciones técnicas',
          'Ministerio de Salud → autorizaciones especiales',
        ],
      },
    ],
    color: '#3EC6D3',
  },
  {
    id: 5,
    icon: PackageCheck,
    step: 'Paso 5',
    title: 'Importación',
    subtitle: 'Gestión de Importación y Exportación',
    lead: 'Nos encargamos de todo el proceso para traer tus productos o llevarlos al mundo de forma segura, rentable y sin complicaciones.',
    groups: [
      {
        label: '📦 Importación',
        items: [
          'Coordinación de producción y control de calidad en origen',
          'Logística internacional (aérea o marítima)',
          'Asesoría en regulaciones y registros sanitarios',
        ],
      },
      {
        label: '🌍 Exportación — preparación',
        items: [
          'Adecuación a normativas internacionales',
          'Etiquetado y requisitos del país destino',
          'Factura comercial, lista de empaque, certificados de origen',
        ],
      },
      {
        label: '🚢 Exportación — logística',
        items: [
          'Coordinación de transporte aéreo o marítimo',
          'Gestión de agentes de carga',
          'Optimización de costos logísticos',
          'Requisitos del país de destino y normas sanitarias',
        ],
      },
      {
        label: '⭐ Conexión con compradores (Opcional)',
        items: [
          'Búsqueda de clientes en el exterior',
          'Ruedas de negocio',
          'Contacto con distribuidores',
        ],
      },
    ],
    cta: '📦 Importas o exportas sin complicaciones, nosotros hacemos el trabajo pesado.',
    color: '#00C2FF',
  },
  {
    id: 6,
    icon: Truck,
    step: 'Paso 6',
    title: 'Entrega',
    subtitle: 'Entrega Final',
    lead: 'Recibes tu producto listo para vender.',
    items: [
      'Despacho aduanero',
      'Nacionalización de la mercancía',
      'Entrega en tu ciudad o almacén',
      'Seguimiento post-importación',
    ],
    cta: '🎯 Tu producto en tus manos, listo para generar ingresos.',
    color: '#3EC6D3',
  },
];

const consultoriaServices: Service[] = [
  {
    id: 10,
    icon: Landmark,
    step: 'Servicio 1',
    title: 'Constitución y Estructuración Empresarial',
    subtitle: 'Creación legal de tu empresa',
    lead: 'Creación de empresas para bolivianos y extranjeros con la estructura legal óptima para operar en comercio internacional.',
    items: [
      'Asesoría en tipo societario (SRL, SA, unipersonal, sucursal extranjera)',
      'Apertura de NIT y registros tributarios',
      'Licencias de funcionamiento',
      'Estructuración legal para comercio internacional',
    ],
    color: '#00C2FF',
  },
  {
    id: 11,
    icon: BadgeCheck,
    step: 'Servicio 2',
    title: 'Propiedad Intelectual',
    subtitle: 'Registro de marcas — SENAPI',
    lead: 'Protegemos tu marca y activos intelectuales para que operes con seguridad en el mercado nacional e internacional.',
    items: [
      'Registro de marca denominativa, figurativa y mixta',
      'Búsqueda de antecedentes marcarios',
      'Defensa y oposiciones de marca',
      'Desarrollo estratégico de marca (branding comercial)',
      'Protección de productos importados',
    ],
    color: '#3EC6D3',
  },
  {
    id: 12,
    icon: ClipboardList,
    step: 'Servicio 3',
    title: 'Consultoría Regulatoria',
    subtitle: 'Permisos y habilitaciones ante entidades del Estado',
    lead: 'Gestionamos todos los trámites regulatorios ante las principales entidades bolivianas para que operes con total cumplimiento legal.',
    groups: [
      { label: 'SENASAG', items: ['Registro sanitario para alimentos, bebidas y productos agropecuarios', 'Permisos de importación'] },
      { label: 'AGEMED', items: ['Registro sanitario de medicamentos, dispositivos médicos y cosméticos', 'Habilitación de empresas importadoras'] },
      { label: 'SENAVEX', items: ['Registro como importador/exportador', 'Certificados de origen'] },
      { label: 'ADUANA NACIONAL', items: ['Clasificación arancelaria', 'Despacho aduanero', 'Optimización tributaria en importaciones'] },
      { label: 'IBMETRO', items: ['Certificaciones técnicas y de calidad'] },
      { label: 'Ministerio de Salud', items: ['Autorizaciones especiales para productos sensibles'] },
      { label: 'Otras regulaciones específicas', items: ['Sustancias controladas', 'Productos químicos', 'Equipos especiales'] },
    ],
    color: '#00C2FF',
  },
  {
    id: 13,
    icon: BarChart3,
    step: 'Servicio 4',
    title: 'Estrategia Comercial',
    subtitle: 'Rentabilidad desde la primera operación',
    lead: 'Analizamos y estructuramos tu negocio de importación para que no solo compres productos, sino que generes utilidad real desde la primera operación.',
    items: [
      'Definimos el modelo de negocio más rentable según el producto y mercado',
      'Calculamos costos reales de importación (compra, logística, impuestos)',
      'Establecemos precios de venta con margen de ganancia competitivo',
      'Identificamos canales de distribución efectivos (mayoristas, retail, online)',
      'Desarrollamos un portafolio de productos con potencial comercial',
    ],
    color: '#3EC6D3',
  },
];

const logisticaServices: Service[] = [
  {
    id: 20,
    icon: Ship,
    step: 'Servicio 1',
    title: 'Soporte Logístico Internacional',
    subtitle: 'De la compra a la entrega sin contratiempos',
    lead: 'Gestionamos el proceso completo desde que se confirma la compra con el proveedor hasta que la carga llega a destino.',
    items: [
      'Coordinación directa con proveedores y agentes de carga internacionales',
      'Organización de embarques según condiciones reales (FOB, CIF, EXW)',
      'Elección estratégica del transporte (aéreo o marítimo) según urgencia y volumen',
      'Seguimiento continuo de la carga durante todo el trayecto',
      'Control de tiempos de producción y despacho desde origen',
      'Optimización de costos logísticos para mantener tu margen de ganancia',
      'Asesoría en seguros de carga para proteger la mercancía ante imprevistos',
    ],
    color: '#00C2FF',
  },
  {
    id: 21,
    icon: PackageCheck,
    step: 'Servicio 2',
    title: 'Gestión de Importación',
    subtitle: 'Proceso logístico y documental completo',
    lead: 'Nos encargamos de todo el proceso logístico y documental para que importes sin complicaciones.',
    items: [
      'Coordinación de producción',
      'Control de calidad en origen',
      'Gestión de exportación desde la fábrica hasta origen',
      'Logística internacional',
      'Asesoría en regulaciones',
    ],
    cta: '📦 Importas sin complicaciones, nosotros hacemos el trabajo pesado.',
    color: '#3EC6D3',
  },
  {
    id: 22,
    icon: Globe2,
    step: 'Servicio 3',
    title: 'Gestión de Exportación',
    subtitle: 'Bolivia al mundo',
    lead: 'Llevamos tus productos desde Bolivia hacia mercados internacionales de forma segura, eficiente y rentable.',
    groups: [
      { label: '📦 Preparación del producto', items: ['Adecuación a normativas internacionales', 'Etiquetado y requisitos del país destino'] },
      { label: '📄 Gestión documental', items: ['Factura comercial', 'Lista de empaque', 'Certificados de origen', 'Documentación aduanera'] },
      { label: '🏭 Coordinación con producción', items: ['Planificación de pedidos', 'Control de tiempos de entrega', 'Validación de capacidad productiva'] },
      { label: '✅ Control de calidad', items: ['Verificación del producto', 'Cumplimiento de estándares internacionales'] },
      { label: '🚢 Logística internacional', items: ['Coordinación de transporte aéreo o marítimo', 'Gestión de agentes de carga', 'Optimización de costos logísticos'] },
      { label: '📋 Asesoría regulatoria', items: ['Requisitos del país de destino', 'Normas sanitarias o técnicas', 'Restricciones de importación en destino'] },
      { label: '⭐ Conexión con compradores internacionales', items: ['Búsqueda de clientes en el exterior', 'Ruedas de negocio', 'Contacto con distribuidores'] },
    ],
    cta: '🎯 Llegada puntual, sin riesgos y con control total de la inversión.',
    color: '#00C2FF',
  },
  {
    id: 23,
    icon: Plane,
    step: 'Servicio 4',
    title: 'Transporte Internacional',
    subtitle: 'Aéreo y marítimo con seguimiento total',
    lead: 'Coordinamos el envío de tus productos de forma segura y eficiente, asegurando que lleguen a tiempo, sin daños y optimizando costos.',
    items: [
      'Selección del transporte más conveniente según tu producto y urgencia',
      'Coordinación con agentes de carga confiables',
      'Seguimiento completo del embarque hasta su destino final',
      'Asesoría en seguros y documentación necesaria',
    ],
    color: '#3EC6D3',
  },
];

const expansionServices: Service[] = [
  {
    id: 30,
    icon: TrendingUp,
    step: 'Servicio 1',
    title: 'Desarrollo de Negocios',
    subtitle: 'Expansión comercial internacional',
    lead: 'Desarrollamos tu negocio en mercados internacionales con estrategias B2B y conexiones directas con clientes y socios globales.',
    items: [
      'Búsqueda de clientes internacionales (B2B)',
      'Representación de marcas extranjeras',
      'Expansión comercial a nuevos mercados',
      'Ruedas de negocio y misiones comerciales (China, India, Perú, etc.)',
    ],
    groups: [
      {
        label: '👥 Área Comercial',
        items: [
          'Ejecutivo de ventas B2B',
          'Especialista en expansión internacional',
          'Gestor de clientes corporativos',
        ],
      },
    ],
    color: '#00C2FF',
  },
  {
    id: 31,
    icon: Landmark,
    step: 'Servicio 2',
    title: 'Empresas Extranjeras en Bolivia',
    subtitle: 'Establecimiento legal y operativo',
    lead: 'Ayudamos a tu empresa a establecerse y operar legalmente en Bolivia, cumpliendo todos los requisitos y regulaciones.',
    items: [
      'Constitución legal y obtención de NIT',
      'Licencias y habilitación para importar y comercializar',
      'Asesoría regulatoria en salud, alimentos e industria',
      'Estructuración operativa y comercial para iniciar operaciones',
    ],
    color: '#3EC6D3',
  },
];

const capacitacionServices: Service[] = [
  {
    id: 40,
    icon: GraduationCap,
    step: 'Servicio 1',
    title: 'Formación Empresarial',
    subtitle: 'Charlas y capacitaciones especializadas',
    lead: 'Ofrecemos charlas informativas y asesorías para que tu empresa y equipo estén preparados en procesos de importación, exportación y regulación.',
    items: [
      'Información actualizada sobre normativas y requisitos regulatorios',
      'Charlas informativas de organismos como AGEMED',
      'Orientación práctica para optimizar tu negocio y operaciones',
    ],
    color: '#00C2FF',
  },
  {
    id: 41,
    icon: Users,
    step: 'Servicio 2',
    title: 'Asesoría Empresarial',
    subtitle: 'Acompañamiento legal, regulatorio y estratégico',
    lead: 'Te acompañamos en todos los aspectos legales, regulatorios y estratégicos para que tu empresa crezca de forma segura y rentable.',
    items: [
      'Constitución y estructuración de empresas',
      'Registro y protección de marcas (SENAPI)',
      'Cumplimiento de normativas y regulaciones',
      'Estrategias comerciales y de expansión',
    ],
    color: '#3EC6D3',
  },
  {
    id: 42,
    icon: CalendarDays,
    step: 'Servicio 3',
    title: 'Ferias Internacionales',
    subtitle: 'Conectamos tu empresa con el mundo',
    lead: 'Conectamos tu empresa con los principales eventos globales para negocios, proveedores y clientes internacionales.',
    groups: [
      {
        label: '🇨🇳 China',
        items: [
          'Feria de Cantón (China Import & Export Fair): valida proveedores y cierra negocios internacionales',
          'Viajes Empresariales a China: visita fábricas, conoce productos y cierra acuerdos directamente',
        ],
      },
      {
        label: '🇧🇷 Brasil',
        items: [
          'Hospitalar / Medical Fair Brasil: feria líder en equipos y tecnología médica en América Latina',
        ],
      },
    ],
    cta: '📥 Descarga nuestro brochure con toda la información: drive.google.com',
    color: '#00C2FF',
  },
  {
    id: 43,
    icon: MapPin,
    step: 'Servicio 4',
    title: 'Viajes Anuales',
    subtitle: 'Multiply Group te lleva al mundo',
    lead: 'Multiply Group te conecta con los principales eventos globales para expandir tu negocio con acompañamiento experto.',
    items: [
      'China: Feria de Cantón y visitas a fabricantes certificados',
      'Brasil: Hospitalar / Medical Fair (sector salud)',
      'Otros destinos estratégicos según mercado y sector',
    ],
    cta: '📥 Descarga nuestro brochure con todos los servicios y ferias internacionales.',
    color: '#3EC6D3',
  },
];

const allCategories: Category[] = [
  { id: 'importacion', title: 'Importación y Exportación', icon: Building2, services: importacionServices },
  { id: 'consultoria', title: 'Consultoría Empresarial', icon: Briefcase, services: consultoriaServices },
  { id: 'logistica', title: 'Logística y Gestión', icon: Ship, services: logisticaServices },
  { id: 'expansion', title: 'Expansión Internacional', icon: Globe2, services: expansionServices },
  { id: 'capacitacion', title: 'Capacitación Empresarial', icon: GraduationCap, services: capacitacionServices },
];

// ─── ServiceCard ──────────────────────────────────────────────────────────────

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)',
        border: `1px solid ${open ? service.color + '55' : 'rgba(0,194,255,0.1)'}`,
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: open ? `0 0 20px ${service.color}15` : 'none',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 sm:p-6 flex items-start gap-3 sm:gap-4 focus:outline-none group"
      >
        <div
          className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${service.color}22, ${service.color}11)`,
            border: `1px solid ${service.color}33`,
          }}
        >
          <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: service.color }} />
        </div>

        <div className="flex-1 min-w-0">
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-1 block"
            style={{ color: service.color, fontFamily: 'Poppins, sans-serif' }}
          >
            {service.step}
          </span>
          <h3
            className="text-base sm:text-lg font-bold text-white leading-tight group-hover:text-[#00C2FF] transition-colors duration-200"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {service.title}
          </h3>
          <p
            className="text-xs sm:text-sm mt-0.5 line-clamp-1"
            style={{ color: '#7BA8B8', fontFamily: 'Inter, sans-serif' }}
          >
            {service.subtitle}
          </p>
        </div>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5" style={{ color: service.color }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-4 sm:px-6 pb-5 pt-0">
              <div
                className="h-px mb-4"
                style={{ background: `linear-gradient(90deg, ${service.color}66, transparent)` }}
              />

              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: '#B0C4CC', fontFamily: 'Inter, sans-serif' }}
              >
                {service.lead}
              </p>

              {service.items && (
                <ul className="space-y-2 mb-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#D0E4EA', fontFamily: 'Inter, sans-serif' }}>
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {service.groups && (
                <div className="space-y-3 mb-4">
                  {service.groups.map((group, gi) => (
                    <div
                      key={gi}
                      className="rounded-xl p-3"
                      style={{
                        background: `${service.color}08`,
                        border: `1px solid ${service.color}20`,
                      }}
                    >
                      <p
                        className="text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: service.color, fontFamily: 'Poppins, sans-serif' }}
                      >
                        {group.label}
                      </p>
                      <ul className="space-y-1.5">
                        {group.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: '#D0E4EA', fontFamily: 'Inter, sans-serif' }}>
                            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: service.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {service.cta && (
                <div
                  className="rounded-xl px-4 py-3 text-xs sm:text-sm font-medium mt-2"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}15, ${service.color}08)`,
                    border: `1px solid ${service.color}30`,
                    color: '#E8F4F8',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {service.cta}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── CategoryBlock ────────────────────────────────────────────────────────────

function CategoryBlock({ category, categoryIndex }: { category: Category; categoryIndex: number }) {
  const Icon = category.icon;
  const accentColor = categoryIndex % 2 === 0 ? '#00C2FF' : '#3EC6D3';

  return (
    <div id={category.id} className="mb-20 scroll-mt-32">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}40` }}
          >
            <Icon className="w-5 h-5" style={{ color: accentColor }} />
          </div>
          <h3
            className="text-xl sm:text-2xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {category.title}
          </h3>
        </div>
        <div
          className="h-px w-full"
          style={{ background: `linear-gradient(90deg, ${accentColor}50, transparent)` }}
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {category.services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative" style={{ background: '#0a2d45' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 20% 50%, rgba(0,194,255,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(62,198,211,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

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
            Lo que hacemos
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Nuestros Servicios
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4"
            style={{ color: '#B0C4CC', fontFamily: 'Inter, sans-serif' }}
          >
            Soluciones integrales para hacer exitoso tu negocio de importación y exportación
          </p>
        </motion.div>

        {/* Categorías */}
        {allCategories.map((category, idx) => (
          <CategoryBlock key={category.id} category={category} categoryIndex={idx} />
        ))}

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p
            className="text-base sm:text-lg mb-6 px-4"
            style={{ color: '#B0C4CC', fontFamily: 'Inter, sans-serif' }}
          >
            ¿Listo para dar el siguiente paso con tu negocio?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            style={{
              background: 'linear-gradient(135deg, #00C2FF, #3EC6D3)',
              fontFamily: 'Poppins, sans-serif',
              boxShadow: '0 0 30px rgba(0,194,255,0.3)',
            }}
          >
            <ShieldCheck className="w-5 h-5" />
            Solicitar Asesoría Gratuita
            <TrendingUp className="w-5 h-5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}