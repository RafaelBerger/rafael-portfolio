import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-dark-purple-800 w-screen py-12 px-4 text-center">
      <a
        href="#home"
        className="text-white no-underline text-xl font-bold hover:text-cyan-accent transition-colors duration-300 block mb-8"
      >
        Rafael Berger
      </a>
      <ul className="flex flex-wrap justify-center gap-6 list-none m-0 p-0 mb-8">
        <li>
          <a
            href="#home"
            className="text-white no-underline hover:text-cyan-accent transition-colors duration-300"
          >
            Início
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white no-underline hover:text-cyan-accent transition-colors duration-300"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#tecnologies"
            className="text-white no-underline hover:text-cyan-accent transition-colors duration-300"
          >
            Tecnologias
          </a>
        </li>

        <li>
          <a
            href="#portfolio"
            className="text-white no-underline hover:text-cyan-accent transition-colors duration-300"
          >
            Portfólio
          </a>
        </li>
        <li>
          <a
            href="#certificate"
            className="text-white no-underline hover:text-cyan-accent transition-colors duration-300"
          >
            Certificados
          </a>
        </li>
      </ul>

      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://linkedin.com/in/rafael-berger"
          target="_blank"
          className="text-white hover:text-cyan-accent transition-colors duration-300 text-2xl"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/RafaelBerger"
          target="_blank"
          className="text-white hover:text-cyan-accent transition-colors duration-300 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/5511999361076"
          target="_blank"
          className="text-white hover:text-cyan-accent transition-colors duration-300 text-2xl"
        >
          <BsWhatsapp />
        </a>
      </div>

      <div className="text-gray-400 text-sm">
        <p>&copy; Rafael de Andrade Berger. Todos os direitos resevados</p>
      </div>
    </footer>
  );
};

export default Footer;
