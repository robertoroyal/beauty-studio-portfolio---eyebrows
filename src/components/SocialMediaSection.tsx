import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTiktok, FaShare, FaWhatsapp } from 'react-icons/fa';
import { href } from 'react-router-dom';

const SocialMediaSection: React.FC = () => {
  // Dados simulados do feed do Instagram
  const instagramPosts = [
    {
      id: 1,
      imagesUrl: '/images/jovem-relaxando-em-um-salao-de-beleza.jpg',
      likes: 124,
      comments: 15,
      caption: 'Design de sobrancelhas perfeito para realçar o olhar! #designdesobrancelhas #beleza'
    },
    {
      id: 2,
      imageUrl: '/images/jovem-relaxando-em-um-salao-de-beleza.jpg',
      likes: 98,
      comments: 8,
      caption: 'Micropigmentação fio a fio: resultado natural e duradouro! #micropigmentacao #sobrancelhasperfeitas'
    },
    {
      id: 3,
      imageUrl: '/mulher-vestindo-tapa-olhos-de-alto-angulo.jpg',
      likes: 156,
      comments: 22,
      caption: 'Antes e depois incrível com nossa técnica exclusiva! #antesedepois #transformacao'
    },
    {
      id: 4,
      imageUrl: '/images/instagram4.jpg',
      likes: 87,
      comments: 5,
      caption: 'Laminação de sobrancelhas: volume e definição! #laminacao #tendencias'
    },
    {
      id: 5,
      imageUrl: '/images/instagram5.jpg',
      likes: 112,
      comments: 12,
      caption: 'Cliente satisfeita com seu novo design! #clientesatisfeita #belezanatural'
    },
    {
      id: 6,
      imageUrl: '/images/instagram6.jpg',
      likes: 145,
      comments: 18,
      caption: 'Promoção especial de design com henna! #henna #promocao'
    }
  ];

  const handleShareOnWhatsApp = () => {
    const text = "Conheça o Beauty Brow Studio, especialistas em design de sobrancelhas! Visite nosso site: ";
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + url)}`, '_blank');
  };

  const handleShareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Acompanhe nas Redes Sociais</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das últimas tendências, promoções e resultados incríveis seguindo nossas redes sociais.
          </p>
          
          <div className="flex justify-center space-x-6 mt-6">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTiktok size={24} />
            </motion.a>
          </div>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Instagram Feed</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="relative overflow-hidden rounded-lg aspect-square"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <div className="flex items-center">
                        <span className="mr-1">❤️</span>
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-1">💬</span>
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">Imagem do Instagram</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Compartilhe Nosso Site</h3>
          <p className="text-gray-600 mb-6">
            Gostou do nosso trabalho? Compartilhe com seus amigos!
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              onClick={handleShareOnWhatsApp}
              className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </motion.button>
            <motion.button
              onClick={handleShareOnFacebook}
              className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook />
              <span>Facebook</span>
            </motion.button>
            <motion.button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copiado para a área de transferência!');
              }}
              className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaShare />
              <span>Copiar Link</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
