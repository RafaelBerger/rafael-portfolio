import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/dashboard-sw.jpg";
import IMG2 from "../../assests/aluracord.jpg";
import IMG3 from "../../assests/jogo-da-velha.jpg";
import IMG4 from "../../assests/quiz-app.jpg";
import IMG5 from "../../assests/morada-bar.jpg";
import IMG6 from "../../assests/videos-platform.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Star Wars Dashboard",
    github: "https://github.com/RafaelBerger/dashboard-starwars",
    demo: "https://dashboard-sw.vercel.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Aluracord",
    github: "https://github.com/RafaelBerger/aluracord",
    demo: "https://aluracord-rafael.vercel.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Jogo da Velha",
    github: "https://github.com/RafaelBerger/jogo-da-velha",
    demo: "https://jogo-da-velha-rafael.vercel.app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Quiz App",
    github: "https://github.com/RafaelBerger/quiz-game",
    demo: "https://programming-quiz-game.vercel.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Morada Bar",
    github: "https://github.com/RafaelBerger/morada-bar",
    demo: "https://moradabar.vercel.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Videos Platform",
    github: "https://github.com/RafaelBerger/event-platform",
    demo: "https://videos-platform.vercel.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
