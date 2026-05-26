import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import RafaelFotoDiferente from "../../assets/foto-rafael-diferente.png";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="bg-dark-purple-800 w-screen min-h-screen py-20 px-4 flex items-center"
      >
        <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="about-information w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Sobre mim</h1>
            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
              Sou Desenvolvedor Fullstack formado em análise e desenvolvimento
              de sistemas, e com habilidades que abrangem todo o ciclo de
              desenvolvimento de software, desde a concepção até a entrega. Meu
              conhecimento inclui tanto o desenvolvimento de front-end quanto
              back-end, me permitindo criar aplicações completas, integradas e
              eficientes. <br /> <br /> Tenho conhecimento em diversas
              tecnologias e frameworks modernos, possuo um forte compromisso com
              boas práticas de programação, como clean code, versionamento de
              código e etc. Estou sempre em busca de novas oportunidades para
              aplicar e expandir meu conhecimento.
            </p>
            <br />
            <br />
            <p className="flex items-center gap-3 mb-3">
              <a
                href="https://wa.me/5511999361076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white no-underline hover:text-cyan-accent transition-colors duration-300"
              >
                <FaWhatsappSquare size={28} color="#4ac4c4" />
                <span>(11)99936-1076</span>
              </a>
            </p>
            <p className="flex items-center gap-3 mb-3">
              <a
                href="https://linkedin.com/in/rafaelberger"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white no-underline hover:text-cyan-accent transition-colors duration-300"
              >
                <FaLinkedin size={28} color="#4ac4c4" />
                <span>linkedin.com/in/rafaelberger</span>
              </a>
            </p>
            <p className="flex items-center gap-3">
              <a
                href="mailto:rafaelberger.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white no-underline hover:text-cyan-accent transition-colors duration-300"
              >
                <MdEmail size={28} color="#4ac4c4" />
                <span>rafaelberger.dev@gmail.com</span>
              </a>
            </p>
          </div>
          <div className="img-container w-full lg:w-1/2 flex justify-center">
            <img
              src={RafaelFotoDiferente}
              alt="Foto do rafael"
              className="w-80 h-80 md:w-96 md:h-96 lg:w-md lg:h-112 rounded-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
