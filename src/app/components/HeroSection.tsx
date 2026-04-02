import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

// Diccionario interno solo para esta sección
const translations = {
  es: {
    badge: "Presencia en 3 continentes",
    title: "MULTIPLY GROUP",
    subtitle: "Asesores en comercio internacional y representación empresarial global",
    description: "Conectamos oportunidades reales de negocio entre vendedores y compradores internacionales, gestionando importaciones, exportaciones y logística con eficiencia y seguridad.",
    btnStart: "Comienza Ahora",
    btnServices: "Ver Servicios",
  },
  en: {
    badge: "Presence in 3 continents",
    title: "MULTIPLY GROUP",
    subtitle: "International trade advisors and global business representation",
    description: "We connect real business opportunities between international sellers and buyers, managing imports, exports, and logistics with efficiency and security.",
    btnStart: "Get Started",
    btnServices: "Our Services",
  },
  zh: {
    badge: "业务遍及三大洲",
    title: "MULTIPLY GROUP",
    subtitle: "国际贸易顾问和全球业务代表",
    description: "我们联系国际买家与卖家之间的真实业务机会，高效安全地管理进出口及物流业务。",
    btnStart: "立即开始",
    btnServices: "查看服务",
  },
  hi: {
    badge: "3 महाद्वीपों में उपस्थिति",
    title: "MULTIPLY GROUP",
    subtitle: "अंतर्राष्ट्रीय व्यापार सलाहकार और वैश्विक व्यापार प्रतिनिधित्व",
    description: "हम अंतरराष्ट्रीय विक्रेताओं और खरीदारों के बीच वास्तविक व्यावसायिक अवसरों को जोड़ते हैं, दक्षता और सुरक्षा के साथ आयात, निर्यात और रसद का प्रबंधन करते हैं।",
    btnStart: "अभी शुरू करें",
    btnServices: "सेवाएं देखें",
  }
};

export function HeroSection() {
  const [lang, setLang] = useState<'es' | 'en' | 'zh' | 'hi'>('es');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const t = translations[lang];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A2E3D 0%, #0D3A4A 50%, #0A2E3D 100%)' }}
    >
      {/* Background world map */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/image/Mapa mundial sobre fondo azul.gradient.png')`,
          opacity: 1,
        }}
      />

      <div className="absolute inset-0 bg-[#0A2E3D]/40" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">

        {/* Badge superior */}
        <motion.div
          key={`badge-${lang}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00C2FF]/30 bg-[#00C2FF]/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
          <span className="text-[#00C2FF] text-xs sm:text-sm font-medium">
            {t.badge}
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          {t.title}
        </motion.h1>

        {/* Subtítulo */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${lang}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-lg sm:text-xl font-semibold text-[#3EC6D3] mb-4"
          >
            {t.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* Descripción */}
        <motion.p
          key={`desc-${lang}`}
          className="text-sm sm:text-base md:text-lg text-[#B0C4CC] mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {t.description}
        </motion.p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('cta')}
            className="bg-[#00C2FF] text-white px-8 py-3.5 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold"
          >
            {t.btnStart} <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="border-2 border-[#00C2FF] text-white px-8 py-3.5 rounded-xl transition-all hover:bg-[#00C2FF]/10"
          >
            {t.btnServices}
          </button>
        </div>

        {/* Banderas (Cambian SOLO esta sección) */}
        <div className="flex justify-center gap-6 sm:gap-8 mt-10">
          {[
            { code: 'es', flag: '🇧🇴', label: 'Bolivia' },
            { code: 'en', flag: '🇺🇸', label: 'EE.UU.' },
            { code: 'zh', flag: '🇨🇳', label: 'China' },
            { code: 'hi', flag: '🇮🇳', label: 'India' },
          ].map(({ code, flag, label }) => (
            <button 
              key={code} 
              onClick={() => setLang(code as any)} 
              className={`flex flex-col items-center gap-1 transition-all duration-300 ${lang === code ? 'scale-110 opacity-100' : 'opacity-50 hover:opacity-100'}`}
            >
              <span className="text-2xl sm:text-3xl drop-shadow-md">{flag}</span>
              <span className={`text-xs ${lang === code ? 'text-[#00C2FF] font-bold' : 'text-[#B0C4CC]'}`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A2E3D] to-transparent" />
    </section>
  );
}