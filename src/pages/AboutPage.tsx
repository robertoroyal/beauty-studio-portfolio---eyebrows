import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossa história, missão e os profissionais por trás do Beauty Brow Studio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
            <p className="text-gray-700 mb-4">
              O Beauty Brow Studio nasceu em 2018 da paixão da nossa fundadora por design de sobrancelhas e estética facial. 
              O que começou como um pequeno espaço dedicado exclusivamente a sobrancelhas, rapidamente se transformou em 
              uma referência na cidade.
            </p>
            <p className="text-gray-700">
              Ao longo dos anos, expandimos nossos serviços mantendo sempre o compromisso com a qualidade e a satisfação 
              das nossas clientes. Hoje, contamos com uma equipe de profissionais altamente qualificados e um espaço 
              acolhedor para proporcionar a melhor experiência.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Missão e Valores</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p><span className="font-bold">Missão:</span> Realçar a beleza natural de cada cliente, respeitando suas características e personalidade.</p>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p><span className="font-bold">Visão:</span> Ser referência em design de sobrancelhas, reconhecidos pela excelência e inovação.</p>
              </li>
              <li className="flex items-start">
                <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <p><span className="font-bold">Valores:</span> Qualidade, ética, respeito, inovação e compromisso com a satisfação do cliente.</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Nossa Equipe</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Conheça os profissionais dedicados que fazem do Beauty Brow Studio um lugar especial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Ana Silva",
              role: "Fundadora e Designer Sênior",
              bio: "Especialista em micropigmentação com mais de 10 anos de experiência no mercado de beleza.",
              image: "/images/team1.jpg"
            },
            {
              name: "Carla Oliveira",
              role: "Designer de Sobrancelhas",
              bio: "Especializada em técnicas de design natural e laminação de sobrancelhas.",
              image: "/images/team2.jpg"
            },
            {
              name: "Mariana Costa",
              role: "Especialista em Micropigmentação",
              bio: "Certificada internacionalmente em técnicas avançadas de micropigmentação fio a fio.",
              image: "/images/team3.jpg"
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index + 0.8 }}
            >
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Foto da Equipe</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-500 mb-3">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
