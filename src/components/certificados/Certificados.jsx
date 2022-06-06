import React from "react";
import "./certificados.css";
import "../portfolio/portfolio.css";
import IMG1 from "../../assests/certificado-celep.jpg";
import IMG2 from "../../assests/certificado-coursera-programacao.jpg";
import IMG3 from "../../assests/certificado-coursera-ux.jpg";
import IMG4 from "../../assests/certificado-figma.jpg";
import IMG5 from "../../assests/certificado-ingles.jpg";
import IMG6 from "../../assests/certificado-scrum.jpg";

const certificatesData = [
  {
    id: 1,
    image: IMG1,
    title: "Celep - UX/UI Design",
  },
  {
    id: 2,
    image: IMG2,
    link: "https://www.coursera.org/account/accomplishments/verify/L5EMEC29GD5X",
    title: "Coursera - Fundamentos Programação Web",
  },
  {
    id: 3,
    image: IMG3,
    link: "https://www.coursera.org/account/accomplishments/verify/4XF2ZCYZS58U",
    title: "Coursera - UX/UI Design",
  },
  {
    id: 4,
    image: IMG4,
    link: "https://www.udemy.com/certificate/UC-bfd007ec-5c90-4e4f-a144-52e4eedf77cc/",
    title: "Udemy - Figma",
  },
  {
    id: 5,
    image: IMG5,
    title: "Do Zero A Fluência - Inglês Básico",
  },
  {
    id: 6,
    image: IMG6,
    link: "https://www.credly.com/badges/04bf6d2d-aae0-45f2-b1cd-1ae9bdc232a7/public_url",
    title: "CertiProf - Srum Foundation",
  },
];

const certificados = () => {
  return (
    <section id="certificates">
      <h5>Some of my Studies</h5>
      <h2>Certificates</h2>
      <div id="certificate-container">
        {certificatesData.map(({ id, image, title, link }) => {
          return (
            <article key={id} className="portfolio__item centralizar">
              <a href={link} target="_blank">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
              </a>
              <h4 className="certificate-title">{title}</h4>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default certificados;
