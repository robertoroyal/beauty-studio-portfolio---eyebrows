import React from 'react';

import Imagem from '../components/Imagem' ;
//import FundoBrilho from '../components/FundoBrilho' ;
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import VideoGallery from '../components/VideoGallery';
import TestimonialsSection from '../components/TestimonialsSection';
import SocialMediaSection from '../components/SocialMediaSection';

//import FundoAnimado from '../components/FundoAnimado';


const HomePage = () => {
  return (
    <>
      <Imagem />

      {/* Conteúdo acima do fundo */}
      <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        <HeroSection />
        <ServicesSection />
        <VideoGallery />
        <SocialMediaSection />
        {/* outros componentes */}
      </div>
    </>
  );
};

export default HomePage;





//const HomePage: React.FC = () => {
//function HomePage() {
  //return (
    //<div className="relative min-h-screen">
    
      //{/* Fundo de partículas brilhantes */}
      //<FundoBrilho />

      //{/* Conteúdo */}
      //<div className="relative z-10 p-4">
       // <HeroSection />
       // <ServicesSection />
       // <VideoGallery />
       // <TestimonialsSection />
       // <SocialMediaSection />
      //</div>
    //</div>
  //);
//}
    
//export default HomePage;


//<div>
      //<HeroSection />
      //<ServicesSection />
      //<VideoGallery />
      //<TestimonialsSection />
      //<SocialMediaSection />
    //</div>
  //);
//};

