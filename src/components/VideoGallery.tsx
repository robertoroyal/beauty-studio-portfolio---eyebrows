import React from 'react';
import { motion } from 'framer-motion';
import VideoCard from '../components/VideoCard';

const VideoGallery: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: "Design de Sobrancelhas Clássico",
      description: "Técnica tradicional de design que realça a beleza natural das sobrancelhas.",
      videoUrl: "https://www.youtube.com/shorts/a9W9FaBpljE?feature=share/watch?v=example1",
      thumbnail: "/images/video-thumb1.jpg"
    },
    {
      id: 2,
      title: "Micropigmentação Fio a Fio",
      description: "Procedimento que simula fios naturais, preenchendo falhas e dando mais definição.",
      videoUrl: "https://www.youtube.com/shorts/vSKDpeO3pyc?feature=share/watch?v=example2",
      thumbnail: "/images/video-thumb2.jpg"
    },
    {
      id: 3,
      title: "Design com Henna",
      description: "Técnica que utiliza henna para preencher e dar mais volume às sobrancelhas.",
      videoUrl: "https://www.youtube.com/shorts/-J5-2UmWXw8?feature=share/watch?v=example3",
      thumbnail: "/images/video-thumb3.jpg"
    },
    {
      id: 4,
      title: "Laminação de Sobrancelhas",
      description: "Procedimento que alinha os fios, dando um aspecto mais volumoso e definido.",
      videoUrl: "https://www.youtube.com/shorts/V0JBAN7Itjk?feature=share/watch?v=example4",
      thumbnail: "/images/video-thumb4.jpg"
    },
    {
      id: 5,
      title: "Coloração de Sobrancelhas",
      description: "Técnica que dá cor e definição às sobrancelhas, realçando o olhar.",
      videoUrl: "https://www.youtube.com/shorts/1ZyxAUfF9OM?feature=share/watch?v=example5",
      thumbnail: "/images/video-thumb5.jpg"
    },
    {
      id: 6,
      title: "Antes e Depois - Transformações",
      description: "Veja as incríveis transformações realizadas em nosso salão.",
      videoUrl: "https://www.youtube.com/shorts/wFIfLSWrdlg?feature=share/shorts/8tY3VlVgfgA?feature=share/watch?v=example6",
      thumbnail: "/images/video-thumb6.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços em Ação</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos em vídeo e veja a qualidade e dedicação
            que colocamos em cada procedimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: video.id * 0.1 }}
            >
              <VideoCard
                title={video.title}
                description={video.description}
                videoUrl={video.videoUrl}
                thumbnail={video.thumbnail}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
