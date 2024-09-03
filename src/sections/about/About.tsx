import "./about.scss";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function About() {
  return (
    <>
      <section className="about-container">
        <div className="about-wrap">
          <div className="about-information">
            <h1>Sobre mim</h1>
            <p>
              Sou Desenvolvedor Fullstack formado em análise e desenvolvimento
              de sistemas, e com habilidades que abrangem todo o ciclo de
              desenvolvimento de software, desde a concepção até a entrega. Meu
              conhecimento inclui tanto o desenvolvimento de front-end quanto
              back-end, me permitindo criar aplicações completas, integradas e
              eficientes. <br /> <br /> Tenho conhecimento em diversas
              tecnologias e frameworks modernos, possuo um forte compromisso com
              boas práticas de programação, como clean code, versionamento de
              código e testes automatizados. Estou sempre em busca de novas
              oportunidades para aplicar e expandir meu conhecimento.
            </p>
            <br />
            <br />
            <p>
              <a
                href="https://linkedin.com/in/rafael-berger"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={28} color="#4ac4c4" />
                <span id="link">linkedin.com/in/rafael-berger</span>
              </a>
            </p>
            <p>
              <a
                href="mailto:rafaelberger.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail size={28} color="#4ac4c4" />
                <span id="link">rafaelberger.dev@gmail.com</span>
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/5511999361076"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare size={28} color="#4ac4c4" />
                <span id="link">(11)99936-1076</span>
              </a>
            </p>
          </div>
          <div className="img-container">
            <img
              src="https://github.com/rafaelberger.png"
              alt="Foto do rafael"
            />
          </div>
        </div>
      </section>
    </>
  );
}
