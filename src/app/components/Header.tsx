import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

const SUBMENU_ITEMS: Record<string, { label: string; id: string }[]> = {
  'services': [
    { label: 'Importación y Exportación', id: 'services' },
    { label: 'Consultoría Empresarial',   id: 'services' },
    { label: 'Logística y Gestión',       id: 'services' },
    { label: 'Expansión Internacional',   id: 'services' },
    { label: 'Capacitación Empresarial',  id: 'services' },
  ],
  'how-it-works': [
    { label: 'Contacto',    id: 'how-it-works' },
    { label: 'Análisis',    id: 'how-it-works' },
    { label: 'Búsqueda',    id: 'how-it-works' },
    { label: 'Negociación', id: 'how-it-works' },
    { label: 'Regulación',  id: 'how-it-works' },
    { label: 'Importación', id: 'how-it-works' },
    { label: 'Entrega',     id: 'how-it-works' },
  ],
  'about': [
    { label: 'Quiénes somos',   id: 'about' },
    { label: 'Misión / Visión', id: 'about' },
    { label: 'Experiencia',     id: 'about' },
  ],
  'contact': [
    { label: 'Formulario',       id: 'contact' },
    { label: 'Reserva una cita', id: 'contact' },
  ],
};

const NAV_ITEMS = [
  { label: 'Inicio',              id: 'home' },
  { label: 'Nosotros',            id: 'about',         hasSubmenu: true },
  { label: 'Servicios',           id: 'services',      hasSubmenu: true },
  { label: 'Cómo Funciona',       id: 'how-it-works',  hasSubmenu: true },
  { label: 'Socios Estratégicos', id: 'other-services' },
  { label: 'Contacto',            id: 'contact',       hasSubmenu: true },
];

export function Header() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen]           = useState(false);
  const [submenuOpen, setSubmenuOpen]     = useState<string | null>(null);
  const [mobileOpenId, setMobileOpenId]   = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const offsets = NAV_ITEMS.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setSubmenuOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
    setSubmenuOpen(null);
    setMobileOpenId(null);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0A2E3D]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <img src="/image/logo2.png" alt="Multiply Group Logo" className="h-20 w-auto" />
            </div>

            {/* Nav desktop */}
            <nav ref={navRef} className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.map(({ label, id, hasSubmenu }) =>
                hasSubmenu ? (
                  <div key={id} className="relative">
                    <button
                      onClick={() => setSubmenuOpen(o => o === id ? null : id)}
                      className="relative flex items-center gap-1 text-sm transition-colors duration-200"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: activeSection === id ? '#00C2FF' : '#B0C4CC',
                      }}
                    >
                      {label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200"
                        style={{
                          transform: submenuOpen === id ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                      {activeSection === id && (
                        <motion.span
                          layoutId="underline"
                          className="absolute -bottom-1 left-0 right-0 h-px bg-[#00C2FF]"
                        />
                      )}
                    </button>

                    {/* Dropdown desktop */}
                    <AnimatePresence>
                      {submenuOpen === id && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-xl overflow-hidden shadow-xl border border-[#00C2FF]/15"
                          style={{ background: '#0A2E3D' }}
                        >
                          {SUBMENU_ITEMS[id]?.map(({ label: subLabel, id: subId }) => (
                            <button
                              key={subLabel}
                              onClick={() => scrollToSection(subId)}
                              className="w-full text-left px-4 py-3 text-sm transition-colors duration-150 hover:bg-[#00C2FF]/10 hover:text-[#00C2FF]"
                              style={{
                                fontFamily: 'Inter, sans-serif',
                                color: '#B0C4CC',
                                borderBottom: '1px solid rgba(0,194,255,0.07)',
                              }}
                            >
                              {subLabel}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="relative text-sm transition-colors duration-200"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: activeSection === id ? '#00C2FF' : '#B0C4CC',
                    }}
                  >
                    {label}
                    {activeSection === id && (
                      <motion.span
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-[#00C2FF]"
                      />
                    )}
                  </button>
                )
              )}
            </nav>

            {/* CTA + hamburguesa */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection('cta')}
                className="hidden md:block bg-[#00C2FF] hover:bg-[#009FCC] text-white px-6 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Comienza Ahora
              </button>
              <button
                className="md:hidden text-white p-2"
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[84px] left-0 right-0 z-40 bg-[#0A2E3D]/98 backdrop-blur-md border-t border-[#00C2FF]/10 md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_ITEMS.map(({ label, id, hasSubmenu }) => (
                <div key={id}>
                  <button
                    onClick={() => {
                      if (hasSubmenu) {
                        setMobileOpenId(o => o === id ? null : id);
                      } else {
                        scrollToSection(id);
                      }
                    }}
                    className="w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 text-sm flex items-center justify-between"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      color: activeSection === id ? '#00C2FF' : '#B0C4CC',
                      background: activeSection === id ? 'rgba(0,194,255,0.08)' : 'transparent',
                    }}
                  >
                    {label}
                    {hasSubmenu && (
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200"
                        style={{
                          transform: mobileOpenId === id ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    )}
                  </button>

                  {/* Submenú móvil */}
                  <AnimatePresence>
                    {hasSubmenu && mobileOpenId === id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        {SUBMENU_ITEMS[id]?.map(({ label: subLabel, id: subId }) => (
                          <button
                            key={subLabel}
                            onClick={() => scrollToSection(subId)}
                            className="w-full text-left py-2.5 pl-8 pr-4 text-sm transition-colors duration-150 hover:text-[#00C2FF]"
                            style={{
                              fontFamily: 'Inter, sans-serif',
                              color: '#8AAAB8',
                            }}
                          >
                            · {subLabel}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <button
                onClick={() => scrollToSection('cta')}
                className="mt-3 bg-[#00C2FF] hover:bg-[#009FCC] text-white px-6 py-3 rounded-xl transition-all duration-300 text-sm font-semibold"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Comienza Ahora
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}