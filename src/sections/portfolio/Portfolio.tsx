import financialManagement from "../../assets/financialmanagement.png";
import otimalogImage from "../../assets/imagemotimalog.png";
import amaclassicosImage from "../../assets/imagemamaclassicos.png";
import PortfolioContent from "../../components/portfolio-content/PortfolioContent";
import epifaniasImage from "../../assets/bandaepifanias.png";

export default function Portfolio() {
  return (
    <>
      <section
        id="portfolio"
        className="bg-dark-purple-800 w-screen py-20 px-4 md:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center w-full max-w-300 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>

          <p className="text-lg md:text-xl text-gray-300 mb-16">
            Útimos projetos concluídos
          </p>

          <div className="flex flex-col gap-20 w-full">
            <PortfolioContent
              image={epifaniasImage}
              projectName="Banda Epifanias"
              projectDescription="Projeto de site estilo Linktree para a banda Epifanias, com links para redes sociais. Tecnologias: React, TypeScript, CSS"
              projectLink="https://epifanias.vercel.app/"
              projectGithubLink="https://github.com/RafaelBerger/epifanias"
            />
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
            Deploy: Vercel (frontend) e Render (backend)
            Aviso: O backend pode demorar um pouco para iniciar, pois está hospedado em um serviço gratuito que coloca o servidor em modo de hibernação quando não está em uso."
              projectLink="https://moneycontroler.vercel.app/"
              projectGithubLink="https://github.com/RafaelBerger/financial-management-frontend"
            />
          </div>
        </div>
      </section>
    </>
  );
}
