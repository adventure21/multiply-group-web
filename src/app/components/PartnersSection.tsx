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
    ],
  };

  return (
    <section className="py-20 bg-[#0D3A4A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-16"
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
              <div key={index} className="px-8">
                <motion.div
                  className="bg-[#0A2E3D] rounded-xl p-8 flex items-center justify-center h-32 transition-all duration-300 hover:bg-[#0A2E3D]/70 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <p
                    className="text-3xl font-bold text-[#6B8A96] group-hover:text-white transition-colors duration-300"
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