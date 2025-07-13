import React from 'react';
import { motion } from 'framer-motion';
import TestimonialsSection from '../components/TestimonialsSection';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Depoimentos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja o que nossas clientes dizem sobre os serviços do Beauty Brow Studio.
          </p>
        </motion.div>

        <TestimonialsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">Compartilhe sua Experiência</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Sua opinião é muito importante para nós. Se você já utilizou nossos serviços, 
            adoraríamos ouvir sobre sua experiência.
          </p>
          
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Serviço Utilizado
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="design">Design de Sobrancelhas</option>
                  <option value="henna">Design com Henna</option>
                  <option value="micropigmentacao">Micropigmentação</option>
                  <option value="laminacao">Laminação de Sobrancelhas</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                  Avaliação
                </label>
                <div className="flex space-x-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-2xl text-gray-300 hover:text-yellow-500 focus:outline-none"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
                  Seu Depoimento
                </label>
                <textarea
                  id="testimonial"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Conte-nos sobre sua experiência..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  Enviar Depoimento
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
