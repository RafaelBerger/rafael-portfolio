import Button from "../components/button/Button";
import type { SiteProfile } from "../types/cms";

interface HomeProps {
  profile: SiteProfile;
}

export default function Home({ profile }: HomeProps) {
  return (
    <>
      <section
        id="home"
        className="w-screen h-screen bg-dark-purple-900 flex justify-center items-center pt-20 sm:pt-16 md:pt-0 px-4"
      >
        <main className="w-11/12 md:w-4/5 lg:w-3/4 max-w-7xl min-h-[70vh] flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-16 lg:gap-20">
            <div className="introduction flex flex-col gap-4">
              <p className="text-lg md:text-xl lg:text-2xl font-light">
                Olá, meu nome é
              </p>
              <p className="nome text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                {profile.name}
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-light">
                Sou {profile.role}
              </p>
            </div>
            <div className="buttons flex justify-start gap-10 flex-wrap w-full">
              <div className="scale-105 md:scale-110 origin-left">
                <Button href={profile.resumePdf} isDownload={true}>
                  Baixar CV
                </Button>
              </div>
              <div className="scale-105 md:scale-110 origin-left">
                <Button href={profile.whatsappUrl}>Fale Comigo</Button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center lg:justify-end">
            <img
              src={profile.heroImage}
              alt={`Foto de ${profile.name}`}
              className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
              style={{ boxShadow: "0 8px 24px rgba(74, 196, 196, 0.15)" }}
            />
          </div>
        </main>
      </section>
    </>
  );
}
