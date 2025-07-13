import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Beauty Brow Studio</h3>
            <p className="mb-4">
              Especialistas em design de sobrancelhas, oferecendo serviços de alta qualidade para realçar sua beleza natural.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li>Segunda - Sexta: 9h às 19h</li>
              <li>Sábado: 9h às 18h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>Endereço: Rua Exemplo, 123</li>
              <li>Telefone: (00) 00000-0000</li>
              <li>Email: contato@beautybrowstudio.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Beauty Brow Studio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
