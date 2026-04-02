import { motion } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function PartnersSection() {
  const partners = [
    'KETAL',
    'IC NORTE',
    'SIX',
    'KAMASUTRA',
    'LOQUAY',
    'MODA CARINE',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="partners" className="py-20 scroll-mt-20" style={{ background: '#072136' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12 md:mb-16"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Socios Estratégicos
        </motion.h2>

        <div className="overflow-hidden">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="px-2 md:px-8">
                <motion.div
                  className="rounded-xl p-4 md:p-8 flex items-center justify-center h-24 md:h-32 transition-all duration-300 group"
                  style={{ 
                    background: 'linear-gradient(135deg, #0C314D 0%, #072136 100%)',
                    border: '1px solid rgba(0, 194, 255, 0.1)'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <p
                    className="text-xl md:text-3xl font-bold text-[#6B8A96] group-hover:text-white transition-colors duration-300 text-center break-words w-full"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {partner}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}