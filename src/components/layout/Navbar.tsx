import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-black text-white py-2 shadow-lg' : 'bg-white text-black py-4'
  }`;

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Depoimentos', path: '/depoimentos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' },
  ];

  const socialLinks = [
    { icon: <FaInstagram size={20} />, url: 'https://instagram.com' },
    { icon: <FaFacebook size={20} />, url: 'https://facebook.com' },
    { icon: <FaTiktok size={20} />, url: 'https://tiktok.com' },
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold" onClick={closeMenu}>
          Beauty Brow Studio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-gray-500 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-green-600 transition-colors duration-300"
            >
              <FaWhatsapp />
              <span>Agendar</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-black"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="block py-2 hover:text-gray-500 transition-colors duration-300"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-500 transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>

              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 bg-green-500 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors duration-300"
              >
                <FaWhatsapp />
                <span>Agendar</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
