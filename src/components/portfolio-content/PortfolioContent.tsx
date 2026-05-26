import Button from "../button/Button";

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
      <main className="flex w-full flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start">
        <h2
          id="project-name-mobile"
          className="md:hidden text-2xl font-bold mb-4"
        >
          {projectName}
        </h2>
        <div className="image-container w-full md:w-80 md:h-64 lg:w-100 lg:h-80 md:shrink-0">
          <img
            src={image}
            alt="Imagem de projeto"
            className="w-full max-w-70 md:max-w-none h-auto md:h-full rounded-lg object-cover"
          />
        </div>
        <div className="information-container flex flex-col gap-8 lg:gap-10 md:flex-1 pt-0.5">
          <div className="information">
            <h2
              id="project-name"
              className="hidden md:block text-2xl font-bold mb-4"
            >
              {projectName}
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed">
              {projectDescription}
            </p>
          </div>
          <div className="buttons flex gap-5 flex-wrap">
            <Button href={projectLink}>Abrir projeto</Button>
            <Button href={projectGithubLink}>Github</Button>
          </div>
        </div>
      </main>
    </>
  );
}
