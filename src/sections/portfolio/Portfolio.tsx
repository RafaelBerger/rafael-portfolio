import "./portfolio.scss";
import financialManagement from "../../assets/financialmanagement.png";
import otimalogImage from "../../assets/imagemotimalog.png";
import amaclassicosImage from "../../assets/imagemamaclassicos.png";
import PortfolioContent from "../../components/portfolio-content/PortfolioContent";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-container">
        <div className="all-content-container">
          <h1>Portfolio</h1>

          <p>Útimos projetos concluídos</p>

          <PortfolioContent
            image={amaclassicosImage}
            projectName="AmaClassicos"
            projectDescription="Desenvolvi um site de catálogo de carros clássicos para o cliente, com informações e imagens dos veículos consumidos por API pelo CMS Hygraph.
            Tecnologias: React (com ReactRouter), TypeScript, Hygraph (CMS), GraphQL"
            projectLink="https://amaclassicos.vercel.app"
            projectGithubLink="https://github.com/RafaelBerger/amaclassicos"
          />
          <PortfolioContent
            image={otimalogImage}
            projectName="OtimaLog"
            projectDescription="Projeto de site estilo landing page para uma empresa de operador logistico de redespacho, informando história, serviços e contato. Tecnologias: React, TypeScript, CSS"
            projectLink="https://otimalog.com.br"
            projectGithubLink="https://github.com/RafaelBerger/otimalog"
          />
          <PortfolioContent
            image={financialManagement}
            projectName="Financial Management"
            projectDescription="Aplicativo Fullstack para controle de gastos pessoais, com cadastro e listagem de ganhos e gastos, integração via API REST.
            Tecnologias: React, TailwindCSS, Node.js, Express, PostgreSQL
            Deploy: Vercel (frontend) e Render (backend)"
            projectLink="https://moneycontroler.vercel.app/"
            projectGithubLink="https://github.com/RafaelBerger/financial-management-frontend"
          />
        </div>
      </section>
    </>
  );
}
