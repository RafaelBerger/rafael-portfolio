import Cv from "../assets/rafaelberger-cv.pdf";
import RafaelFotoDiferente from "../assets/foto-rafael-diferente.png";
import financialManagement from "../assets/financialmanagement.png";
import otimalogImage from "../assets/imagemotimalog.png";
import amaclassicosImage from "../assets/imagemamaclassicos.png";
import epifaniasImage from "../assets/bandaepifanias.png";
import RocketseatNode from "../assets/rockeatseat-node.png";
import RocketseatReact from "../assets/rocketseat-react.png";
import AluraReact from "../assets/react-alura.png";
import Scrum from "../assets/scrum.png";
import EnglishCertificate from "../assets/ingles.png";
import type { PortfolioContentData } from "../types/cms";

export const fallbackContent: PortfolioContentData = {
  profile: {
    name: "Rafael Berger",
    role: "Desenvolvedor FullStack",
    phoneLabel: "(11)99936-1076",
    whatsappUrl: "https://wa.me/5511999361076",
    email: "rafaelberger.dev@gmail.com",
    linkedinUrl: "https://linkedin.com/in/rafaelberger",
    heroImage: "https://github.com/rafaelberger.png",
    aboutImage: RafaelFotoDiferente,
    resumePdf: Cv,
  },
  projects: [
    {
      id: "banda-epifanias",
      image: epifaniasImage,
      title: "Banda Epifanias",
      description:
        "Projeto de site estilo Linktree para a banda Epifanias, com links para redes sociais. Tecnologias: React, TypeScript, CSS",
      projectUrl: "https://epifanias.vercel.app/",
      githubUrl: "https://github.com/RafaelBerger/epifanias",
      order: 1,
    },
    {
      id: "amaclassicos",
      image: amaclassicosImage,
      title: "AmaClassicos",
      description:
        "Desenvolvi um site de catalogo de carros classicos para o cliente, com informacoes e imagens dos veiculos consumidos por API pelo CMS Hygraph. Tecnologias: React (com ReactRouter), TypeScript, Hygraph (CMS), GraphQL",
      projectUrl: "https://amaclassicos.vercel.app",
      githubUrl: "https://github.com/RafaelBerger/amaclassicos",
      order: 2,
    },
    {
      id: "otimalog",
      image: otimalogImage,
      title: "OtimaLog",
      description:
        "Projeto de site estilo landing page para uma empresa de operador logistico de redespacho, informando historia, servicos e contato. Tecnologias: React, TypeScript, CSS",
      projectUrl: "https://otimalog.com.br",
      githubUrl: "https://github.com/RafaelBerger/otimalog",
      order: 3,
    },
    {
      id: "financial-management",
      image: financialManagement,
      title: "Financial Management",
      description:
        "Aplicativo Fullstack para controle de gastos pessoais, com cadastro e listagem de ganhos e gastos, integracao via API REST. Tecnologias: React, TailwindCSS, Node.js, Express, PostgreSQL. Deploy: Vercel (frontend) e Render (backend). Aviso: O backend pode demorar um pouco para iniciar, pois esta hospedado em um servico gratuito que coloca o servidor em modo de hibernacao quando nao esta em uso.",
      projectUrl: "https://moneycontroler.vercel.app/",
      githubUrl:
        "https://github.com/RafaelBerger/financial-management-frontend",
      order: 4,
    },
  ],
  certificates: [
    {
      id: "rocketseat-node",
      image: RocketseatNode,
      title: "Nodejs - Rocketseat",
      description: "Desenvolvimento de uma aplicacao back-end em Node.js",
      certificateUrl:
        "https://app.rocketseat.com.br/certificates/f30898e8-ba0e-43de-9974-35bb920b6889",
      order: 1,
    },
    {
      id: "rocketseat-react",
      image: RocketseatReact,
      title: "React - Rocketseat",
      description: "Desenvolvimento de uma aplicacao front-end em ReactJS",
      certificateUrl:
        "https://app.rocketseat.com.br/certificates/942211fa-8f39-4b91-bf1e-14ed527081cf",
      order: 2,
    },
    {
      id: "alura-react",
      image: AluraReact,
      title: "React - Alura",
      description: "Curso de React da Alura em parceiria com a oracle",
      certificateUrl:
        "https://cursos.alura.com.br/user/rafinha-berger/degree-react-turma4-one-523867/certificate",
      order: 3,
    },
    {
      id: "scrum-certiprof",
      image: Scrum,
      title: "Scrum - CertiProf",
      description:
        "Certificacao de Scrum, um framework de gestao de projetos que ajuda equipes a trabalhar de forma agil e colaborativa",
      certificateUrl:
        "https://www.credly.com/badges/04bf6d2d-aae0-45f2-b1cd-1ae9bdc232a7/public_url",
      order: 4,
    },
    {
      id: "ef-set",
      image: EnglishCertificate,
      title: "Certificacao de Ingles - EF SET",
      description:
        "O EF SET e um conjunto de exames de certificacao de idiomas on-line para estudantes e profissionais.",
      certificateUrl: "https://cert.efset.org/b97Tzj",
      order: 5,
    },
  ],
};
