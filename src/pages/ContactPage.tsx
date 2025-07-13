import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contato</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco para agendar seu horário ou tirar dúvidas sobre nossos serviços.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Seu email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Seu telefone"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="agendamento">Agendamento</option>
                  <option value="informacoes">Informações sobre serviços</option>
                  <option value="cancelamento">Cancelamento</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-black mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Endereço</h3>
                    <p className="text-gray-600">Rua Exemplo, 123 - Centro</p>
                    <p className="text-gray-600">São Paulo - SP, 01234-567</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaPhone className="text-black mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Telefone</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-gray-600">(11) 2222-2222</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-black mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">contato@beautybrowstudio.com</p>
                    <p className="text-gray-600">agendamento@beautybrowstudio.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaClock className="text-black mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold">Horário de Funcionamento</h3>
                    <p className="text-gray-600">Segunda - Sexta: 9h às 19h</p>
                    <p className="text-gray-600">Sábado: 9h às 18h</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-500">Mapa de Localização</span>
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário para design de sobrancelhas."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
