import "./portfolio.scss";
import moradaImage from "../../assets/morada-img.png";
import dashboardImage from "../../assets/dashboard-img.png";
import epifaniasImage from "../../assets/bandaepifanias.png";
import PortfolioContent from "../../components/portfolio-content/PortfolioContent";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-container">
        <div className="all-content-container">
          <h1>Portfolio</h1>

          <PortfolioContent
            image={moradaImage}
            projectName="MoradaBar"
            projectDescription="Criei um site de apresentação para o MoradaBar, um charmoso barzinho em Santo André.
              Informações sobre o ambiente e detalhes de contato, tudo com uma navegação fácil e um design responsivo que garante uma experiência de usuário otimizada em dispositivos móveis e desktops.
              Utilizei React para esse projeto."
            projectLink="https://moradabar.com"
            projectGithubLink="https://github.com/RafaelBerger/morada-bar"
          />
            <PortfolioContent
              image={epifaniasImage}
              projectName="Banda Epifanias"
              projectDescription="Site no estilo Linktree para direcionar os usuários para as redes sociais da banda."
              projectLink="https://epifanias.vercel.app"
              projectGithubLink="https://github.com/RafaelBerger/epifanias"
            />
          <PortfolioContent
            image={dashboardImage}
            projectName="Dashboard de Star Wars"
            projectDescription="Dashboard de star wars, consumindo uma API pública de star wars e integrando ao projeto usando
            conceitos de AJAX e Rest API."
            projectLink="https://dashboard-sw.vercel.app/"
            projectGithubLink="https://github.com/RafaelBerger/dashboard-starwars"
          />
        </div>
      </section>
    </>
  );
}
