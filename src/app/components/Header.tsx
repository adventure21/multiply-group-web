import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
// Si usas Next.js o React Router, importa tu Link aquí. 
// Por ahora usaremos etiquetas <a> y botones para el scroll.

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Efecto para cambiar el fondo del nav al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para navegar a secciones generales
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Función para navegar específicamente a los sub-servicios
  const handleScrollToService = (id: string) => {
    // Primero, nos aseguramos de estar en la sección de servicios
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      // Pequeño timeout para asegurar que el DOM está listo si venimos de otra página
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a2d45]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            {/* Reemplaza esta ruta por la de tu logo real */}
            <img src="/image/logo2.png" alt="Multiply Group" className="h-10 md:h-12" />
          </div>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-[#00C2FF] font-medium transition-colors">
              Inicio
            </button>

            {/* Dropdown Nosotros */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-white hover:text-[#00C2FF] font-medium transition-colors py-2">
                Nosotros <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#0f4268] border border-[#00C2FF]/20 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                <div className="flex flex-col py-2">
                  <button onClick={() => scrollToSection('quienes-somos')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Quiénes somos</button>
                  <button onClick={() => scrollToSection('mision')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Misión / Visión</button>
                  <button onClick={() => scrollToSection('experiencia')} className="text-left px-4 py-2 text-sm text-white hover:bg-[#00C2FF]/10 hover:text-[#00C2FF] transition-colors">Experiencia</button>
                </div>
              </div>
            </div>

            {/* Dropdown Servicios (AQUÍ ESTÁ LA CONEXIÓN) */}
            <div className="relative group">
              <button 
                onClick={() => scrollToSection('services')}
                className="flex items-center gap-1 text-[#00C2FF] border-b-2 border-[#00C2FF] pb-1 font-medium transition-colors py-2"
              >
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

            <button onClick={() => scrollToSection('como-funciona')} className="text-white hover:text-[#00C2FF] font-medium transition-colors">
              Cómo Funciona
            </button>
            <button onClick={() => scrollToSection('socios')} className="text-white hover:text-[#00C2FF] font-medium transition-colors">
              Socios Estratégicos
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-white hover:text-[#00C2FF] font-medium transition-colors">
              Contacto
            </button>
          </nav>

          {/* Botón CTA Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-[#00C2FF] hover:bg-[#3EC6D3] text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(0,194,255,0.4)]"
            >
              Comienza Ahora
            </button>
          </div>

          {/* Botón Menú Hamburguesa (Móvil) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white p-2 focus:outline-none"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil (Overlay) */}
      <div
        className={`fixed inset-0 bg-[#0a2d45] z-[60] transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-5 flex justify-between items-center border-b border-white/10">
          <img src="/image/logo2.png" alt="Multiply Group" className="h-10" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-4">
            <button onClick={() => scrollToSection('inicio')} className="text-left text-lg font-medium text-white">Inicio</button>
            
            {/* Acordeón Nosotros Móvil */}
            <div>
              <button onClick={() => toggleDropdown('nosotros')} className="flex items-center justify-between w-full text-left text-lg font-medium text-white">
                Nosotros <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'nosotros' ? 'rotate-180 text-[#00C2FF]' : ''}`} />
              </button>
              {activeDropdown === 'nosotros' && (
                <div className="flex flex-col gap-3 pl-4 mt-3 border-l border-white/20">
                  <button onClick={() => scrollToSection('quienes-somos')} className="text-left text-[#B0C4CC]">· Quiénes somos</button>
                  <button onClick={() => scrollToSection('mision')} className="text-left text-[#B0C4CC]">· Misión / Visión</button>
                  <button onClick={() => scrollToSection('experiencia')} className="text-left text-[#B0C4CC]">· Experiencia</button>
                </div>
              )}
            </div>

            {/* Acordeón Servicios Móvil (AQUÍ ESTÁ LA CONEXIÓN) */}
            <div>
              <button onClick={() => toggleDropdown('servicios')} className="flex items-center justify-between w-full text-left text-lg font-medium text-white">
                Servicios <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === 'servicios' ? 'rotate-180 text-[#00C2FF]' : ''}`} />
              </button>
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

            <button onClick={() => scrollToSection('como-funciona')} className="text-left text-lg font-medium text-white">Cómo Funciona</button>
            <button onClick={() => scrollToSection('socios')} className="text-left text-lg font-medium text-white">Socios Estratégicos</button>
            <button onClick={() => scrollToSection('contacto')} className="text-left text-lg font-medium text-white">Contacto</button>

            <button
              onClick={() => scrollToSection('contacto')}
              className="mt-6 bg-[#00C2FF] text-white px-6 py-3 rounded-xl font-semibold text-center w-full"
            >
              Comienza Ahora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}