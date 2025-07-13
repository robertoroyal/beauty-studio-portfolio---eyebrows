import React from 'react';
import { motion } from 'framer-motion';
import VideoGallery from '../components/VideoGallery';

const GalleryPage: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Galeria</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira nossos trabalhos e transformações realizadas no Beauty Brow Studio.
          </p>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Vídeos de Procedimentos</h2>
          <VideoGallery />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Antes e Depois</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 gap-1">
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Antes</span>
                  </div>
                  <div className="aspect-square bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">Depois</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Design de Sobrancelhas</h3>
                  <p className="text-sm text-gray-600">Técnica: {item % 2 === 0 ? 'Micropigmentação' : 'Design com Henna'}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Quer ver mais do nosso trabalho? Siga-nos nas redes sociais para atualizações diárias.
          </p>
          <a
            href="/contato"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Agende seu Horário
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;
