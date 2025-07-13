import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import SocialMediaSection from './components/SocialMediaSection';
//import FundoAnimado from '..src/FundoAnimado';
//import FundoBrilho from './components/FundoBrilho' ;
import Imagem from './components/Imagem' ;




function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/galeria" element={<GalleryPage />} />
            <Route path="/depoimentos" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

