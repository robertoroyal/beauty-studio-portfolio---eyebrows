import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// Importando os estilos do slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface TestimonialProps {
  name: string;
  image: string;
  rating: number;
  text: string;
  service: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, image, rating, text, service }) => {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg p-6 mx-2 my-4"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start mb-4">
        <div className="mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-black" 
          />
        </div>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{service}</p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < rating ? "text-yellow-500" : "text-gray-300"} 
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <FaQuoteLeft className="text-gray-200 text-4xl absolute -top-2 -left-1 opacity-30" />
        <p className="text-gray-700 relative z-10 pl-6">{text}</p>
      </div>
    </motion.div>
  );
};

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "Ana Silva",
      image: "/images/testimonial1.jpg",
      rating: 5,
      text: "Amei o resultado do meu design de sobrancelhas! A profissional foi super atenciosa e entendeu exatamente o que eu queria. Recomendo muito!",
      service: "Design de Sobrancelhas"
    },
    {
      name: "Carla Oliveira",
      image: "/images/testimonial2.jpg",
      rating: 5,
      text: "Frequento o salão há mais de um ano e sempre saio satisfeita. O ambiente é super agradável e as profissionais são muito qualificadas.",
      service: "Design e Coloração"
    },
    {
      name: "Mariana Costa",
      image: "/images/testimonial3.jpg",
      rating: 4,
      text: "Fiz o design com henna e adorei o resultado! Durou bastante tempo e ficou super natural. Já marquei meu retorno!",
      service: "Design com Henna"
    },
    {
      name: "Juliana Mendes",
      image: "/images/testimonial4.jpg",
      rating: 5,
      text: "Melhor lugar para fazer sobrancelhas! Atendimento impecável e resultado perfeito. Minhas sobrancelhas nunca estiveram tão bonitas.",
      service: "Micropigmentação"
    },
    {
      name: "Patricia Almeida",
      image: "/images/testimonial5.jpg",
      rating: 5,
      text: "Fiz a micropigmentação e estou encantada! O resultado ficou muito natural e economizo tanto tempo na minha rotina de maquiagem agora.",
      service: "Micropigmentação"
    }
  ];

  return (
    <div className="py-8">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            name={testimonial.name}
            image={testimonial.image}
            rating={testimonial.rating}
            text={testimonial.text}
            service={testimonial.service}
          />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
