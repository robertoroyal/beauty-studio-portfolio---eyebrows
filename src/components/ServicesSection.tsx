import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Design de Sobrancelhas',
      description: 'Modelagem personalizada que valoriza seu formato de rosto e realça seu olhar.',
      price: 'R$ 50,00',
      duration: '30 min',
      features: ['Análise facial', 'Modelagem com pinça', 'Acabamento com tesoura', 'Escovação']
    },
    {
      id: 2,
      title: 'Design com Henna',
      description: 'Preenchimento natural que dá mais volume e definição às sobrancelhas.',
      price: 'R$ 80,00',
      duration: '45 min',
      features: ['Design completo', 'Aplicação de henna', 'Correção de falhas', 'Duração de até 15 dias']
    },
    {
      id: 3,
      title: 'Micropigmentação Fio a Fio',
      description: 'Técnica que simula fios naturais, ideal para quem deseja um resultado duradouro.',
      price: 'R$ 350,00',
      duration: '1h30',
      features: ['Desenho personalizado', 'Aplicação indolor', 'Pigmentos importados', 'Duração de até 1 ano']
    },
    {
      id: 4,
      title: 'Laminação de Sobrancelhas',
      description: 'Alinhamento dos fios que proporciona volume e efeito penteado por semanas.',
      price: 'R$ 120,00',
      duration: '1h',
      features: ['Nutrição dos fios', 'Alinhamento', 'Tintura (opcional)', 'Duração de até 6 semanas']
    }
  ];

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 section-title">Nossos Serviços</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Oferecemos serviços especializados em design de sobrancelhas para realçar sua beleza natural.
            Cada procedimento é personalizado de acordo com seu formato de rosto e estilo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="card p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Preço:</span>
                  <span className="font-bold">{service.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Duração:</span>
                  <span>{service.duration}</span>
                </div>
              </div>
              
              <ul className="mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="https://wa.me/5500000000000?text=Olá! Gostaria de agendar o serviço de design de sobrancelhas."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-auto"
              >
                Agendar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
