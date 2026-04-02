import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleScrollToService = (id: string) => {
    setActiveSection('services');
    const servicesSection = document.getElementById('services');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 110;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, servicesSection ? 100 : 0);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const getNavClass = (section: string) => {
    const isActive = activeSection === section;
    return `font-medium transition-all duration-300 border-b-2 pb-1 py-2 ${
      isActive
        ? 'text-[#00C2FF] border-[#00C2FF]'
        : 'text-white border-transparent hover:text-[#00C2FF]'
    }`;
  };

  const MobileMenu = () => createPortal(
    <div
      className={`transition-transform duration-300 ease-in-out transform ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#0a2d45',
        zIndex: 99999,
        overflowY: 'auto',
      }}
    >
      <div className="p-5 flex justify-between items-center border-b border-white/10">
        <img src="/image/logo2.png" alt="Multiply Group" className="h-10" />
        <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
          <X className="w-7 h-7" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex flex-col gap-4">
          <button onClick={() => scrollToSection('home')} className="text-left text-lg font-medium text-white">Inicio</button>

          {/* Acordeón Nosotros */}
          <div>
            <div className="flex items-center justify-between w-full">
              <button onClick={() => scrollToSection('about')} className="text-left text-lg font-medium text-white flex-grow">
                Nosotros
              </button>
              <button onClick={() => toggleDropdown('nosotros')} className="p-2">
                <ChevronDown className={`w-5 h-5 transition-transform text-white ${activeDropdown === 'nosotros' ? 'rotate-180 text-[#00C2FF]' : ''}`} />
              </button>
            </div>
            {activeDropdown === 'nosotros' && (
              <div className="flex flex-col gap-3 pl-4 mt-3 border-l border-white/20">
                <button onClick={() => scrollToSection('about')} className="text-left text-[#B0C4CC]">· Quiénes somos</button>
                <button onClick={() => scrollToSection('mission')} className="text-left text-[#B0C4CC]">· Misión / Visión</button>
                <button onClick={() => scrollToSection('experience')} className="text-left text-[#B0C4CC]">· Experiencia</button>
              </div>
            )}
          </div>

          {/* Acordeón Servicios */}
          <div>
            <div className="flex items-center justify-between w-full">
              <button onClick={() => scrollToSection('services')} className="text-left text-lg font-medium text-white flex-grow">
                Servicios
              </button>
              <button onClick={() => toggleDropdown('servicios')} className="p-2">
                <ChevronDown className={`w-5 h-5 transition-transform text-white ${activeDropdown === 'servicios' ? 'rotate-180 text-[#00C2FF]' : ''}`} />
              </button>
            </div>
            {activeDropdown === 'servicios' && (
              <div className="flex flex-col gap-4 pl-4 mt-4 border-l border-[#00C2FF]/30">
                <button onClick={() => handleScrollToService('importacion')} className="text-left text-[#B0C4CC] hover:text-[#00C2FF]">Importación y Exportación</button>
                <button onClick={() => handleScrollToService('consultoria')} className="text-left text-[#B0C4CC] hover:text-[#00C2FF]">Consultoría Empresarial</button>
                <button onClick={() => handleScrollToService('logistica')} className="text-left text-[#B0C4CC] hover:text-[#00C2FF]">Logística y Gestión</button>
                <button onClick={() => handleScrollToService('expansion')} className="text-left text-[#B0C4CC] hover:text-[#00C2FF]">Expansión Internacional</button>
                <button onClick={() => handleScrollToService('capacitacion')} className="text-left text-[#B0C4CC] hover:text-[#00C2FF]">Capacitación Empresarial</button>
              </div>
            )}
          </div>

          <button onClick={() => scrollToSection('how-it-works')} className="text-left text-lg font-medium text-white">Cómo Funciona</button>
          <button onClick={() => scrollToSection('partners')} className="text-left text-lg font-medium text-white">Socios Estratégicos</button>
          <button onClick={() => scrollToSection('contact')} className="text-left text-lg font-medium text-white">Contacto</button>

          <button
            onClick={() => scrollToSection('contact')}
            className="mt-6 bg-[#00C2FF] text-white px-6 py-3 rounded-xl font-semibold text-center w-full"
          >
            Comienza Ahora
          </button>
        </div>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0a2d45]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src="/image/logo2.png" alt="Multiply Group" className="h-10 md:h-12" />
            </div>

            {/* Menú Desktop */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <button onClick={() => scrollToSection('home')} className={getNavClass('home')}>
                Inicio
              </button>

              {/* Dropdown Nosotros */}
              <div className="relative group">
                <button onClick={() => scrollToSection('about')} className={`flex items-center gap-1 ${getNavClass('about')}`}>
                  Nosotros <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#0f4268] border border-[#00C2FF]/20 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col py-2">
                    <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Quiénes somos</button>
                    <button onClick={() => scrollToSection('mission')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Misión / Visión</button>
                    <button onClick={() => scrollToSection('experience')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Experiencia</button>
                  </div>
                </div>
              </div>

              {/* Dropdown Servicios */}
              <div className="relative group">
                <button onClick={() => scrollToSection('services')} className={`flex items-center gap-1 ${getNavClass('services')}`}>
                  Servicios <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#0f4268] border border-[#00C2FF]/20 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col py-2">
                    <button onClick={() => handleScrollToService('importacion')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Importación y Exportación</button>
                    <button onClick={() => handleScrollToService('consultoria')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Consultoría Empresarial</button>
                    <button onClick={() => handleScrollToService('logistica')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Logística y Gestión</button>
                    <button onClick={() => handleScrollToService('expansion')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Expansión Internacional</button>
                    <button onClick={() => handleScrollToService('capacitacion')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Capacitación Empresarial</button>
                  </div>
                </div>
              </div>

              <button onClick={() => scrollToSection('how-it-works')} className={getNavClass('how-it-works')}>
                Cómo Funciona
              </button>
              <button onClick={() => scrollToSection('partners')} className={getNavClass('partners')}>
                Socios Estratégicos
              </button>
              <button onClick={() => scrollToSection('contact')} className={getNavClass('contact')}>
                Contacto
              </button>
            </nav>

            {/* Botón CTA Desktop */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#00C2FF] hover:bg-[#3EC6D3] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,194,255,0.4)]"
              >
                Comienza Ahora
              </button>
            </div>

            {/* Botón Hamburguesa */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} className="text-white p-2 focus:outline-none">
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
}