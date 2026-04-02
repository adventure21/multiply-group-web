import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en' | 'zh' | 'hi';

const translations = {
  es: {
    // Nav & General
    nav_nosotros: 'Nosotros',
    nav_servicios: 'Servicios',
    s_step: 'Paso',
    s_serv: 'Servicio',
    
    // About Section
    about_subtitle: 'Conectamos negocios globales con más de 20 años de experiencia.',
    about_description: 'Asesoramos en importaciones, exportaciones y representación comercial internacional, gestionando cada etapa del proceso con eficiencia, seguridad y rentabilidad.',
    about_stats_years: 'Años de experiencia',
    about_stats_markets: 'Mercados activos',
    about_stats_commitment: 'Compromiso',
    sub_quienes: 'Quiénes somos',
    about_card1_title: 'Trayectoria Global',
    about_card1_body: 'Más de 20 años facilitando operaciones y conectando oportunidades comerciales en distintos mercados.',
    about_card2_title: 'Conexión Cultural',
    about_card2_body: 'Entendemos cómo piensan y negocian ambas partes en cada mercado para un proceso exitoso.',
    about_card3_title: 'Relaciones de Éxito',
    about_card3_body: 'Generamos beneficios sostenibles y crecimiento sólido para ambas partes a largo plazo.',
    about_card4_title: 'Nuestra Experiencia',
    about_card4_body: 'Acompañamos en importación, exportación y representación con estrategia y ejecución clara.',
    about_mission_vision_label: 'Misión y Visión',
    sub_mision: 'Nuestra Misión',
    about_mission_text: 'Impulsar el crecimiento de empresas conectándose con oportunidades globales, brindando soluciones seguras y rentables.',
    about_vision_title: 'Nuestra Visión',
    about_vision_text: 'Ser el socio estratégico de referencia para empresas que buscan expandirse internacionalmente con éxito.',

    // Benefits Section
    benefits_main_title: 'Por Qué Elegir Multiply Group',
    benefits_main_subtitle: 'Experimenta las ventajas de trabajar con expertos en comercio exterior',
    benefits_card1_title: 'Ahorro de Tiempo',
    benefits_card1_desc: 'Enfócate en tu negocio mientras nosotros manejamos el complejo proceso de importación.',
    benefits_card2_title: 'Reducción de Riesgos',
    benefits_card2_desc: 'Minimiza riesgos financieros con nuestra red de proveedores verificados.',
    benefits_card3_title: 'Mayor Rentabilidad',
    benefits_card3_desc: 'Maximiza tus márgenes con precios competitivos y negociaciones expertas.',
    benefits_card4_title: 'Soporte Completo',
    benefits_card4_desc: 'Equipo dedicado disponible durante todo tu proceso de expansión.',

    // Services Section
    s_badge: 'Lo que hacemos',
    s_subtitle: 'Soluciones integrales para hacer exitoso tu negocio internacional',
    s_cta_text: '¿Listo para dar el siguiente paso con tu negocio?',
    s_cta_btn: 'Solicitar Asesoría Gratuita',
    
    // Categorías de Servicios
    s_import: 'Importación y Exportación',
    s_consul: 'Consultoría Empresarial',
    s_logist: 'Logística y Gestión',
    s_expan: 'Expansión Internacional',
    s_capacit: 'Capacitación Empresarial',

    // Detalle Servicios (Ejemplos de las keys usadas en el mapeo anterior)
    s_import_1_t: 'Análisis de Producto',
    s_import_1_s: 'Contacto y Asesoría Personalizada',
    s_import_1_l: 'Analizamos tu necesidad y definimos la mejor estrategia del negocio.',
    s_import_1_i: ['Evaluamos el producto', 'Definimos presupuesto', 'Guiamos sobre viabilidad'],
    s_import_1_c: '💡 Nuestro objetivo es que tomes decisiones seguras.',
    
    s_import_4_t: 'Regulación Especial',
    s_import_4_s: 'Permisos y registros',
    s_import_4_l: 'Gestionamos autorizaciones obligatorias ante el Estado.',
    s_import_4_g: [
      { label: '🔹 Incluye', items: ['Registros sanitarios', 'Certificaciones técnicas'] },
      { label: '🏛️ Entidades', items: ['AGEMED', 'SENASAG', 'ADUANA'] }
    ],
    
    s_log_3_t: 'Gestión de Exportación',
    s_log_3_s: 'Bolivia al mundo',
    s_log_3_l: 'Llevamos tus productos a mercados internacionales de forma rentable.',
    s_log_3_g: [
        { label: '📦 Preparación', items: ['Etiquetado', 'Normativas'] },
        { label: '🚢 Logística', items: ['Transporte aéreo/marítimo', 'Agentes de carga'] }
    ],
    s_log_3_c: '🎯 Llegada puntual y sin riesgos.'
  },
  en: {
    nav_nosotros: 'About Us',
    nav_servicios: 'Services',
    s_step: 'Step',
    s_serv: 'Service',
    about_subtitle: 'Connecting global businesses with over 20 years of experience.',
    about_description: 'We advise on imports, exports, and international commercial representation, managing every stage with efficiency.',
    about_stats_years: 'Years of experience',
    about_stats_markets: 'Active markets',
    about_stats_commitment: 'Commitment',
    sub_quienes: 'Who we are',
    benefits_main_title: 'Why Choose Multiply Group',
    benefits_card1_title: 'Time Saving',
    s_import: 'Import & Export',
    s_badge: 'What we do',
    s_cta_btn: 'Request Free Advisory',
    // ... (completar con traducciones al inglés)
  },
  zh: {
    nav_nosotros: '关于我们',
    nav_servicios: '服务项目',
    s_step: '步骤',
    s_serv: '服务',
    about_subtitle: '拥有 20 多年经验，连接全球业务。',
    about_stats_years: '多年经验',
    sub_quienes: '我们是谁',
    benefits_main_title: '为什么选择 Multiply Group',
    s_import: '进出口服务',
    s_badge: '我们的业务',
    s_cta_btn: '申请免费咨询',
    // ... (completar con traducciones al chino)
  },
  hi: {
    nav_nosotros: 'हमारे बारे में',
    nav_servicios: 'सेवाएं',
    s_step: 'चरण',
    s_serv: 'सेवा',
    about_subtitle: '20 से अधिक वर्षों के अनुभव के साथ वैश्विक व्यवसायों को जोड़ना।',
    about_stats_years: 'वर्षों का अनुभव',
    sub_quienes: 'हम कौन हैं',
    benefits_main_title: 'मल्टीप्लाई ग्रुप क्यों चुनें',
    s_import: 'आयात और निर्यात',
    s_badge: 'हम क्या करते हैं',
    s_cta_btn: 'निःशुल्क परामर्श लें',
    // ... (completar con traducciones al hindi)
  }
};

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);