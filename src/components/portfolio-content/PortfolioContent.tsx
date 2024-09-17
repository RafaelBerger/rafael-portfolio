import Button from "../button/Button";
import "./portfolio-content.scss";

interface PortfolioContentProps {
  image: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectGithubLink: string;
}

export default function PortfolioContent({
  image,
  projectName,
  projectDescription,
  projectLink,
  projectGithubLink,
}: PortfolioContentProps) {
  return (
    <>
      <main>
        <h2 id="project-name-mobile">{projectName}</h2>
        <div className="image-container">
          <img src={image} alt="Imagem de projeto" />
        </div>
        <div className="information-container">
          <div className="information">
            <h2 id="project-name">{projectName}</h2>
            <p>{projectDescription}</p>
          </div>
          <div className="buttons">
            <Button href={projectLink}>Abrir projeto</Button>
            <Button href={projectGithubLink}>Github</Button>
          </div>
        </div>
      </main>
    </>
  );
}
