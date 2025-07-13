import React from 'react';
import { motion } from 'framer-motion';
import TestimonialSlider from '../components/TestimonialSlider';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossas Clientes Dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação de nossas clientes é nossa maior recompensa. Confira alguns depoimentos
            de quem já experimentou nossos serviços.
          </p>
        </motion.div>

        <TestimonialSlider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Quer compartilhar sua experiência conosco? Ficaremos felizes em ouvir seu depoimento!
          </p>
          <a
            href="/contato"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Enviar Depoimento
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
