import "./portfolio.scss";
import moradaImage from "../../assets/morada-img.png";
import financialManagement from "../../assets/financialmanagement.png";
import epifaniasImage from "../../assets/bandaepifanias.png";
import PortfolioContent from "../../components/portfolio-content/PortfolioContent";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-container">
        <div className="all-content-container">
          <h1>Portfolio</h1>

          <PortfolioContent
            image={financialManagement}
            projectName="Financial Management"
            projectDescription="Aplicativo Fullstack para controle de gastos pessoais, com cadastro e listagem de ganhos e gastos, integração via API REST.
            Tecnologias: React, TailwindCSS, Node.js, Express, PostgreSQL
            Deploy: Vercel (frontend) e Render (backend)"
            projectLink="https://moneycontroler.vercel.app/"
            projectGithubLink="https://github.com/RafaelBerger/financial-management-frontend"
          />
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
        </div>
      </section>
    </>
  );
}
