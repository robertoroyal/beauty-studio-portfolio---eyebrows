import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

const BlogPage: React.FC = () => {
  // Dados simulados de posts do blog
  const blogPosts = [
    {
      id: 1,
      title: "Como escolher o design de sobrancelhas ideal para seu formato de rosto",
      excerpt: "Descubra como identificar o formato do seu rosto e qual design de sobrancelhas valoriza mais suas características naturais.",
      date: "15 de Maio, 2025",
      author: "Ana Silva",
      category: "Dicas",
      image: "/images/blog1.jpg"
    },
    {
      id: 2,
      title: "Mitos e verdades sobre a micropigmentação de sobrancelhas",
      excerpt: "Esclarecemos as principais dúvidas e desfazemos mitos comuns sobre o procedimento de micropigmentação.",
      date: "10 de Maio, 2025",
      author: "Carla Oliveira",
      category: "Procedimentos",
      image: "/images/blog2.jpg"
    },
    {
      id: 3,
      title: "Cuidados essenciais após a laminação de sobrancelhas",
      excerpt: "Aprenda como manter o resultado da laminação por mais tempo com estes cuidados simples e eficazes.",
      date: "5 de Maio, 2025",
      author: "Mariana Costa",
      category: "Cuidados",
      image: "/images/blog3.jpg"
    },
    {
      id: 4,
      title: "Tendências de sobrancelhas para 2025",
      excerpt: "Conheça as principais tendências de design de sobrancelhas que estão fazendo sucesso este ano.",
      date: "28 de Abril, 2025",
      author: "Ana Silva",
      category: "Tendências",
      image: "/images/blog4.jpg"
    },
    {
      id: 5,
      title: "Como a henna pode transformar suas sobrancelhas",
      excerpt: "Descubra os benefícios da henna para sobrancelhas e como ela pode ser uma alternativa natural para realçar seu olhar.",
      date: "20 de Abril, 2025",
      author: "Carla Oliveira",
      category: "Procedimentos",
      image: "/images/blog5.jpg"
    },
    {
      id: 6,
      title: "Sobrancelhas perfeitas: como manter em casa",
      excerpt: "Dicas práticas para manter suas sobrancelhas sempre bem cuidadas entre as visitas ao salão.",
      date: "15 de Abril, 2025",
      author: "Mariana Costa",
      category: "Dicas",
      image: "/images/blog6.jpg"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dicas, tendências e informações sobre o mundo das sobrancelhas e beleza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Imagem do Blog</span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaTag className="mr-1" />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center">
                    <FaUser className="mr-1" />
                    {post.author}
                  </span>
                  <a
                    href={`/blog/${post.id}`}
                    className="text-black font-medium hover:underline"
                  >
                    Ler mais
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Quer receber nossas dicas e novidades diretamente no seu email?
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-grow px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800 transition-colors duration-300">
                Inscrever
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
