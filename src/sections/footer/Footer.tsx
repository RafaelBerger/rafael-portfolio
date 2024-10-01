import "./footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Rafael Berger
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Início</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#tecnologies">Tecnologias</a>
        </li>

        <li>
          <a href="#portfolio">Portfólio</a>
        </li>
        <li>
          <a href="#certificate">Certificados</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/rafael-berger" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/RafaelBerger" target="_blank">
          <FaGithub />
        </a>
        <a href="https://wa.me/5511999361076" target="_blank">
          <BsWhatsapp />
        </a>
      </div>

      <div className="footer__copyright">
        <p>&copy; Rafael de Andrade Berger. Todos os direitos resevados</p>
      </div>
    </footer>
  );
};

export default Footer;
