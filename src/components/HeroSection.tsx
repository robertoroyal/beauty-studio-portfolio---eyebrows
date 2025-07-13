import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Beauty Brow Studio</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transforme seu olhar com o design de sobrancelhas perfeito para o seu rosto
          </p>
          <motion.a
            href="#servicos"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto w-max"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Conheça Nossos Serviços</span>
            <FaArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
