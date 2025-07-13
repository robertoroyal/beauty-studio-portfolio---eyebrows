import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';

const ServicesPage: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os serviços especializados que oferecemos para realçar sua beleza natural.
          </p>
        </motion.div>

        <ServicesSection />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Por que escolher o Beauty Brow Studio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Profissionais Qualificados</h3>
              <p className="text-gray-700">
                Nossa equipe é formada por profissionais com certificações e constante atualização nas técnicas mais modernas.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Produtos Premium</h3>
              <p className="text-gray-700">
                Utilizamos apenas produtos de alta qualidade, hipoalergênicos e testados dermatologicamente.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Ambiente Acolhedor</h3>
              <p className="text-gray-700">
                Nosso espaço foi projetado para proporcionar conforto e bem-estar durante todo o atendimento.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;
