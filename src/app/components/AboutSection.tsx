// import { motion } from 'motion/react';
// import { Target, Eye, Award } from 'lucide-react';

// export function AboutSection() {
//   return (
//     <section id="about" className="py-20" style={{ background: '#0a2d45' }}>
//       <div className="max-w-7xl mx-auto px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2
//             className="text-5xl font-bold text-white mb-4"
//             style={{ fontFamily: 'Poppins, sans-serif' }}
//           >
//             Nosotros
//           </h2>
//           <p
//             className="text-xl text-[#B0C4CC] max-w-3xl mx-auto"
//             style={{ fontFamily: 'Inter, sans-serif' }}
//           >
//             Multiply Group es líder en importaciones, especializado en conectar empresas
//             con proveedores confiables en China. Transformamos la complejidad del comercio internacional
//             en oportunidades rentables y sin complicaciones.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           <motion.div
//             style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
//             className="rounded-2xl p-8 border border-[#00C2FF]/20"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             whileHover={{ y: -10 }}
//           >
//             <div className="bg-[#00C2FF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
//               <Target className="w-8 h-8 text-[#00C2FF]" />
//             </div>
//             <h3
//               className="text-2xl font-bold text-white mb-4"
//               style={{ fontFamily: 'Poppins, sans-serif' }}
//             >
//               Nuestra Misión
//             </h3>
//             <p className="text-[#B0C4CC]" style={{ fontFamily: 'Inter, sans-serif' }}>
//               Empoderar a empresas de todo el mundo proporcionando soluciones de
//               importación seguras, rentables y sin complicaciones desde China.
//             </p>
//           </motion.div>

//           <motion.div
//             style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
//             className="rounded-2xl p-8 border border-[#3EC6D3]/20"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             whileHover={{ y: -10 }}
//           >
//             <div className="bg-[#3EC6D3]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
//               <Eye className="w-8 h-8 text-[#3EC6D3]" />
//             </div>
//             <h3
//               className="text-2xl font-bold text-white mb-4"
//               style={{ fontFamily: 'Poppins, sans-serif' }}
//             >
//               Nuestra Visión
//             </h3>
//             <p className="text-[#B0C4CC]" style={{ fontFamily: 'Inter, sans-serif' }}>
//               Convertirnos en el socio más confiable para empresas que buscan expandirse a través
//               del comercio internacional y la excelencia en importación.
//             </p>
//           </motion.div>

//           {/* <motion.div
//             style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
//             className="rounded-2xl p-8 border border-[#00C2FF]/20"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             whileHover={{ y: -10 }}
//           >
//             <div className="bg-[#00C2FF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
//               <Award className="w-8 h-8 text-[#00C2FF]" />
//             </div>
//             <h3
//               className="text-2xl font-bold text-white mb-4"
//               style={{ fontFamily: 'Poppins, sans-serif' }}
//             >
//               Nuestro Propósito
//             </h3>
//             <p className="text-[#B0C4CC]" style={{ fontFamily: 'Inter, sans-serif' }}>
//               Crear oportunidades de negocio duraderas a través de alianzas confiables, orientación experta,
//               y compromiso con tu éxito.
//             </p>
//           </motion.div> */}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from 'motion/react';
import { Target, Eye, Globe, Users, TrendingUp, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20" style={{ background: '#0a2d45' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Nosotros
          </h2>
          <p
            className="text-xl text-[#B0C4CC] max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Multiply Group es líder en importaciones, especializado en conectar empresas
            con proveedores confiables en China. Transformamos la complejidad del comercio internacional
            en oportunidades rentables y sin complicaciones.
          </p>
        </motion.div>

        {/* --- CUADRÍCULA 3x2 PERFECTA --- */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Trayectoria Global */}
          <motion.div
            style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
            className="rounded-2xl p-8 border border-[#00C2FF]/20 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Globe className="w-10 h-10 text-[#00C2FF] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Trayectoria Global
            </h3>
            <p className="text-[#B0C4CC] flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
              Somos una empresa con más de 20 años de trayectoria conectando negocios entre vendedores
              y compradores a nivel internacional.
            </p>
          </motion.div>

          {/* Tarjeta 2: Conexión Cultural */}
          <motion.div
            style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
            className="rounded-2xl p-8 border border-[#3EC6D3]/20 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
          >
            <Users className="w-10 h-10 text-[#3EC6D3] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Conexión Cultural
            </h3>
            <p className="text-[#B0C4CC] flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
              Nuestra vasta experiencia nos ha permitido comprender que, para un proceso comercial
              exitoso, es fundamental conocer cómo piensan y sienten ambas partes.
            </p>
          </motion.div>

          {/* Tarjeta 3: Relaciones de Éxito */}
          <motion.div
            style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
            className="rounded-2xl p-8 border border-[#00C2FF]/20 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            <TrendingUp className="w-10 h-10 text-[#00C2FF] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Relaciones de Éxito
            </h3>
            <p className="text-[#B0C4CC] flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hemos logrado establecer relaciones comerciales a largo plazo, beneficiando a ambas partes mediante
              un incremento sólido en sus finanzas corporativas.
            </p>
          </motion.div>

          {/* Tarjeta 4: Nuestra Experiencia (NUEVA REDUCIDA) */}
          <motion.div
            style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
            className="rounded-2xl p-8 border border-[#3EC6D3]/20 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
          >
            <div className="bg-[#3EC6D3]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-[#3EC6D3]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestra Experiencia
            </h3>
            <p className="text-[#B0C4CC] flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
              Más de 20 años conectando negocios nos avalan. Comprendemos las culturas empresariales para establecer relaciones sólidas a largo plazo, garantizando el éxito mutuo.
            </p>
          </motion.div>

          {/* Tarjeta 5: Nuestra Misión */}
          <motion.div
            style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
            className="rounded-2xl p-8 border border-[#00C2FF]/20 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -10 }}
          >
            <div className="bg-[#00C2FF]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[#00C2FF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestra Misión
            </h3>
            <p className="text-[#B0C4CC] flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
              Compartir nuestro conocimiento para empoderar a empresas de todo el mundo,
              proporcionando soluciones de importación seguras, rentables y sin complicaciones.
            </p>
          </motion.div>

          {/* Tarjeta 6: Nuestra Visión */}
          <motion.div
            style={{ background: 'linear-gradient(135deg, #0f4268 0%, #0a2d45 100%)' }}
            className="rounded-2xl p-8 border border-[#3EC6D3]/20 flex flex-col h-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -10 }}
          >
            <div className="bg-[#3EC6D3]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-[#3EC6D3]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nuestra Visión
            </h3>
            <p className="text-[#B0C4CC] flex-grow" style={{ fontFamily: 'Inter, sans-serif' }}>
              Convertirnos en el socio más confiable para empresas que buscan expandirse a través
              del comercio internacional y alcanzar la excelencia en importación.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}