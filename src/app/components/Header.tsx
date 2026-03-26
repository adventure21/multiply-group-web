import { useState, useEffect } from 'react';
import { motion } from 'motion/react';


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A2E3D]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src="/image/logo2.png" 
              alt="Multiply Group Logo" 
              className="h-20 w-auto" 
            />
          </div>
  

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#B0C4CC] hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#B0C4CC] hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#B0C4CC] hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#B0C4CC] hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection('other-services')}
              className="text-[#B0C4CC] hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Nuestros Socios Estrategicos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#B0C4CC] hover:text-white transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contacto
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('cta')}
            className="bg-[#00C2FF] hover:bg-[#009FCC] text-white px-6 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Comienza Ahora
          </button>
        </div>
      </div>
    </motion.header>
  );
}