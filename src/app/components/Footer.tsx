import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // CAMBIO APLICADO: Fondo actualizado al color del Header (#0a2d45)
    <footer id="contact" className="bg-[#0a2d45] border-t border-[#00C2FF]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Multiply Group
            </h3>
            <p className="text-[#B0C4CC] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Tu socio de confianza para importaciones seguras y rentables desde China.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                // CAMBIO APLICADO: Fondo de botones actualizado al color de los dropdowns (#0f4268)
                className="bg-[#0f4268] w-10 h-10 rounded-lg flex items-center justify-center text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-[#0f4268] w-10 h-10 rounded-lg flex items-center justify-center text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-[#0f4268] w-10 h-10 rounded-lg flex items-center justify-center text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-[#0f4268] w-10 h-10 rounded-lg flex items-center justify-center text-[#00C2FF] hover:bg-[#00C2FF] hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-[#B0C4CC] hover:text-[#00C2FF] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Servicios
            </h4>
            <ul className="space-y-2">
              {[
                'Servicios de Importación',
                'Búsqueda de Proveedores',
                'Consultoría Empresarial',
                'Soporte Logístico',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-[#B0C4CC] hover:text-[#00C2FF] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4
              className="text-lg font-bold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contáctanos
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#B0C4CC]">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C2FF]" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>
                  comext@multiplysrl.com
                </span>
              </li>
              <li className="flex items-start gap-3 text-[#B0C4CC]">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C2FF]" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>+591 77242591</span>
              </li>
              <li className="flex items-start gap-3 text-[#B0C4CC]">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00C2FF]" />
                <span style={{ fontFamily: 'Inter, sans-serif' }}>
                  Av. Rosendo Gutiérrez 957, entre Crespo y Holguín, Zona Sopocachi
                  <br />
                  La Paz – Bolivia
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00C2FF]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#B0C4CC] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              © {currentYear} Multiply Group. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[#B0C4CC] hover:text-[#00C2FF] transition-colors text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="text-[#B0C4CC] hover:text-[#00C2FF] transition-colors text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}