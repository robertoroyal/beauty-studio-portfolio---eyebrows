import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, description, videoUrl, thumbnail }) => {
  const [playing, setPlaying] = React.useState(false);

  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-video">
        {!playing && (
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <motion.button
              className="bg-white bg-opacity-80 text-black p-4 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setPlaying(true)}
            >
              <FaPlay />
            </motion.button>
            <img 
              src={thumbnail} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover -z-10" 
            />
          </div>
        )}
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          playing={playing}
          controls={playing}
          light={!playing ? thumbnail : false}
          onEnded={() => setPlaying(false)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default VideoCard;
