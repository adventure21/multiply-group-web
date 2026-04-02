import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    window.open('https://wa.me/+59177242591', '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-50 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      {/* Pulse animation */}
      />
    </motion.button>
  );
}
