import "./certificate.scss";
import RocketseatNode from "../../assets/rockeatseat-node.png";
import RocketseatReact from "../../assets/rocketseat-react.png";
import AluraReact from "../../assets/react-alura.png";
import Scrum from "../../assets/scrum.png";
import EnglishCertificate from "../../assets/ingles.png";
import CertificateContent from "../../components/certificate-content/CertificateContent";

export default function Certificate() {
  interface certificateDataType {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
  }

  const certificateData: certificateDataType[] = [
    {
      id: 1,
      image: RocketseatNode,
      title: "Nodejs - Rocketseat",
      description: "Desenvolvimento de uma aplicação back-end em Node.js",
      link: "https://app.rocketseat.com.br/certificates/f30898e8-ba0e-43de-9974-35bb920b6889",
    },
    {
      id: 2,
      image: RocketseatReact,
      title: "React - Rocketseat",
      description: "Desenvolvimento de uma aplicação front-end em ReactJS",
      link: "https://app.rocketseat.com.br/certificates/942211fa-8f39-4b91-bf1e-14ed527081cf",
    },
    {
      id: 3,
      image: AluraReact,
      title: "React - Alura",
      description: "Curso de React da Alura em parceiria com a oracle",
      link: "https://cursos.alura.com.br/user/rafinha-berger/degree-react-turma4-one-523867/certificate",
    },
    {
      id: 4,
      image: Scrum,
      title: "Scrum - CertiProf",
      description:
        "Certificação de Scrum, um framework de gestão de projetos que ajuda equipes a trabalhar de forma ágil e colaborativa",
      link: "https://www.credly.com/badges/04bf6d2d-aae0-45f2-b1cd-1ae9bdc232a7/public_url",
    },
    {
      id: 5,
      image: EnglishCertificate,
      title: "Certificação de Inglês - EF SET",
      description:
        "O EF SET é um conjunto de exames de certificação de idiomas on-line para estudantes e profissionais.",
      link: "https://cert.efset.org/b97Tzj",
    },
  ];

  return (
    <>
      <section className="certificate-container">
        <h1>Certificados</h1>

        <main>
          {certificateData.map((data) => {
            return (
              <CertificateContent
                key={data.id}
                image={data.image}
                certificateTitle={data.title}
                certificateDescription={data.description}
                certificateLink={data.link}
              />
            );
          })}
        </main>
      </section>
    </>
  );
}
