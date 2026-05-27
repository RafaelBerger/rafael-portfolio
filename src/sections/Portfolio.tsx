import PortfolioContent from "../components/portfolio-content/PortfolioContent";
import type { Project } from "../types/cms";

interface PortfolioProps {
  projects: Project[];
}

export default function Portfolio({ projects }: PortfolioProps) {
  return (
    <>
      <section
        id="portfolio"
        className="bg-dark-purple-800 w-screen py-20 px-4 md:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center w-full max-w-300 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>

          <p className="text-lg md:text-xl text-gray-300 mb-16">
            Ultimos projetos concluidos
          </p>

          <div className="flex flex-col gap-20 w-full">
            {projects.map((project) => (
              <PortfolioContent
                key={project.id}
                image={project.image}
                projectName={project.title}
                projectDescription={project.description}
                projectLink={project.projectUrl}
                projectGithubLink={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
